import React from 'react';
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'


class ResultItem extends React.Component {
  constructor(props) {
    super(props)

    this.onClickTickets = this.onClickTickets.bind(this)
  }

  onClickTickets(){
    let {event} = this.props
    window.location = event.url;

  }

  onClickAttend(){

    axios.post('/events', {
      data: this.props.event
    })
    .then((res)=> {
      console.log("success!")
    }).catch((err) => {
      console.log(err)
    })

  }

  render() {
    let {event} = this.props
    console.log(event)
    console.log('result item')

    return (
    
    <div>
      <img src={event.images[1].url}></img>
      <h4>Event: {event.name}</h4>  
      <h4>Date: {event.dates.start.dateTime}</h4>   
      <h4>Location: {event._embedded.venues[0].name}</h4> 
      <RaisedButton label="Buy Tickets!" primary={true} onClick={this.onClickTickets} style={{"margin":"12"}}/>
      <RaisedButton label="I want to attend!" style={{"margin":"12"}} onClick={this.onClickAttend}/>


    </div>) 
  }
}

export default ResultItem;