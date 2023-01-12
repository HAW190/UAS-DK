const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OpeningPage from "./screens/OpeningPage";
import LogIn from "./screens/LogIn";
import ProductDetails4 from "./screens/ProductDetails4";
import ProductDetails3 from "./screens/ProductDetails3";
import ProductDetails2 from "./screens/ProductDetails2";
import Home from "./screens/Home";
import History1 from "./screens/History1";
import Confirmation from "./screens/Confirmation";
import ShoppingCart from "./screens/ShoppingCart";
import ProductDetails from "./screens/ProductDetails";
import SignUp from "./screens/SignUp";
import Home1 from "./screens/Home1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik.ttf"),
    "DM Sans": require("./assets/fonts/DM_Sans.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="LogIn"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="OpeningPage"
                component={OpeningPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProductDetails4"
                component={ProductDetails4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProductDetails3"
                component={ProductDetails3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProductDetails2"
                component={ProductDetails2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="History"
                component={History1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Confirmation"
                component={Confirmation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCart}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home1"
                component={Home1}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <OpeningPage />
          )}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
