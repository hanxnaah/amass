Feature: Success stories carousel

  Scenario: Scroll through stories
    When I switch to next success story
    Then I see a different success story
