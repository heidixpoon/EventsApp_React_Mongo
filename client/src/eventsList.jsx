import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const EventsList = ({savedEvents}) => (
  <div>

    <Card>
      <CardTitle title="Events List" subtitle="Manage your events" />
      <CardText>
        {savedEvents[0].name}
      </CardText>
      <CardText>
        {savedEvents[0].date}
      </CardText>
      <CardText>
        {savedEvents[0].venue}
      </CardText>

    </Card>



  </div>
)

export default EventsList;