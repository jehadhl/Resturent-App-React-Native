import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { themeColors } from '../themes'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice';
import { urlFor } from '../sanity';


interface DishRowProps {
    name: any;
    description: any;
    id: any;
    price: any;
    image: any;
}

const DishRow: React.FC<DishRowProps> = ({ name, description, id, price, image }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => selectCartItemsById(state, id));

    const handleIncress = () => {
        dispatch(addToCart({ id, name, price, image, description }));
    }

    const handleDecress = () => {
        dispatch(removeFromCart({ id }))
    }


    return (
        <View key={id}>
            <View className="flex-row items-center p-3 mx-2 mb-3 bg-white shadow-2xl rounded-3xl" >
                <Image className="rounded-3xl" style={{ height: 100, width: 100 }} source={{
                    uri: urlFor(image).url()
                }} />
                <View className="flex flex-1 space-y-3">
                    <View className="pl-3">
                        <Text className="text-xl">{name}</Text>
                        <Text className="text-gray-700">{description}</Text>
                    </View>
                    <View className="flex-row items-center justify-between pl-3">
                        <Text className="text-lg font-bold text-gray-700">
                            ${price}
                        </Text>
                        <View className="flex-row items-center">
                            <TouchableOpacity
                                onPress={handleDecress}
                                disabled={!cartItems.length}
                                className="p-1 rounded-full"
                                style={{ backgroundColor: themeColors.bgColor(1) }}>
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                            <Text className="px-3">
                                {cartItems.length}
                            </Text>

                            <TouchableOpacity
                                onPress={handleIncress}
                                className="p-1 rounded-full"
                                style={{ backgroundColor: themeColors.bgColor(1) }}>
                                <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default DishRow