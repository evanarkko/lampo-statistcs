import React from 'react'

const AdditionForm = ({addNew, changeName, changeLat, changeLong}) => {
    return (
        <div style={styleSheet.container}>
            <form onSubmit={addNew}>
                <div>
                    City <input type="text" style={styleSheet.input} onChange={changeName}/>
                </div>
                <div style={styleSheet.or}>OR</div>
                <div>
                    lat <input type="text" style={{...styleSheet.input, ...styleSheet.latlon}} onChange={changeLat}/>&nbsp;
                    lon <input type="text" style={{...styleSheet.input, ...styleSheet.latlon}} onChange={changeLong}/>
                </div>
                <button type="submit" style={styleSheet.button}>Add Location</button>
            </form>
        </div>
    )
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
        borderTopColor: 'darkred' /*change according to weather blue - red ?*/
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