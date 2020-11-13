import React from 'react'
import './App.scss'
import KeyPad from './components/KeyPad'
import Result from './components/Result'
import Modal from './components/Modal'

export default class App extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            result: '',
            inputResult: '',
            showModal: false
        }
        this.modalOpen = this.modalOpen.bind(this)
        this.modalCancel = this.modalCancel.bind(this)
        this.modalSubmit = this.modalSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
        this.calculate = this.calculate.bind(this)
        this.reset = this.reset.bind(this)
        this.backspace = this.backspace.bind(this)
    }

    modalOpen () {
        this.setState({
            showModal: true
        })
    }

    modalCancel () {
        this.setState({
            showModal: false
        })
    }

    modalSubmit () {
        // eslint-disable-next-line
        if (eval(this.state.inputResult) === eval(this.state.result)) {
            this.calculate()
            this.setState({
                showModal: false
            })
        }
    }

    onClick (event) {
        if (event.target.name === '=') {
            this.modalOpen()
        } else if (event.target.name === 'C') {
            this.reset()
        } else if (event.target.name === 'AC') {
            this.backspace()
        } else {
            this.setState({
                result: this.state.result + event.target.name
            })
        }
    }

    onChange (event) {
        this.setState({
            inputResult: event.target.value
        })
    }

    calculate () {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || '') + ''
            })
        } catch (e) {
            this.setState({
                result: 'error'
            })
        }
    }

    reset () {
        this.setState({
            result: ''
        })
    }

    backspace () {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    render () {
        return (
            <div className={'wrapper'}>
                <table>
                    <tbody>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                    </tbody>
                </table>
                <Modal showModal={this.state.showModal}>
                    <div className={"modal-header"}>For security reasons you have to solve this security equation to continue.</div>
                    <div className={"modal-body"}>
                        {this.state.result} = <input type={"number"} onChange={this.onChange}/>
                    </div>
                    <div className={"modal-footer"}>
                        <button className={"cancel"} onClick={this.modalCancel}>cancel</button>
                        <button className={"submit"} onClick={this.modalSubmit}>submit</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
