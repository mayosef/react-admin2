import React from 'react';

class AmountControl extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            counter: 0,
            show: true
        }
        this.increaseItem()
    }
    increaseItem() {
        this.setState(prevState => {
            return ({
                counter:prevState.counter +1
            })
        })
        }
    decreaseItem() {
        this.setState(prevState => {
            return({
                counter:prevState.counter -1
            })
        })
    }
    toggleClick() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.increaseItem.bind(this)}>Increase</button>
                <button onClick={this.decreaseItem.bind(this)}>decrease</button>
                <button onClick={this.toggleClick.bind(this)}>
                    {this.state.show ? 'Hide Number' : 'Show Number'}
                </button>
                {this.state.show ? <h2>{this.state.counter}</h2> : ''}
            </div>
        )
    }
 }

 export default AmountControl;