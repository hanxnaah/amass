Feature: Filmmaker sign-up

  Scenario: Successful sign-up
    When I sign up as a filmmaker named Scooby Doo
    Then an admin notification is sent titled 'Be a filmmaker: Scooby Doo'
