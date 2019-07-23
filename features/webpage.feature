Feature: Web Page
  Scenario: Change select to Green
    Given I am on the web page
    When I change the dropdown to green
    Then the colour of the test box is green
