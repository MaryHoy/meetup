import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('User hasn\'t specified a number, the default number is 32', ({ given, when, then }) => {
    	given('the user opens the app', () => {

    	});

    	when('the user has not changed the default number of events in the list', () => {

    	});

    	then('32 events will show in the list of events', () => {

    	});
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
    	given('the user opens the app', () => {

    	});

    	when('the user changes the default number of events', () => {

    	});

    	then('the list of events will show the number of events that the user has set before', () => {

    	});
    });

});