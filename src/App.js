import React, { Component } from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

import Status from './components/status';
import Timer from './components/timer';

const createAppStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'inherit',
    borderBottom: '1px solid #e5e5e5',
    paddingBottom: 20,
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
      productID: '',
      status: false,
    };
  }

  componentDidMount() {
    const rootEl = document.querySelector('#sales-meter');
    const productID = rootEl.getAttribute('product-id');
    const API_URL = `http://32fbac73.ngrok.io/api/meter/${productID}`;
    // const API_URL = 'http://32fbac73.ngrok.io/api/meter/10972565258';
    fetch(API_URL, {
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        if (response.status === 404) {
          this.setState({
            status: false,
          });
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({
          goal: data.goal,
          sales: data.sales === undefined ? 0 : data.sales,
          start: data.start_at,
          end: data.end_at,
          productID,
          status: true,
        });
      })
      .catch((error) => {
        console.log('There was an error fetching data');
        console.log(error);
      });
  }

  render() {
    if (!this.state.status) {
      return null;
    }
    const { container } = createAppStyles();
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

export default Radium(App);
