import React, { Component } from 'react'


let total=0
export default class CheckoutSuccess extends Component {
    componentDidMount(){
        total=this.props.getCartTotalPrice()
        this.props.clearCart()
    }
    render() {
        return (
            <div>
                You have made your payment! Thanks for shopping<br/>
                your total was {total}<br/>
            </div>
        )
    }
}
