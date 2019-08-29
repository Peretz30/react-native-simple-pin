# react-native-simple-pin
Super simple and minimalistic PIN Code component for React Native 

Demo!!!

## Installation

```
yarn add react-native-simple-pin
```
or
```
npm install --save react-native-simple-pin
```
pin={[1, 2, 3, 4]}
        //pin={4}
        title="Установить PIN"
        repeatTitle="Повторите ваш PIN"
        onSuccess={() => console.log('hell yeah!')}
        onFailure={() => console.log('fail ((')}
        titleStyle={{ fontSize: 23 }}
        numpadTextStyle={{ fontSize: 27 }}
        bulletStyle={{fontSize:25}}
##Props

| Name | Description | Default | Required | Type |
|---|---|---|---|---|
|pin|Pin value to verify or length of pin to set|-|Yes|Array/Number|
|onSuccess|Function to be used when Pin code pass verification|-|Yes|Function|
|onFailure|Function to be used when Pin code fails on verification|-|Yes|Function|
|title|Text that be dispayed on top|Enter your PIN|No|String|
|repeatTitle|Text that be dispayed on repeat PIN|Repeat your PIN|No|String|
|titleStyle|Style object for title|No|{fontSize: 20}|Object|
|numpadTextStyle|Style object for button on numpad|No|{fontSize: 27, textAlign: 'center'}|Object|
|bulletStyle|Style object for bullet|No|{fontSize: 27}|Object|