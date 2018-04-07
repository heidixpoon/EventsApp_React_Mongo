import React from 'react';
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton'
import {CardText} from 'material-ui/Card'

import axios from 'axios'


class EventItem extends React.Component {
  constructor(props) {
    super(props)

    this.onClickDelete = this.onClickDelete.bind(this)

  }

  onClickDelete(){
    console.log('view', this.props.event)
    axios.delete('/events', {
      params: {
        event: this.props.event
      }
    })
    .then((res)=> {
      console.log('event item res')
      this.props.getSavedEvent()
 
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    let {event} = this.props

    return (
    
    <div className="event-container">

      <img src={event.image} style={{"borderRadius": "5px"}} width="350" height="200" alt="soon event" />
      
      <div className="eventInfo">
        <div>
          <CardText style={{"fontWeight":"bold"}}>{event.name}</CardText>
          <CardText style={{"fontWeight":"bold"}}>Date: {event.date}</CardText>
          <CardText style={{"fontWeight":"bold"}}>Venue: {event.venue}</CardText>
        </div>

        <div className="eventInfo-trash">
          <svg style={{"width":"35px", "height":"35px", "cursor":"pointer" }} onClick ={this.onClickDelete} viewBox="0 0 24 24">
            <path fill="#9FCCD4" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        </div>

      </div>
    </div>

    ) 
  }
}

export default EventItem;