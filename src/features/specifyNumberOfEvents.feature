Feature: Specify number of events

Scenario: User hasn't specified a number, the default number is 32
  Given the user opens the app
  When the user has not changed the default number of events in the list
  Then 32 events will show in the list of events

Scenario: User can change the number of events they want to see
  Given the user opens the app
  When the user changes the default number of events
  Then the list of events will show the number of events that the user has set before