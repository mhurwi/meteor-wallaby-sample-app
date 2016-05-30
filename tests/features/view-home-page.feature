Feature: View Home Page

  As a user interested in widgets,
  so that I can enjoy widget related information,
  I want to view the home page of this widget app.

  Scenario:
    Given that I am logged in as "test@example.com"
    When I visit the home page
    Then I should see a link to the widgets index
