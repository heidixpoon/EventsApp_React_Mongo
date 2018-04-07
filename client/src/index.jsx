import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardTitle, CardText} from 'material-ui/Card'

import ResultItem from './Components/resultItem.jsx'
import EventsList from './eventsList.jsx'

import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      events: [],
      term: null,
      savedEvents: []
    }

    this.onSearch = this.onSearch.bind(this)
    this.onChange = this.onChange.bind(this)
    this.getSavedEvent = this.getSavedEvent.bind(this)
  }

  componentWillMount(){
    this.getSavedEvent()
  }

  getSavedEvent(){
    axios.get('/events')
    .then((res)=> {
      console.log('in view res', res)
      this.setState({
        savedEvents: res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  onSearch() {
    axios.post('/search', {
      data: this.state.term
    })
    .then((res)=> {
      console.log(res)
      this.setState({
        events: res.data._embedded.events
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  render () {
    let {events, savedEvents} = this.state

    return (
      <MuiThemeProvider>
        <div className="backdrop">
          <AppBar
            title="Heidi's Event App"
            showMenuIconButton = {false}
            style={{"backgroundColor": "#9FCCD4"}}
          />


          <div className="outerDiv">

          <Card style={{"backgroundColor": "rgb(247, 242, 239, .3)"}}>
            <CardTitle title="Search for Events" subtitle="Look up some concerts or events :)" />

            <div className="searchDiv">
              <TextField
                hintText="Enter artists/event keywords"
                onChange={this.onChange}
                underlineStyle = {{"borderColor": "#9FCCD4"}}
                underlineFocusStyle= {{"borderColor": "#F28A7F"}}
                style={{"width": "100%" }}
              /><br />
              <div className="submitBtn">
                <RaisedButton type="submit" label="Search" style={{"margin":"12"}}  backgroundColor="#9FCCD4" labelColor="#fff"  onClick={this.onSearch}/>
              </div>
              <br/>
              <br/>
            </div>


            <div className="result-container">
            {events.map((event, i)=> {
              return(
              <ResultItem key={i} id={i} event={event} getSavedEvent={this.getSavedEvent}/>
              )
              })
            }
            </div>


            <br/>
            <br/>


          </Card>

            <br/>
            <br/>

            {savedEvents.length>0 ? <EventsList savedEvents={savedEvents} getSavedEvent={this.getSavedEvent}/> : ''}



          </div>  


        </div>
      </MuiThemeProvider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))


