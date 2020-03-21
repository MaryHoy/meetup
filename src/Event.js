import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

class Event extends Component {
  state = {
    event: [],
    showDetails: false
  }

  handleShowDetails = () => {
    if(this.state.showDetails === false) {
      this.setState({ showDetails: true });
    }
    else {
      this.setState({ showDetails: false });
    }
  }

  render() {
    const showDetails = this.state.showDetails;
    const event = this.props.event;
    const data=[{ name: "people coming", value: event.yes_rsvp_count }, { name: "open slots", value: (event.rsvp_limit - event.yes_rsvp_count) }];
    const colors =[ "#8884d8", "#37c0ba"];

    return(
      <div className="event">
        <div className="eventOverview">
          <p className="eventOverviewName">{this.props.event.name}</p>
          <p className="eventOverviewLocalDate">{this.props.event.local_date}</p>
          <button className="details-btn" onClick={() => this.handleShowDetails()}>Details</button>
        </div>
        {event.rsvp_limit &&
            <ResponsiveContainer height={150} width={250}>
              <PieChart>
              <Pie data= {data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={32}  label >
              {
                data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index]}/>))
              }
              </Pie>
              <Legend iconSize={10} iconType = "triangle" layout="horizontal" verticalAlign="bottom" align="center" />
              <Tooltip/>
              </PieChart>
            </ResponsiveContainer>
          }
          {!event.rsvp_limit &&
            <p>{event.yes_rsvp_count} People Attending</p>
          }
        {showDetails &&
          <div className="eventDetails">
            <p className="eventDetailsDescription">{this.props.event.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default Event;