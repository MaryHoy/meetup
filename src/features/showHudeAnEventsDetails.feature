Feature: Show/hide an event's details

Scenario: By default, an event is collapsed
  Given user opens the app
  When user hasn’t opened any event
  Then the user should see the collapsed list of events

Scenario: User can expand an event to see its details
  Given user hasn’t opened any event
  When the user clicks on an event
  Then the details of the selected event will show

Scenario: User can collapse an event to hide its details
  Given user opens app
  And details of event are shown
  When the user clicks on the details-button
  Then the details of the events are collapsed
  And only the list of events is shown