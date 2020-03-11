import React from 'react';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('User hasn\'t specified a number, the default number is 32', ({ given, when, then }) => {

    let AppWrapper;
    given('the user opens the app', () => {
      AppWrapper = mount(<App />)
    });

    when('the user has not changed the default number of events in the list', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEventsListed')).toBe(32);
    });

    then('32 events will show in the list of events', () => {
      expect(AppWrapper.find('.events').length).toBeLessThanOrEqual(19);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {

    given('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    let AppWrapper;
    when('the user changes the default number of events', () => {
      AppWrapper.find('.numberOfEventsListed').simulate('change', { target: { value: 10 } });
    });

    let NumberOfEventsWrapper;
    then('the list of events will show the number of events that the user has set before', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEventsListed')).toBe(10);
    });
  });
});