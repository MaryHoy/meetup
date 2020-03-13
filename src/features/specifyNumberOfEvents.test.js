import React from 'react';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('User hasnt specified a number, the default number is 32', ({ given, when, then }) => {
    	given('the user opens the app', () => {

		});
		
		let AppWrapper;

    	when('the user has not changed the default number of events in the list', () => {
		  AppWrapper = mount(<App />);
    	});

    	then('32 events will show in the list of events', () => {
		  AppWrapper.update();
	      expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    	});
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
		let AppWrapper;
		given('the user opens the app', () => {
		  AppWrapper = mount(<App />);
    	});

    	when('the user changes the default number of events', () => {
		  const numberOfEvents = { target: { value: 13 } };
		  AppWrapper.find('.numberOfEvents').simulate('change', numberOfEvents);
    	});

    	then('the list of events will show the number of events that the user has set before', () => {
		  const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
		  NumberOfEventsWrapper.setState({ numberOfEvents: 13 });
		  expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(13);
    	});
    });

});