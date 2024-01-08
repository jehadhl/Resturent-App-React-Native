import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"

import { getCategories } from "../api";
import { urlFor } from "../sanity";




const Catagories = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories().then(data => {
            setCategories(data);
        })
    }, [])




    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    categories?.map((category, index) => {
                        let isActive = category._id == activeCategory;
                        let btnClass = isActive ? ' bg-gray-600' : ' bg-gray-200';
                        let textClass = isActive ? ' font-semibold text-gray-800' : ' text-gray-500';

                        return (
                            <View key={index} className="flex items-center justify-center mr-6">
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(category._id)}
                                    className={"p-2 rounded-full shadow bg-gray-200" + btnClass}>
                                    <Image style={{ width: 45, height: 45 }} source={{
                                        uri: urlFor(category.image).url(),
                                    }}
                                    />
                                </TouchableOpacity>
                                <Text className={"text-sm " + textClass}>{category.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Catagories