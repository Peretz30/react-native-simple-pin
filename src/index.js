import React from 'react';
import PinCodeComponent from './PinCodeComponent'

class PinCodeContainer extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            pin: [],
            enteredPin: [],
            title: this.props.title ? this.props.title : 'Enter your PIN'
        }
        this.pinIsNumber = typeof this.props.pin === "number";
    }

    handleNumberButtonPress = (number) => {
        const pin = this.state.pin;
        const updatedPin = [...pin];
        updatedPin.push(number);
        this.setState({ pin: updatedPin });
        if (updatedPin.length === (this.pinIsNumber ? this.props.pin : this.props.pin.length)) {
            if (!this.pinIsNumber) {
                const correctPin = this.props.pin;
                if (correctPin.join('') === updatedPin.join('')) {
                    this.props.onSuccess();
                } else {
                    this.setState({ pin: [] });
                    this.props.onFailure();
                }
            } else {
                if (this.state.enteredPin.length > 0) {
                    if (this.state.enteredPin.join('') === updatedPin.join('')) {
                        this.props.onSuccess();
                    } else {
                        this.setState({ pin: [], enteredPin: [], title: this.props.title ? this.props.title : 'Enter your PIN'});
                        this.props.onFailure();
                    }
                } else {
                    this.setState({ pin: [], title: this.props.repeatTitle ? this.props.repeatTitle : 'Repeat your PIN', enteredPin: updatedPin })
                }
            }
        }
    }

    handleDeleteButtonPress = () => {
        let updatedPin = [...this.state.pin];
        updatedPin.pop();
        this.setState({ pin: updatedPin });
    }

    render() {
        return (
            <PinCodeComponent
                pin={this.state.pin}
                handleNumberButtonPress={this.handleNumberButtonPress}
                handleDeleteButtonPress={this.handleDeleteButtonPress}
                pinLength={this.pinIsNumber ? this.props.pin : this.props.pin.length}
                title={this.state.title}
                titleStyle={this.props.titleStyle}
                numpadTextStyle={this.props.numpadTextStyle}
                bulletStyle={this.props.bulletStyle}
            />);
    }
}

export default (PinCodeContainer);