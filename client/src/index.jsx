import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


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
    console.log(this.state.term)
    axios.post('/search', {
      data: this.state.term
    })
    .then((res)=> {
      console.log('hi', res)
      // this.setState({
      //   events: res.data.emb
      // })
    })
  }

  onChange (e) {
    console.log('changing');
    this.setState({
      term: e.target.value
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Heidi's Event App"
            showMenuIconButton = {false}
          />

          <h3>Coming soon!</h3>
          <br/>
          <TextField
            hintText="Enter artists/event keywords"
            onChange={this.onChange}
          /><br />
          <RaisedButton label="Search" style={{"margin":"12"}} primary={true} onClick={this.onSearch}/>


        </div>
      </MuiThemeProvider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))