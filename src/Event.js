import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
    events: []
  };

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const event = this.props.event;
    return (
      <div className="events">
        <ul className="event-list">
          <li key={event.id}>
            <div>
              <p className="event_date-time">{event.local_time} - {event.local_date}</p>
              <p className="event_name">{event.name}</p>
              <p className="group_name">GROUP: {event.group.name}</p>
              <p className="event_rsvp">{event.yes_rsvp_count} people signed up for this meeting</p>
              {this.state.showDetails &&
              <div className="eventDetails">
                <p className="address">
                  <span>{event.venue.name},</span>
                  <span>{event.venue.address_1},</span>
                  <span>{event.venue.address_2},</span>
                  <span>{event.venue.address_3},</span>
                  <span>{event.venue.city},</span>
                  <span>{event.venue.localized_country_name}</span>
                </p>
                <div>
                  <p className="description">{event.description}</p>
                  <p className="visibility">{event.visibility}</p>
                  <p className="link"><a>{event.link}</a></p>
                </div>
              </div>
              }
              <button className="showDetails" onClick={this.handleClick}>Show Details</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Event;