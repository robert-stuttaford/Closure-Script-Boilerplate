@javascript
Feature: Jasmine Unit-testing Specs

  Scenario: View all specs and see no failures
    When I visit the all-specs page
    Then I should see no failing specs
