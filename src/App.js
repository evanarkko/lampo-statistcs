import React, {Component} from 'react';
import AppIntro from './components/AppIntro'
import LocationSelection from './components/LocationSelection'
import Unit from './enums/Unit'

import './App.css';

class App extends Component {
    constructor() {
        super()
        /* */
        this.state = {
            locations: [
                {
                    name: 'Tokyo'
                },
                {
                    name: 'Helsinki'
                },
                {
                    name: 'New York'
                },
                {
                    name: 'Amsterdam'
                },
                {
                    name: 'Dubai'
                }
            ],
            currentUnit: Unit.celsius

        }


    }

    componentDidMount() {
        document.title = "Lämpö Stats"
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 style={{fontSize: "4em"}}>
                        Lämpö Statistics
                    </h1>
                </header>
                <AppIntro
                    locations={this.state.locations}
                    unit={this.state.currentUnit}
                    toggleUnit={this.toggleUnit()}
                />
                <LocationSelection
                    locations={this.state.locations}
                />
            </div>
        );
    }

    toggleUnit = () => () => {
        this.state.currentUnit === Unit.celsius ?
            this.setState({currentUnit: Unit.fahrenheit}) :
            this.setState({currentUnit: Unit.celsius})
    }

    /*changeLocation = () => (locationName) => {

    }*/

}



export default App;
