import React from 'react';
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton'
import {CardText} from 'material-ui/Card'

import axios from 'axios'


class EventItem extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let {event} = this.props

    return (
    
    <div>
      <CardText>{event.name}</CardText>
    </div>

    ) 
  }
}

export default EventItem;