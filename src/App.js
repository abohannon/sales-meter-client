import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';
import './App.css';

import Status from './components/status';
import Timer from './components/timer';

const createAppStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: 0,
      sales: 0,
      start: '',
      end: '',
    };
  }

  componentDidMount() {
    console.log('App mounting...');
    const API_URL = 'http://805bd17c.ngrok.io/api/campaigns/1';
    const API_KEY = '';
    fetch(API_URL, {
      headers: { Accept: 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          goal: data.sales_goal,
          sales: data.sold === undefined ? 0 : data.sold,
          start: data.start_at,
          end: data.end_at,
        });
      })
      .catch((error) => {
        console.log('There was an error fetching data');
        console.log(error);
      });
  }

  render() {
    const {
      container,
    } = createAppStyles();

    return (
      <MuiThemeProvider>
        <div className="App" style={container}>
          <LinearProgress
            mode="determinate"
            max={this.state.goal}
            value={this.state.sales}
            color={this.state.sales >= this.state.goal && this.state.sales !== 0 ? '#64DD17' : ''}
          />
          <Status {...this.state} />
          <Timer {...this.state} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
