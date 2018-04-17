import React, {Component} from 'react';
import AppIntro from './components/AppIntro'
import LocationList from './components/LocationList'
import AdditionForm from './components/LocationAdditionForm'
import Unit from './enums/Unit'

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            locations: [
                {
                    name: 'Tokyo',
                    lat: 35.658,
                    long:139.733,
                    latest: 284.15,
                    recent: {
                        high: 286.15,
                        low: 280.15,
                        avg: 283.65
                    }
                }
                ,
                {
                    name: 'Helsinki',
                    lat: 60.170,
                    long: 24.949,
                    latest: 284.15,
                    recent: {
                        high: 286.15,
                        low: 280.15,
                        avg: 283.65
                    }
                },
                {
                    name: 'New York',
                    lat: 40.740,
                    long: -73.994,
                    latest: 284.15,
                    recent: {
                        high: 286.15,
                        low: 280.15,
                        avg: 283.65
                    }

                },
                {
                    name: 'Amsterdam',
                    lat: 52.365,
                    long: 4.904,
                    latest: 284.15,
                    recent: {
                        high: 286.15,
                        low: 280.15,
                        avg: 283.65
                    }
                },
                {
                    name: 'Dubai',
                    lat: 25.093,
                    long: 55.156,
                    latest: 284.15,
                    recent: {
                        high: 286.15,
                        low: 280.15,
                        avg: 283.65
                    }
                }
            ],
            currentUnit: Unit.celsius

        }


    }

    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <h1 style={{fontSize: "4em", fontWeight: 'bold', marginLeft: '1em'}}>
                        Lämpö Statistics</h1>
                </header>
                <AppIntro
                    locations={this.state.locations}
                    unit={this.state.currentUnit}
                    toggleUnit={this.toggleUnit()}/>
                <LocationList
                    locations={this.state.locations}
                    unit={this.state.currentUnit}/>
                <AdditionForm/>
            </div>
        );
    }

    toggleUnit = () => () => {
        switch (this.state.currentUnit) {
            case Unit.celsius:
                this.setState({currentUnit: Unit.fahrenheit})
                break
            case Unit.fahrenheit:
                this.setState({currentUnit: Unit.kelvin})
                break
            case Unit.kelvin:
                this.setState({currentUnit: Unit.celsius})
                break
            default:
                break

        }
    }



}



export default App;
