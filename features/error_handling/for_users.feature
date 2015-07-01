@allow-rescue
Feature: Error handling for users

  Scenario: Invalid page
    When I go to an invalid page
    Then I see that the page is invalid

  Scenario: Server blows up
    When server blows up
    Then I see the homepage
