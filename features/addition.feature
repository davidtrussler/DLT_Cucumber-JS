Feature: Addition
  Scenario: 1 + 0
    Given I start with 1
    When I add 0
    Then the result is 1

  Scenario: 1 + 1
    Given I start with 1
    When I add 1
    Then the result is 2
