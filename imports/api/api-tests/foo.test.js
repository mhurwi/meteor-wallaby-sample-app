import td from "testdouble";
import {expect} from 'chai';

const Meteor = td.object(["methods", "call", 'userId']);
const ValidatedMethod = td.object([]);
const SimpleSchema = td.object([]);

td.replace('meteor/mdg:validated-method', { ValidatedMethod});
td.replace('meteor/aldeed:simple-schema', { SimpleSchema});
td.replace("meteor/meteor", { Meteor });

const { foo } = require('../foo');

console.log(foo());

describe('it works', function() {
  it('returns foo', function() {
    expect(foo()).to.equal('bar');
  });
});
