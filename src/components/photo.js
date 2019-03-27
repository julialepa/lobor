import React, { Component } from 'react'

class App extends Component {
    render() {
      return (
        <div>
         {this.props.photo.title}
        </div>
      );
    }
  }
  
  export default App;