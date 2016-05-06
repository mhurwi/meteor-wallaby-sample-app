Feature: User Signup

  As a user,
  so I can have my own account on this app,
  I want to sign up as a new user

  @watch
  Scenario: User signs up on the signup page
    Given I visit the signup page
    When I complete the signup form
    Then I should be redirected to my dashboard
    And I should see my email
