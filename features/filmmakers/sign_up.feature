Feature: Filmmaker sign-up

  Scenario: Successful sign-up
    When I sign up as a filmmaker
    Then a filmmaker sign-up admin notification is sent

  Scenario: Successful survey response
    When I sign up as a filmmaker
      And I fill out a survey response
    Then a filmmaker survey response admin notification is sent
