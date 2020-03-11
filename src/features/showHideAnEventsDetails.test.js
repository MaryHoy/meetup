import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import Event from '../Event';
import { shallow, mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('By default, an event is collapsed', ({ given, when, then }) => {
    let AppWrapper;
    given('user opens the app', () => {
      AppWrapper = mount(<App />);
  });

    when('user hasn’t opened any event', () => {
      expect(AppWrapper.find('.eventDetails')).toHaveLength(0);
    });

    then('the user should see the collapsed list of events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.events')).toHaveLength(mockEvents.events.length);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('user hasn’t opened any event', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on an event', () => {
      AppWrapper.update();
      AppWrapper.find('.detail-btn').at(0).simulate('click');
    });

    then('the details of the selected event will show', () => {
      expect(AppWrapper.find('.eventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {

    let AppWrapper;
    given('user opens app', () => {
      AppWrapper = mount(<App />);
    });

    and('details of event are shown', () => {
      AppWrapper.update();
      AppWrapper.find('.detail-btn').at(0).simulate('click');
    });

    when('the user clicks on the details-button', () => {
      AppWrapper.find('.detail-btn').at(0).simulate('click');
    });

    then('the details of the events are collapsed', () => {
      expect(AppWrapper.find('.eventDetails')).toHaveLength(0);
    });

    and('only the list of events is shown', () => {
      expect(AppWrapper.find('.events')).toHaveLength(mockEvents.events.length);
    });
  });
});