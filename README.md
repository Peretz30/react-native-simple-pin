# react-native-simple-pin
Super simple and minimalistic PIN Code component for React Native 

![pincode](https://user-images.githubusercontent.com/27721091/63924925-d23ebf00-ca51-11e9-993d-553c11c3bcbd.gif)

## Installation

```
yarn add react-native-simple-pin
```
or
```
npm install --save react-native-simple-pin
```
## Usage

### Set PIN
To set PIN you need to pass into `pin` prop pin code length
```
import React from 'react';
import SimplePin from 'react-native-simple-pin'
import { Alert } from 'react-native'

const PinCodeScreenComponent = ({}) => (
    <SimplePin
        pin={4}
        title="Set my very secret PIN"
        repeatTitle="Repeat your PIN"
        onSuccess={() => Alert.alert(
            'Success',
            'Hell yeah!',
            [
                { text: 'OK' },
            ]
        )}
        onFailure={() => Alert.alert(
            'Failure',
            'Please, try again',
            [
                { text: 'OK' },
            ]
        )}
        titleStyle={{ fontSize: 23 }}
        numpadTextStyle={{ fontSize: 27 }}
        bulletStyle={{fontSize:25}}
    />
)

export default PinCodeScreenComponent
```
### Check PIN
To check PIN you need to pass into `pin` prop array with numbers of your PIN
```
import React from 'react';
import SimplePin from 'react-native-simple-pin'
import { Alert } from 'react-native'

const PinCodeScreenComponent = ({}) => (
    <SimplePin
        pin={[1,2,3,4]}
        title="Enter your PIN"
        onSuccess={() => Alert.alert(
            'Success',
            'Hell yeah!',
            [
                { text: 'OK' },
            ]
        )}
        onFailure={() => Alert.alert(
            'Failure',
            'Please, try again',
            [
                { text: 'OK' },
            ]
        )}
        titleStyle={{ fontSize: 23 }}
        numpadTextStyle={{ fontSize: 27 }}
        bulletStyle={{fontSize:25}}
    />
)

export default PinCodeScreenComponent
```

## Props

| Name | Description | Default | Required | Type |
|---|---|---|---|---|
|pin|Pin value to verify or length of pin to set|-|Yes|Array/Number|
|onSuccess|Function to be used when Pin code pass verification||Yes|Function|
|onFailure|Function to be used when Pin code fails on verification||Yes|Function|
|title|Text that be dispayed on top|Enter your PIN|No|String|
|repeatTitle|Text that be dispayed on repeat PIN|Repeat your PIN|No|String|
|titleStyle|Style object for title|{fontSize: 20}|No|Object|
|numpadTextStyle|Style object for button on numpad|{fontSize: 27, textAlign: 'center'}|No|Object|
|bulletStyle|Style object for bullet|{fontSize: 27}|No|Object|