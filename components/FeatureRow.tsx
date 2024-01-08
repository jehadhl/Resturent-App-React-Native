import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '../themes'
import ResturantCard from './ResturantCard'

const FeatureRow = ({ id, title, description, resturants, featuredCategory }) => {

 
    return (
        <View>
            <View className="flex-row items-center justify-between px-4">
                <View>
                    <Text className="text-lg font-bold">{title}</Text>
                    <Text className="text-xs text-gray-500">
                        {description}
                    </Text>
                </View>

                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-semibold">See All</Text>
                </TouchableOpacity>
            </View>


            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className="py-5 "
            >
                {
                    resturants?.map(resturant => {
                      
                        return (
                            <ResturantCard
                                key={resturant._id}
                                id={resturant._id}
                                imgUrl={resturant.image}
                                title={resturant.name}
                                rating={resturant.rating}
                                type={resturant.type?.name}
                                address="123 main street"
                                description={resturant.description}
                                dishes={resturant.dishes}
                                reviews = {resturant.reviews}
                                lng={resturant.lng}
                                lat={resturant.lat}

                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default FeatureRow