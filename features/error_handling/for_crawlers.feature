@rack_test @allow-rescue
Feature: Error handling for crawlers

  Scenario: Invalid page
    When I go to an invalid page
    Then I get a 404 status code

  Scenario: Server blows up
    When server blows up
    Then I get a 500 status code
