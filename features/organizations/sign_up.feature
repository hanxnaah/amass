Feature: Organization sign-up

  Scenario: Successful sign-up
    When I sign up as an organization
    Then an organization admin notification is sent

  Scenario: Successful survey response
    When I sign up as an organization
      And I fill out a survey response
    Then an organization survey response admin notification is sent
