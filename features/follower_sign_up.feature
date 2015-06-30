Feature: Follower

  Scenario: Signing-up
    When I sign up as a follower with skywalker@ra.net
    Then a follower is created for skywalker@ra.net
      And a notification is sent to admins titled 'New follower: skywalker@ra.net'
