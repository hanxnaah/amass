Feature: Organization sign-up

  Scenario: Successful sign-up
    When I sign up as an organization
    Then an organization admin notification is sent
