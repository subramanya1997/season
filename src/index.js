// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// Import components
import SeasonDisplay from './SeasonDisplay'; 
import Spinner from './Spinner';

// compnents
class App extends React.Component {
  // Constructor
  state = { lat: null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept loction request"/>
  }

  // Must write render function
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

// Render
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);