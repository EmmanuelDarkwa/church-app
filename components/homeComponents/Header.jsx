import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Header() {
  const navigation = useNavigation()
  return (
   
     <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/ewc.jpg')} style={styles.logo}/>
        </View>
        <View style={{
          flexDirection: 'row',
        }}>
          <View style={{
          paddingHorizontal: 20
        }}>
          <TouchableOpacity>
          <Entypo name="bar-graph" size={24} color="#3DC2EC" />
          </TouchableOpacity>
        </View>
        <View style={{
          paddingHorizontal: 20
        }}>
          <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{
          marginRight: 8
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
          <FontAwesome name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
        </View>
       
      </View>

  )
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
      borderBottomColor: '#F2613F',
      borderBottomWidth: 1,
      paddingBottom: 10
    },
    logoContainer:{
      borderRadius: 7
    },
    logo:{
      height: 30,
      width: 30
    }
  });