import React from 'react'

class AdditionForm extends React.Component {
    constructor() {
        super()
        this.state = {
            newLocation: {
                name: null,
                lat: null,
                long: null
            }
        }

    }

    render() {
        return (
            <div style={styleSheet.container}>
                <form onSubmit={this.submitNew()}>
                    <div>
                        City <input type="text" style={styleSheet.input} onChange={this.changeName()}/>
                    </div>
                    <div style={styleSheet.or}>OR</div>
                    <div>
                        lat <input type="text" style={{...styleSheet.input, ...styleSheet.latlon}}
                                   onChange={this.changeLat()}/>&nbsp;
                        lon <input type="text" style={{...styleSheet.input, ...styleSheet.latlon}}
                                   onChange={this.changeLong()}/>
                    </div>
                    <button type="submit" style={styleSheet.button}>Add Location</button>
                </form>
            </div>
        )
    }

    submitNew = () => (event) => {
        event.preventDefault()
        this.props.addNew(
            this.state.newLocation.name,
            this.state.newLocation.lat,
            this.state.newLocation.long)
    }

    changeName = () => (event) => {
        this.changeArbitrary('name', event.target.value)
    }

    changeLat = () => (event) => {
        this.changeArbitrary('lat', event.target.value)
    }

    changeLong = () => (event) => {
        this.changeArbitrary('long', event.target.value)
    }

    changeArbitrary = (valueType, value) => {
        let location = this.state.newLocation
        location[valueType] = value
        this.setState({newLocation: location})
    }

}

const styleSheet = {
    container: {
        marginBottom: '0.5em',
        marginTop: '1em',
        padding: '2em',
        fontSize: '1.5em',
        fontWeight: 'bold',
        textAlign: 'center',
        border: 'solid',
        borderRadius: '0.5em',
        borderWidth: 1,
        borderTopWidth: 2,
        borderTopColor: 'darkred' /*change according to weather blue  - yellow - red ?*/
    },
    input: {
        border: 'solid',
        borderWidth: 1,
        borderRadius: '0.3em',
        padding: 4
    },
    latlon: {
        maxWidth: '4em'
    },
    or: {
        fontWeight: 'bold',
        margin: '0.5em',
        fontSize: '1.5em'
    },
    button: {
        fontSize: '1em',
        fontWeight: 'bold',
        padding: '6px',
        borderWidth: '1.5px',
        borderColor: 'black',
        borderRadius: '0.5em',
        backgroundColor: 'white',
        marginTop: '1em'
    }
}

export default AdditionForm