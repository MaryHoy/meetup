import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('By default, an event is collapsed', ({ given, when, then }) => {
    	given('user opens the app', () => {

    	});

    	when('user hasn’t opened any event', () => {

    	});

    	then('the user should see the collapsed list of events', () => {

    	});
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
    	given('user hasn’t opened any event', () => {

    	});

    	when('the user clicks on an event', () => {

    	});

    	then('the details of the selected event will show', () => {

    	});
    });

    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    	given('user opens app', () => {

    	});

    	and('details of event are shown', () => {

    	});

    	when('the user clicks on the details-button', () => {

    	});

    	then('the details of the events are collapsed', () => {

    	});

    	and('only the list of events is shown', () => {

    	});
    });

});