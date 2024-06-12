import List from "@/components/list";
import Search from "@/components/search";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Search/>
      </View>
      <View style={styles.list}>
        <List/>
      </View>
    </SafeAreaView>
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
    backgroundColor: "blue",
  },
});
