Feature: User Recover Password

  As a user
  I want to recover my password that I forgot

  @watch
  Scenario: As a user
    Given that a user exists with email "test@example.com"
    When I click to recover my password for "test@example.com"
    And I visit the link that came in the recovery password email
    Then I should not need to know my current password
    And I can reset my password
