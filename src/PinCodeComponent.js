import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const PinCodeComponent = ({ pin, handleDeleteButtonPress, handleNumberButtonPress, pinLength, title, titleStyle, numpadTextStyle, bulletStyle }) => {
    const bullets = []
    for (let i = 1; i <= pinLength; i++) {
        bullets.push(<Text key={i} style={[style.bullet, bulletStyle]} >{i <= pin.length ? '\u29BF' : '\u25EF'}</Text>)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                <Text style={[style.title, titleStyle]}>{title}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                {bullets.map(bullet => bullet)}
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'stretch', flex: 2 }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
                    <View key={number} style={{ flexBasis: '33.3%' }}>
                        <TouchableOpacity onPress={() => handleNumberButtonPress(number)}>
                            <Text style={[style.numpadText, numpadTextStyle]}>{number}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                <View style={{ alignItems: 'center', flexBasis: '33.3%' }}>
                </View>
                <View style={{ flexBasis: '33.3%' }}>
                    <TouchableOpacity onPress={() => handleNumberButtonPress(0)}>
                        <Text style={[style.numpadText, numpadTextStyle]}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexBasis: '33.3%' }}>
                    <TouchableOpacity onPress={handleDeleteButtonPress}>
                        <Text style={[style.numpadText, numpadTextStyle]}>{'\u232B'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    numpadText: {
        fontSize: 27,
        textAlign: 'center'
    },
    bullet: {
        fontSize: 27
    },
    title: {
        fontSize: 20
    }
})

export default PinCodeComponent