import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/homeComponents/Header";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "../../components/homeComponents/Carousel"
import Events from "../../components/homeComponents/Events";



export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/> 
      {/* <Carousel/> */}
      <Events/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
flex: 1
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderBottomColor: '#402E7A',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  logoContainer:{
    
  },
  logo:{
    height: 30,
    width: 30
  }
});
