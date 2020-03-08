import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event />, render', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={
      {
        name: 'Fotoshooting für Freelancer in München',
        local_date: '2019-07-17',
        local_time: '15:00',
        yes_rsvp_count: 17,
        venue: {
          id: 26052503,
          name: 'WERK1 München',
          lat: 48.123779296875,
          lon: 11.608222961425781,
          repinned: false,
          address_1: 'Atelierstraße 29',
          city: 'München',
          country: 'de',
          localized_country_name: 'Germany'
        },
        group: {
          created: 1552473723000,
          name: 'Freelancing in Deutschland'
        }
      }
    }/>);
  });

  test('render list of events', () => {
    expect(EventWrapper.find('.event-list')).toHaveLength(1);
  });

  test('render event data', () => {
    EventWrapper.find('.event-list li');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('render event time', () => {
    //const event = EventWrapper.props('event');
    expect(EventWrapper.find('.event_date-time')).toHaveLength(1);
  });

  test('render event date', () => {
    //const events = EventWrapper.state('events');
    expect(EventWrapper.find('.event_date-time')).toHaveLength(1);
  });

  test('render group name', () => {
    //const events = EventWrapper.state('events');
    expect(EventWrapper.find('.group_name')).toHaveLength(1);
  });

  test('render rsrv count', () => {
    //const events = EventWrapper.state('events');
    expect(EventWrapper.find('.event_rsvp')).toHaveLength(1);
  });

  test('render detail button', () => {
    expect(EventWrapper.find('.showDetails'));
  });

  test('details', () => {
    const events = EventWrapper.state('showDetails');
    expect(events).toBe(false);
  });

  test('click on button should change of state for showDetails', () => {
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });
})