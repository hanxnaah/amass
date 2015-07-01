Feature: Organization sign-up

  Scenario: Successful sign-up
    When I sign up as an organization called Washington Capitals
    Then an admin notification is sent titled 'Post a project: Washington Capitals'
