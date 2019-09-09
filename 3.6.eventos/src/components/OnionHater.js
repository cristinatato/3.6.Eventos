import React from 'react';

class OnionHater extends React.Component {
    render () {
        return (
            <textarea onChange ={this.props.onChangeListener}></textarea>
        );
    }
}


export default OnionHater;