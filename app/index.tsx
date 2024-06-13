import List from "@/components/list";
import Search from "@/components/search";
import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.list}>
        <List />
      </View>
    </SafeAreaView>
  );
};

const SettingScreen = () => {
  return (
    <View>
      <Text> This is setting screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Home = () => {
  let [fontsLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [fontsLoaded2] = useLato({
    Lato_400Regular,
  });

  if (!fontsLoaded || !fontsLoaded2) {
    return <Text>Loading fonts .....</Text>;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }

              // Return the icon component
              // @ts-ignore
              return <Ionicons name={iconName} size={size} color={color} style={{
                 marginTop : focused ? -5 : 0
              }} />;
            },
            tabBarActiveTintColor: "green",
            tabBarLabel : ()=>{
              return null;
            }
          })}
        >
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Home;

const isAndroid = Platform.OS === "android";
const statusBarHeight = StatusBar.currentHeight;

console.log(`StatusBar height: ${statusBarHeight}`);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop :isAndroid ? statusBarHeight : 0
  },
  search: {
    padding: 20,
    // backgroundColor: "red",
  },
  list: {
    flex: 1,
    padding: 20,
    // backgroundColor: "blue",
  },
});
