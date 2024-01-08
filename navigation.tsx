import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ResturentScreen from "./screens/ResturentScreen";
import CartScreen from "./screens/CartScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Resturant" component={ResturentScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" options={{ presentation: 'modal', headerShown: false }} component={CartScreen} />
                <Stack.Screen name="PreparingOrder" options={{ presentation: 'transparentModal', headerShown: false }} component={PreparingOrderScreen} />
                <Stack.Screen name="Delivery" options={{ presentation: 'modal', headerShown: false }} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation