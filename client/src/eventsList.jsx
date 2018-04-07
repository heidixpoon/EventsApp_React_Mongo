import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import EventItem from './Components/eventItem.jsx'


const EventsList = ({savedEvents}) => (
  <div>

    <Card>
      <CardTitle title="My Saved Events List" subtitle="Events I'm interested in" />
      {savedEvents.map((event, i) => {
        return(
          <EventItem key={i} event={event}/>
        )
      })

      }

    </Card>



  </div>
)

export default EventsList;