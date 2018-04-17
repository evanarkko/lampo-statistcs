import React from 'react'

const DataForm = ({addReading, changeReading, unit}) => {
    return(
        <div style={styleSheet.container}>
            <form onSubmit={() => console.log('addReading')}>
                <input type="text" placeholder={'°' + unit[0]} style={styleSheet.input}/> <button style={styleSheet.button}>Add reading</button>
            </form>
        </div>
    )
}

const styleSheet = {
    container: {
    },
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
        marginTop: '1em'
    }
}

export default DataForm