import React from 'react'

const Buy = ({props}) => {
    const idProduct=props.match.params.id
    return (
        <div>
            <h1>buy screen</h1>
            <p> buy the painting: ProductID: {idProduct}</p>
        </div>
    )
}

export default Buy
