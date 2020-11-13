import React from 'react'

export default class KeyPad extends React.Component {
    render () {
        return (
            <>
                <tr>
                    <td>
                        <button name={'AC'} className={'dark-gray'}
                                onClick={this.props.onClick}>AC
                        </button>
                    </td>
                    <td>
                        <button name={'('} className={'dark-gray'}
                                onClick={this.props.onClick}>(
                        </button>
                    </td>
                    <td>
                        <button name={')'} className={'dark-gray'}
                                onClick={this.props.onClick}>)
                        </button>
                    </td>
                    <td>
                        <button name={'/'} className={'yellow'}
                                onClick={this.props.onClick}>÷
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button name={'7'} onClick={this.props.onClick}>7
                        </button>
                    </td>
                    <td>
                        <button name={'8'} onClick={this.props.onClick}>8
                        </button>
                    </td>
                    <td>
                        <button name={'9'} onClick={this.props.onClick}>9
                        </button>
                    </td>
                    <td>
                        <button name={'*'} className={'yellow'}
                                onClick={this.props.onClick}>×
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button name={'4'} onClick={this.props.onClick}>4
                        </button>
                    </td>
                    <td>
                        <button name={'5'} onClick={this.props.onClick}>5
                        </button>
                    </td>
                    <td>
                        <button name={'6'} onClick={this.props.onClick}>6
                        </button>
                    </td>
                    <td>
                        <button name={'-'} className={'yellow'}
                                onClick={this.props.onClick}>-
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button name={'1'} onClick={this.props.onClick}>1
                        </button>
                    </td>
                    <td>
                        <button name={'2'} onClick={this.props.onClick}>2
                        </button>
                    </td>
                    <td>
                        <button name={'3'} onClick={this.props.onClick}>3
                        </button>
                    </td>
                    <td>
                        <button name={'+'} className={'yellow'}
                                onClick={this.props.onClick}>+
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button name={'C'} className={'dark-gray'}
                                onClick={this.props.onClick}>C
                        </button>
                    </td>
                    <td>
                        <button name={'0'} onClick={this.props.onClick}>0
                        </button>
                    </td>
                    <td>
                        <button name={'.'} onClick={this.props.onClick}>,
                        </button>
                    </td>
                    <td>
                        <button name={'='} className={'yellow'}
                                onClick={this.props.onClick}>=
                        </button>
                    </td>
                </tr>
            </>
        )
    }
}
