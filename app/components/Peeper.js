import React from 'react'
import './Peeper.scss'
//jsx -> js

export default class Peeper extends React.Component {

constructor(props) {
	super(props)
	this.onTextAreaChange = this.onTextAreaChange.bind(this)
	this.state = {
		content: '',
		maxPeepLength: 40
	}
}

onTextAreaChange(event){
	this.setState({
		content: event.target.value
	})

	console.log(this.state.content)
}

render() {

	// const maxPeepLength = this.state.maxPeepLength
	// const content = this.state.content

	const { maxPeepLength, content } = this.state

	const isDisabled = content.length === 0 || content.length >= maxPeepLength

	const charsLeft = maxPeepLength - content.length

	const spanClass = charsLeft < 20 ? 'peeper___span--warning' : ""


	return (
		<div className="peeper">
			<textarea 
			className="peeper___textarea"
			onChange={this.onTextAreaChange}></textarea>
			<footer className="peeper___footer">
				<span className={spanClass}>{charsLeft}</span>
				<button disabled={isDisabled}>peep</button>
			</footer>
		</div>
		)
	}

}













