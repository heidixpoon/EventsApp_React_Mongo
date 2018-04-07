import React from 'react';
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import {CardTitle} from 'material-ui/Card'


class ResultItem extends React.Component {
  constructor(props) {
    super(props)
    this.onClickAttend = this.onClickAttend.bind(this)
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
      this.props.getSavedEvent();
    }).catch((err) => {
      console.log(err)
    })

  }

  render() {
    let {event, id} = this.props
    console.log(event)
    console.log('result item')

    return (
    
    <div>
      {id===0 ? <CardTitle title="Results:" /> : ''}

      <br/><br/>

      <div className = "flex-container">
        <div className = "flex-item"> 
          <img src={event.images[1].url}></img>
          <h4>Event: {event.name}</h4>  
          <h4>Date: {event.dates.start.dateTime}</h4>   
          <h4>Location: {event._embedded.venues[0].name}</h4> 
        </div>

        <div className = "flex-item result-buttons">
          <RaisedButton label="Buy Tickets!" backgroundColor="#F28A7F" labelColor="#fff" onClick={this.onClickTickets} style={{"margin":"12"}}/>
          <br/><br/>
          <RaisedButton label="I want to attend!" style={{"margin":"12"}} onClick={this.onClickAttend}/>
        </div>
      </div>

    </div>) 
  }
}

export default ResultItem;