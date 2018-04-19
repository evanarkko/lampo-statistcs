import React, {Component} from 'react';
import AppIntro from './components/AppIntro'
import LocationList from './components/LocationList'
import AdditionForm from './components/LocationAdditionForm'
import Unit from './enums/Unit'
import GoogleAPI from './services/GoogleAPI'
import UnitConversion from './logic/UnitConversion'

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            locations: [
                {
                    name: 'Tokyo',
                    lat: 35.658,
                    long: 139.733,
                    latest: {
                        temp: 284.15,
                        added: ''
                    },
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
                    latest: {
                        temp: 284.15,
                        added: ''
                    },
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
                    latest: {
                        temp: 284.15,
                        added: ''
                    },
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
                    latest: {
                        temp: 284.15,
                        added: ''
                    },
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
                    latest: {
                        temp: 284.15,
                        added: ''
                    },
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
                    unit={this.state.currentUnit}
                    addReading={this.addReading()}/>
                <AdditionForm
                    addNew={this.addNewLocation()}/>
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

    addReading = () => (reading, locationName) => {
        const asKelvin = UnitConversion.convertFrom(reading, this.state.currentUnit).toFixed(2)
        console.log(asKelvin)

        let locations = this.state.locations
        locations.forEach(loc => {
            if(loc.name === locationName){
                loc.latest.temp = asKelvin
            }
        })
        this.setState({locations})
        /*-go through list on at a time
        * -if name == locationname then update reading*/
    }

    addNewLocation = () => async (name, lat, long) => {
        let newLocation = {
            name: '',
            lat: '',
            long: '',
            latest: {
                temp: 273.15,
                added: ''
            },
            recent: {
                high: '',
                low: '',
                avg: ''
            }
        }

        if (!name) {
            if (lat && long) {
                const fetchedName = await GoogleAPI.getLocationByLatLong(lat, long)
                if (fetchedName) {
                    newLocation.name = fetchedName
                    newLocation.lat = lat
                    newLocation.long = long
                }else{
                    alert('bad lat and long values')
                    return
                }
            } else {
                alert('You are missing parameters')
                return
            }
        } else {
            newLocation.name = name
            const fetchedCoordinates = await GoogleAPI.getLatLongByLocation(name)
            if (fetchedCoordinates) {
                newLocation.lat = fetchedCoordinates.lat.toFixed(3)
                newLocation.long = fetchedCoordinates.lng.toFixed(3)
            } else {
                alert('Location not found on the google globe')
            }
        }

        this.setState({locations: this.state.locations.concat(newLocation)})
    }


}


export default App;
