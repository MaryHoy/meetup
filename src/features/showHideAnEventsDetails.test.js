import React from 'react';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('By default, an event is collapsed', ({ given, and, when, then }) => {
    	given('user opens the app', () => {

    	});

		let AppWrapper;
		and('app has loaded', () => {
			AppWrapper = mount(<App />);
		  })
		
    	when('user hasn’t opened any event', () => {
			AppWrapper.update();
     	 	expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
		});
	
    	then('the user should see the collapsed list of events', () => {
			expect(AppWrapper.find('showDetails')).toHaveLength(0);
   		});
	  });

	  test('User can expand an event to see its details', ({ given, and, when, then }) => {
		let AppWrapper;
	
		given('user hasnt opened any event', () => {
		  AppWrapper = mount(<App />);
		});
		
		and('the list of events has been loaded', () => {
		  AppWrapper.update();
		  expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
		});

    	when('the user clicks on an event', () => {
		  AppWrapper.find('.event .details-btn').at(0).simulate('click');
    	});

    	then('the details of the selected event will show', () => {
		  expect(AppWrapper.find(".event .event_Details")).toHaveLength(1);  
		});
	  });

    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
		let AppWrapper;

		given('user opens app', () => {
		  AppWrapper = mount(<App />);
		});

    	and('details of event are shown', () => {
		  AppWrapper.update();
      	  AppWrapper.find('.event .details-btn').at(0).simulate('click');
    	  expect(AppWrapper.find('.event .event_Details')).toHaveLength(1);
  		});

    	when('the user clicks on the details-button', () => {
	      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    	});

    	then('the details of the events are collapsed', () => {
		  expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
		});
	  });

});