import React, { useEffect, useLayoutEffect } from 'react'
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import BasketIcon from '../components/BasketIcon';
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import DishRow from '../components/DishRow';
import { useDispatch, useSelector } from 'react-redux';
import { selectedRestaurant, setResturant } from '../slices/restaurantSlice';
import { urlFor } from '../sanity';
import { emptyCart } from '../slices/cartSlice';

interface RouteParams {
    id: string;
    title: string;
    imgUrl: string;
    rating: number;
    type: string;
    address: string;
    description: string;
    dishes: string[];
    lng: number;
    lat: number;
}

const ResturentScreen = () => {
    const { params: {
        id,
        title,
        imgUrl,
        rating,
        type,
        address,
        description,
        dishes,
        lng,
        lat
    } } = useRoute() as { params: RouteParams };
    const resturantDetails = useSelector(selectedRestaurant);
    const navigation = useNavigation();
    const dispatch = useDispatch()


    useEffect(() => {
        if (resturantDetails && resturantDetails.id != id) {
            dispatch(emptyCart());
        }
        dispatch(setResturant({
            id,
            title,
            imgUrl,
            rating,
            type,
            address,
            description,
            dishes,
            lng,
            lat
        }))
    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
            <BasketIcon />
            <ScrollView  >
                <View className="relative">
                    <Image className="w-full h-72" source={{ uri: urlFor(imgUrl).url() }} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute p-2 rounded-full shadow top-12 left-2 bg-gray-50">
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="pt-6 -mt-12 bg-white">
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row my-1 space-x-2">
                            <View className="flex-row items-center space-x-1">
                                <Image
                                    source={require('../assets/images/fullStar.png')}
                                    className="w-4 h-4" />
                                <Text className="text-xs">
                                    <Text className="text-green-700">{rating}</Text>
                                    <Text className="text-gray-700"> (4.6k review)</Text> · <Text className="font-semibold text-gray-700">{type}</Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <Icon.MapPin color="gray" width={15} height={15} />
                                <Text className="text-xs text-gray-800"> Nearby ·  {address}</Text>
                            </View>
                        </View>
                        <Text className="mt-2 text-gray-500">{description}</Text>
                    </View>

                </View>

                <View className="bg-white pb-36">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {
                        dishes.map((dish: any) => {
                            return (
                                <DishRow
                                    key={dish._id}
                                    id={dish._id}
                                    name={dish.name}
                                    description={dish.description}
                                    price={dish.price}
                                    image={dish.image}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}


export default ResturentScreen