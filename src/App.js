import React, {Component} from 'react';
import AppIntro from './components/AppIntro'
import LocationList from './components/LocationList'
import AdditionForm from './components/LocationAdditionForm'
import Unit from './enums/Unit'
import GoogleAPI from './services/GoogleMapsAPI'
import LocationsAPI from './services/LocationsAPI'
import UnitConversion from './logic/UnitConversion'

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            locations: [],
            currentUnit: Unit.celsius

        }
    }

    async componentWillMount(){
        const data = await LocationsAPI.getAll()
        this.setState({locations: data})
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
        if(!reading && reading!==0){
            alert('Bad reading')
            return
        }

        const asKelvin = UnitConversion.convertFrom(reading, this.state.currentUnit).toFixed(2)

        let locations = this.state.locations
        locations.forEach(loc => {
            if(loc.name === locationName){
                loc.latest.temp = asKelvin
            }
        })
        this.setState({locations})
        /* in locationService
        ....http send to server
        * ..receive new version with updated fields as response
        * update fields*/
    }

    addNewLocation = () => async (name, lat, long) => {
        let newLocation = {
            name: '',
            lat: 0,
            long: 0,
            latest: {
                temp: 273.15,
                added: ''
            },
            recent: {
                high: 0,
                low: 0,
                avg: 0
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
        /*Save to server*/
    }


}


export default App;
