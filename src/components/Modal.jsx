import React from 'react'

export default class Modal extends React.Component {
    render () {
        if (this.props.showModal) {
            return (
                <div className={"modal-backdrop"}>
                    <div className={"modal-window"}>
                        {this.props.children}
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}
