@watch
Feature: User logs in

  As a user,
  so I can access my account,
  I want to login

  Scenario: User logs in
    Given that a user exists with email "test@example.com"
    When I visit the login page
    Then I can login and see my dashboard
