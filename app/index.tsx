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
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <Text>list of all </Text>
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
