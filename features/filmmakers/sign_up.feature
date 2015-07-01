Feature: Filmmaker sign-up

  Scenario: Successful sign-up
    When I sign up as a filmmaker
    Then a filmmaker admin notification is sent
