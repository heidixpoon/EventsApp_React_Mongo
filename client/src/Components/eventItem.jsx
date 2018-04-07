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
    
    <div>
      <CardText>{event.name}</CardText>
      <CardText>{event.date}</CardText>

      <svg style={{"width":"28px", "height":"28px", "cursor":"pointer" }} onClick ={this.onClickDelete} viewBox="0 0 24 24">
        <path fill="#9FCCD4" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
      </svg>
    </div>

    ) 
  }
}

export default EventItem;