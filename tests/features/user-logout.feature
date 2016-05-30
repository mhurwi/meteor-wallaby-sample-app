Feature: User Logs Out

  As a user,
  I want to logout

  Scenario: Logout
    Given that I am logged in as "test@example.com"
    When I logout
    Then I should see the public landing page
