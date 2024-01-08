import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '../themes'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux'
import { selectedRestaurant } from '../slices/restaurantSlice'
import { emptyCart } from '../slices/cartSlice'

const DeliveryScreen = () => {
  const resturent = useSelector(selectedRestaurant)
  const navigation = useNavigation<any>()

  const dispatch = useDispatch()

  const cancelOrder = () => {
    navigation.navigate("Home")
    dispatch(emptyCart())
  }

  return (
    <View className='flex-1'>
      <MapView
        initialRegion={
          {
            latitude: resturent.lat,
            longitude: resturent.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }
        }
        className='flex-1'
        mapType='standard'
      >
        <Marker
          coordinate={{
            latitude: resturent.lat,
            longitude: resturent.lng,
          }}
          title={resturent.name}
          description={resturent.description}
          pinColor={themeColors.bgColor(1)}
        />

      </MapView>
      <View className="relative -mt-12 bg-white rounded-t-3xl">
        <TouchableOpacity className="absolute right-4 top-2">

        </TouchableOpacity>
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg font-semibold text-gray-700">Estimated Arrival</Text>
            <Text className="text-3xl font-extrabold text-gray-700">20-30 Minutes</Text>
            <Text className="mt-2 font-semibold text-gray-700">Your Order is own its way</Text>
          </View>
          <Image className="w-24 h-24" source={require('../assets/images/bikeGuy2.gif')} />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="flex-row items-center justify-between p-2 mx-2 my-5 rounded-full">
          <View style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} className="p-1 rounded-full">
            <Image style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} className="w-16 h-16 rounded-full" source={require('../assets/images/restaurant-rider.webp')} />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Jak</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center mr-3 space-x-3">
            <TouchableOpacity className="p-2 bg-white rounded-full">
              <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth="1" />
            </TouchableOpacity>

            <TouchableOpacity className="p-2 bg-white rounded-full" onPress={cancelOrder}>
              <Icon.X stroke={'red'} strokeWidth="5" />
            </TouchableOpacity>

          </View>

        </View>


      </View>
    </View>
  )
}

export default DeliveryScreen