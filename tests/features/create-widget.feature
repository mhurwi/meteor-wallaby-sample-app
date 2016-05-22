Feature: Create a widget

  As a user,
  I want to create a new widget
  So that I can have lot's of great widgets

  @watch
  Scenario: Create
    Given that I am logged in as "test@example.com"
    And I visit the widgets index
    When I submit the completed form
    Then I should see the new widget
