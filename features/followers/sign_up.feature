Feature: Follower sign-up

  Scenario: Successful sign-up
    When I sign up as a follower with skywalker@ra.net
    Then an admin notification is sent titled 'New follower: skywalker@ra.net'
