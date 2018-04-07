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
      term: null
    }

    this.onSearch = this.onSearch.bind(this)
    this.onChange = this.onChange.bind(this)
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
    let {events} = this.state
    console.log(events)

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Heidi's Event App"
            showMenuIconButton = {false}
          />

          <br/>

          <div className="outerDiv">

          <Card>
            <CardTitle title="Search Events" subtitle="Do it :)" />

            <TextField
              hintText="Enter artists/event keywords"
              onChange={this.onChange}
              style={{"width": "70%" }}
            /><br />
            <RaisedButton label="Search" style={{"margin":"12"}} primary={true} onClick={this.onSearch}/>
            <br/>
            <br/>

            <CardTitle title="Results:" />


            {events.map((event, i)=> {
              return(
              <ResultItem key={i} event={event} />
              )
              })
            }


            <br/>
            <br/>


          </Card>

            <br/>
            <br/>

          <EventsList/>

          </div>  


        </div>
      </MuiThemeProvider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))