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
        <div className="event_Overview">
          <p className="event_Overview-name">{this.state.event.name}</p>
          <p className="event_Overview-localDate">{this.state.event.local_date}</p>
          <button className="details-btn" onClick={() => this.handleShowDetails()}>Details</button>
        </div>
        {showDetails &&
          <div className="event_Details">
            <p className="event_Details-description">{this.state.event.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default Event;