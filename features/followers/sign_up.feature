Feature: Follower sign-up

  Scenario: Successful sign-up
    When I sign up as a follower
    Then a follower admin notification is sent
