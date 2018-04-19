import React from 'react'
import ReadingValidation from '../logic/ReadingValidation'

class DataForm extends React.Component {
    constructor() {
        super()
        this.state = {
            newReading: '',
            inputColor: 'black'
        }

    }

    render() {
        return (
            <div style={styleSheet.container}>
                <form onSubmit={this.submitReading()}>
                    <input
                        type="text"
                        placeholder={'°' + this.props.unit[0]}
                        style={{...styleSheet.input, color: this.state.inputColor}}
                        onChange={this.changeReading()}/>
                    <button
                        style={styleSheet.button}
                        className='blackHover'>Add reading</button>
                </form>
            </div>
        )
    }

    submitReading = () => (event) => {
        event.preventDefault()
        if(ReadingValidation.validateAsIntOrFloat(this.state.newReading)){
            if(ReadingValidation.validateAsRealTemperature(this.state.newReading, this.props.unit)){
                this.props.addReading(parseFloat(this.state.newReading, 10), this.props.location.name)
                return
            }
        }
        this.props.addReading(null, this.props.location.name)
    }

    changeReading = () => (event) => {
        this.setState({newReading: event.target.value})
        this.setState({inputColor: 'black'})
        if(!ReadingValidation.validateAsIntOrFloat(event.target.value) && event.target.value) {
            this.setState({inputColor: 'red'})
        }else if(!ReadingValidation.validateAsRealTemperature(event.target.value, this.props.unit)){
            this.setState({inputColor: 'grey'})
        }
    }

}


const styleSheet = {
    container: {},
    input: {
        border: 'solid',
        borderWidth: 1,
        borderRadius: '0.3em',
        maxWidth: '6em',
        padding: 2
    },
    button: {
        fontSize: '1em',
        fontWeight: 'bold',
        padding: 2,
        borderWidth: '1.5px',
        borderColor: 'black',
        borderRadius: '0.5em',
        backgroundColor: 'white',
        marginTop: '1em',
        marginLeft: 1
    }
}

export default DataForm