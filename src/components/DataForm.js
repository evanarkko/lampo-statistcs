import React from 'react'

class DataForm extends React.Component {
    constructor() {
        super()
        this.state = {
            newReading: ''
        }

    }

    render() {
        return (
            <div style={styleSheet.container}>
                <form onSubmit={this.submitReading()}>
                    <input type="text" placeholder={'°' + this.props.unit[0]} style={styleSheet.input} onChange={this.changeReading()}/>
                    <button style={styleSheet.button}>Add reading</button>
                </form>
            </div>
        )
    }

    submitReading = () => (event) => {
        event.preventDefault()
        /*
        VALIDATE READING HERE AND CONTROL I/O
        */
        this.props.addReading(parseFloat(this.state.newReading, 10), this.props.location.name)
    }

    changeReading = () => (event) => {
        this.setState({newReading: event.target.value})
        /*
        VALIDATE READING HERE AND ALERT USER
        */
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