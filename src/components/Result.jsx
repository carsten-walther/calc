import React from 'react'

export default class Result extends React.Component {
    render () {
        return (
            <tr>
                <td className={'result'} colSpan={4}>{this.props.result
                    ? this.props.result
                    : 0}</td>
            </tr>
        )
    }
}
