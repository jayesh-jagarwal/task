import React from "react";

class IncDecChange extends React.Component {

    constructor() {
        super()
        this.state = { count: 1 }
    }

    inc = () => {
        this.setState((x) => ({
            count: x.count + 1
        }))
    }

    dec = () => {
        this.setState((x) => ({
            count: x.count - 1
        }))
    }
    res = () => {
        this.setState((x) => ({
            count: 0
        }))
    }



    render() {
        return (
            <>
                <div className="b">
                    <h1>Increment Decrement State Change By Button Click</h1>
                    <br></br>
                    <h2> {this.state.count}</h2>
                    <br></br>
                    <button className="sty" onClick={this.dec}>Decrement</button>
                    <button className="sty" onClick={this.inc}>Increment</button>
                    <br></br>
                    <button className="sty" onClick={this.res}>Reset</button>
                </div>


            </>
        )
    }
}

export default IncDecChange;