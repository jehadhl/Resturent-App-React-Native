import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { themeColors } from '../themes';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { urlFor } from '../sanity';



interface Props {
    id: any,
    title: any,
    imgUrl: any,
    rating: any,
    type: any,
    address: any,
    description: any,
    dishes: any,
    reviews: any
    lng: any,
    lat: any
}

const ResturantCard: React.FC<Props> = ({
    id,
    title,
    imgUrl,
    rating,
    type,
    address,
    description,
    dishes,
    reviews,
    lng,
    lat
}) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableWithoutFeedback key={id} onPress={() => {
            navigation.navigate('Resturant', {
                id,
                title,
                imgUrl,
                rating,
                type,
                address,
                description,
                dishes,
                lng,
                reviews,
                lat
            })
        }}
        >
            <View style={{ shadowColor: themeColors.bgColor(0.8), shadowRadius: 7 }} className="mb-2 mr-6 bg-white shadow-lg rounded-3xl">
                <Image className="w-64 h-36 rounded-t-3xl" source={{ uri: urlFor(imgUrl).url() }} />

                <View className="px-3 pb-4 space-y-2">

                    <Text className="pt-2 text-lg font-bold">{title}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/fullStar.png')} className="w-4 h-4" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{rating}</Text>
                            <Text className="font-semibold text-gray-700">{reviews}</Text>  · <Text className="font-semibold text-gray-700">{type}</Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width={15} height={15} />
                        <Text className="text-xs text-gray-700"> Nearby · {address}</Text>
                    </View>

                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}

export default ResturantCard