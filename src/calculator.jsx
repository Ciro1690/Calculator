import React from "react"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: "",
            num2: "",
            result: 0
        }
        this.setNum1 = this.setNum1.bind(this)
        this.setNum2 = this.setNum2.bind(this)
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
        this.multiply = this.multiply.bind(this)
        this.divide = this.divide.bind(this)
        this.clear = this.clear.bind(this)

    }

    setNum1(e) {
        const num1 = e.target.value ? parseInt(e.target.value) : ""
        this.setState({ num1 })
    }

    setNum2(e) {
        const num2 = e.target.value ? parseInt(e.target.value) : ""
        this.setState({ num2 })
    }

    add(e) {
        e.preventDefault()
        const result = this.state.num1 + this.state.num2
        this.setState({ result })
    }

    subtract(e) {
        e.preventDefault()
        const result = this.state.num1 - this.state.num2
        this.setState({ result })
    }    

    multiply(e) {
        e.preventDefault()
        const result = this.state.num1 * this.state.num2
        this.setState({ result })
    }

    divide(e) {
        e.preventDefault()
        const result = this.state.num1 / this.state.num2
        this.setState({ result })
    }

    clear(e) {
        e.preventDefault()
        const num1 = ""
        const num2 = ""
        this.setState({ num1, num2 })
    }

    render() {
        return (
            <div>
                <h1>Simple Calculator</h1>
                <input 
                    type="text"
                    name="num1"
                    placeholder="First Number"
                    value={this.state.num1}
                    onChange={this.setNum1}
                    />
                <input
                    type="text"
                    name="num2"
                    placeholder="Second Number"
                    value={this.state.num2}
                    onChange={this.setNum2}
                    />
                <button className='button' onClick={this.clear}>Clear</button>
                <br />
                <br />
                <button className='button' onClick={this.add}>+</button>
                <button className='button' onClick={this.subtract}>-</button>
                <button className='button' onClick={this.multiply}>*</button>
                <button className='button' onClick={this.divide}>/</button>
                <h2>Result: {this.state.result}</h2>
            </div>
        )
    }
}

export default Calculator