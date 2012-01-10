@javascript
Feature: Start Feature

  Background:
    When I visit the app

  Scenario: Open the Chooser from the Start page
    When I click the "Choose a Cog" button
    Then I should see the "chooser" overlay
