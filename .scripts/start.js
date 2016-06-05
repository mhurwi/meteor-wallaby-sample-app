#!/usr/bin/env node

/* eslint-disable */

var path = require('path'),
  fs = require('fs'),
  extend = require('util')._extend,
  exec = require('child_process').exec,
  processes = [];

var baseDir = path.resolve(__dirname, '..'),
  chimpBin = path.resolve(baseDir, 'node_modules/.bin/chimp');

var appOptions = {
  settings: 'settings-test.json',
  port: 3100,
  env: {
    ROOT_URL: 'http://localhost:3100',
  },
  waitForMessage: 'App running at',
};

function chimpSwitches() {
  var string = '';

  // if (!process.env.CI && !process.env.TRAVIS && !process.env.CIRCLECI) {
  //   // when not in Watch mode, Chimp existing will exit Meteor too
  //   string += ' --watch';
  // }

  if (process.env.CIRCLECI) {
    string += ' --screenshotsPath="' + process.env.CIRCLE_ARTIFACTS + '"';
  }

  if (process.env.SIMIAN_API && process.env.SIMIAN_REPOSITORY) {
    string += ' --simianRepositoryId=' + process.env.SIMIAN_REPOSITORY;
    string += ' --simianAccessToken=' + process.env.SIMIAN_API;
  }

  if (process.env.CUCUMBER_JSON_OUTPUT) {
    string += ' --jsonOutput=' + process.env.CUCUMBER_JSON_OUTPUT;
  }

  return string;
}

function startAppThenChimp() {
  startProcess({
    name: 'Meteor App',
    command: 'meteor --settings ' + appOptions.settings + ' --port ' + appOptions.port,
    waitForMessage: appOptions.waitForMessage,
    options: {
      cwd: baseDir,
      env: extend(appOptions.env, process.env),
    },
  }, startChimp);
}

function startChimp() {
  var command = '--ddp=' + appOptions.env.ROOT_URL + chimpSwitches();

  startProcess({
    name: 'Chimp',
    command: chimpBin + ' ' + command,
    options: {
      env: Object.assign({}, process.env, {
        NODE_PATH: process.env.NODE_PATH +
          path.delimiter + baseDir +
          path.delimiter + baseDir + '/node_modules',
      }),
    },
  });
}

function executeProc(opts, callback) {
  return exec(opts.command, opts.options);
}

function startChimpAfterWait(proc, opts, callback) {
  if (!opts.waitForMessage) return;
  proc.stdout.on('data', function waitForMessage(data) {
    if (!data.toString().match(opts.waitForMessage)) return;
    if (!callback) return;
    callback();
  });
}

function handleSilence(proc, opts) {
  if (opts.silent) return;

  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
}

function handleLogging(proc, opts) {
  if (!opts.logFile) return;

  var logStream = fs.createWriteStream(opts.logFile, { flags: 'a' });

  proc.stdout.pipe(logStream);
  proc.stderr.pipe(logStream);
}

function setupCloseHandler(proc, opts) {
  proc.on('close', function (code) {
    console.log(opts.name, 'exited with code ' + code);
    for (var i = 0; i < processes.length; i += 1) {
      processes[i].kill();
    }
    process.exit(code);
  });
}

function startProcess(opts, callback) {
  var proc = executeProc(opts, callback);

  startChimpAfterWait(proc, opts, callback);
  handleSilence(proc, opts);
  handleLogging(proc, opts);
  setupCloseHandler(proc, opts);

  processes.push(proc);
}

startAppThenChimp();
