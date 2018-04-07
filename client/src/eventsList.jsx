import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import EventItem from './Components/eventItem.jsx'


const EventsList = ({savedEvents, getSavedEvent}) => (
  <div>

    <Card style={{"backgroundColor": "rgb(247, 242, 239, .3)"}}>
      <CardTitle title="My Events Wishlist" subtitle="Events I'm interested in" />
      {savedEvents.map((event, i) => {
        return(
          <EventItem key={i} event={event} getSavedEvent={getSavedEvent}/>
        )
      })

      }

    </Card>



  </div>
)

export default EventsList;