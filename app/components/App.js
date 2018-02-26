import React from 'react'
import Peeper from './Peeper'
import jQuery from 'jQuery'

// localhost:5000/api/peeps

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    	peeps: ["loading"]
    }
  }

componentDidMount() {
fetch('http://localhost:5000/api/peeps')
	.then(res => res.json())
	.then(res => this.setState({ peeps: res }))


$.ajax({
	url: ''
	}).done(res => {
		this.setState({ peeps: res })
	})
}


  render() {
  	const peeps = this.state.peeps
    return <div>
    <Peeper />
    {peeps.map(function(peep, index) {
    	return <h2 key={index}>{peep}</h2>
    })}
    </div>
  }

}
