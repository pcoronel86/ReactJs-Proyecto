import React from 'react'
import { Link } from 'react-router-dom'

function FinalizePurchase() {
    return (
        <div>
            <Link className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal" to={`/card`}
            >Finalizar Compra</Link>
        </div>
    )
}

export default FinalizePurchase
