
import React, { useEffect, useState } from "react"
import { View, Text, StatusBar, SafeAreaView, TextInput, ScrollView } from "react-native"
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import Catagories from "../components/Catagories";
import FeatureRow from "../components/FeatureRow";
import { getFeaturedResturants } from "../api";



const HomeScreen = () => {
   const [featuredCategories, setFeaturedCategories] = useState<Array<any>>([])

   useEffect(() => {
      getFeaturedResturants().then(data => {
         setFeaturedCategories(data);
      })
   }, [])


   return (
      <SafeAreaView className="bg-white">
         <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
         <View className="flex-row items-center px-4 py-2 space-x-2">
            <View className="flex-row items-center flex-1 p-3 border border-gray-300 rounded-full">
               <Icon.Search height="25" width="25" stroke="gray" />
               <TextInput placeholder='Resturants' className="flex-1 ml-2" keyboardType='default' />
               <View className="flex-row items-center pl-2 space-x-1 border-0 border-l-2 border-l-gray-300">
                  <Icon.MapPin height="20" width="20" stroke="gray" />
                  <Text className="text-gray-600">New York, NYC</Text>
               </View>
            </View>
            <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
               <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
            </View>
         </View>


         <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
               paddingBottom: 70
            }}
         >

            {/* ///////////////////////////////Catagories/////////////////////////// */}
            <Catagories />


            {/* ///////////////////////////////featred////////////////////////////// */}
            <View className="mt-5">
               {
                  featuredCategories.map((category, index) => {

                     return (
                        <FeatureRow
                           key={category._id}
                           id={category._id}
                           title={category.name}
                           resturants={category?.restaurants}
                           description={category.description}
                           featuredCategory={category._type}
                        />
                     )
                  }
                  )

               }
            </View>

         </ScrollView>
      </SafeAreaView>
   )
}

export default HomeScreen