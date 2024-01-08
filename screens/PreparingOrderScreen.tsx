import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../themes';
export default function PreparingOrderScreen() {
    const navigation = useNavigation<any>();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 3000);
    }, [])
    return (
        <View className="items-center justify-center flex-1 bg-white">
            <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
        </View>
    )
}