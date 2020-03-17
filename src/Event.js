import React, { Component } from 'react';

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

    return(
      <div className="event">
        <div className="eventOverview">
          <p className="eventOverviewName">{this.props.event.name}</p>
          <p className="eventOverviewLocalDate">{this.props.event.local_date}</p>
          <button className="details-btn" onClick={() => this.handleShowDetails()}>Details</button>
        </div>
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