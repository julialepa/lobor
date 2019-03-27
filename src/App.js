import React, { Component } from 'react';
import './App.css';
import Photo from './components/photo'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bgColor: true,
      apiResponse: [],
      value: '',
      check: false
    }
    this.changeBgColor = this.changeBgColor.bind(this)
  }

  changeBgColor() {
    this.setState({ bgColor: !this.state.bgColor })
  }

  setValue = (event) => {
    this.setState({ value: event.target.value })
  }

  isChecked = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      check: value
    });  
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        if (response.ok && response.status === 200) {
          return response.json()
        } else {
          console.log('error' + response.status)
        }
      })
      .then(res => this.setState({ apiResponse: res }))
  }



  render() {
    this.state.apiResponse.filter(item => {
      console.log(item, item.completed, this.state.check)
      return item.userId === this.state.value
    })
    const { bgColor2 } = this.props
    return (
      <div className="App">
      <input type="text" value={this.state.value} onChange={this.setValue} />
      <input type="checkbox" checked={this.state.check} onChange={ this.isChecked }/>
        <div style={{
          backgroundColor: this.state.bgColor ? bgColor2 : 'green',
          color: 'black'
        }}>
          <div>
            {this.state.apiResponse.filter(item => item.userId == this.state.value && item.completed === this.state.check).map((item, index) => <Photo key={'key' + index }photo={item} />)}
          </div>
        </div>
        <button onClick={this.changeBgColor}>Change</button>

      </div>
    );
  }
}

export default App;

//[{}] si accede con nomearray[0]....
/*fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(res => {
    for(let i=0; i<3; i++){

        let div = document.createElement("div")
        let newText = document.createElement("p")
        let img = document.createElement('img')

        
        let id = res.data[i].id
.............

getData() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => this.setState({
      photo: json
    }))
}
        {
          this.state.photo.map((item, index) => {
            if (index < 10) {
              return <Photo key={'photo-id' + index} albumId={item.albumId} id={item.id} title={item.title} url={item.url} thumbnailUrl={item.thumbnailUrl} />
            }
          }
          )
        }

..........
        {this.state.SeND && this.state.SecondaryNewsData.map((item, index) =><SecondaryNews name={item.first_name}/>)}</div>


        git init, git add .gitignore, git add *, git commit, git remote, git -u push */