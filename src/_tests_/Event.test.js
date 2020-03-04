import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import EventList from '../EventList';
import Event from '../Event';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('test that componet is rendered', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('test that event wrapping div is rendered', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('test that event wrapping div just shows event__Overview', () => {
    expect(EventWrapper.find('.event').children()).toHaveLength(1);
  });

  test('test that event__Overview is rendered', () => {
    expect(EventWrapper.find('.event__Overview')).toHaveLength(1);
  });

  test('test that event__Overview children are rendered', () => {
    expect(EventWrapper.find('.event__Overview').children()).toHaveLength(3);
  });

  test('test that event__Details children are rendered', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event__Details--description')).toHaveLength(1);
  });

  test('test that show/hide details button is rendered', () => {
    expect(EventWrapper.find('.event__Overview button')).toHaveLength(1);
  });

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.event__Overview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('set mock eventdata as state', () => {
    EventWrapper.setState({
      event: {
        created: 1581545702000,
        duration: 10800000,
        id: "268665790",
        name: "Olympia Home Service Professional Meetup 3",
        rsvp_limit: 80,
        date_in_series_pattern: false,
        status: "upcoming",
        time: 1584666000000,
        local_date: "2020-03-19",
        local_time: "18:00",
        updated: 1581631501000,
        utc_offset: -25200000,
        waitlist_count: 79,
        yes_rsvp_count: 80,
        venue: {
        id: 8832892,
        name: "Waterstreet Cafe & Bar",
        lat: 47.04268264770508,
        lon: -122.90375518798828,
        repinned: false,
        address_1: "610 Water Street Southwest",
        city: "Olympia",
        country: "us",
        localized_country_name: "USA"
        },
        group: {
        created: 1580510066000,
        name: "Olympia Home Service Professional Mastermind Meetup",
        id: 33279122,
        join_mode: "open",
        lat: 46.9900016784668,
        lon: -122.87000274658203,
        urlname: "Olympia-Small-Business-Meetup-Group",
        who: "Members",
        localized_location: "Olympia, WA",
        state: "WA",
        country: "us",
        region: "en_US",
        timezone: "US/Pacific"
        },
        link: "https://www.meetup.com/Olympia-Small-Business-Meetup-Group/events/268665790/",
        description: "<p>THIS IS A FREE EVENT - PLEASE FINISH YOUR RSVP IN THE LINK BELOW</p> ",
        visibility: "public",
        member_pay_fee: false
      }
    });
    expect(EventWrapper.state('event').name).toBe('Olympia Home Service Professional Meetup 3');
  });
});