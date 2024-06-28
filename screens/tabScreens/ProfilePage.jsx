import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ProfilePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{
          marginRight: 150,
        }}>
          <Text>My Profile</Text>
        </View>
      </View>

      <View>
        <Image source={require('../../assets/profile.jpg')}
        style={styles.profileImage}
        />
      </View>

      <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          marginTop: 5,
          fontSize: 15,
          fontWeight: 'bold',
        }}> Gideon Danso</Text>
      </View>

<View style={{
  marginTop: 20
}}>


      <View style={{
        flexDirection: 'row',
        borderColor: '#B0A4A4',
        borderBottomWidth: 1,
        marginVertical: 10,
      }}>
        <View style={{
          marginLeft: 10
        }}>
        <Feather name="bell" size={20} color="black" />
        </View>
        <View style={{
          marginLeft: 30
        }}>
        <Text style={styles.boldText}>Inbox</Text>
        <Text style={styles.faintText}>Access your notifications</Text>
        </View> 
        <View style={styles.iconRight}>
        <Ionicons name="arrow-forward-circle-outline" size={20} color="black" />
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        borderColor: '#B0A4A4',
        borderBottomWidth: 1,
        marginVertical: 10,
      }}>
        <View style={{
          marginLeft: 10
        }}>
        <FontAwesome5 name="praying-hands" size={20} color="black" />
        </View>
        <View style={{
          marginLeft: 30
        }}>
        <Text style={styles.boldText}>Prayer</Text>
        <Text style={styles.faintText}>Request a prayer</Text>
        </View> 
        <View style={styles.iconRight}>
        <Ionicons name="arrow-forward-circle-outline" size={20} color="black" />
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        borderColor: '#B0A4A4',
        borderBottomWidth: 1,
        marginVertical: 10,
      }}>
        <View style={{
          marginLeft: 10
        }}>
        <MaterialIcons name="notes" size={20} color="black" />
        </View>
        <View style={{
          marginLeft: 30
        }}>
        <Text style={styles.boldText}>Notes</Text>
        <Text style={styles.faintText}>Access your notes</Text>
        </View> 
        <View style={styles.iconRight}>
        <Ionicons name="arrow-forward-circle-outline" size={20} color="black" />
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        borderColor: '#B0A4A4',
        borderBottomWidth: 1,
        marginVertical: 10,
      }}>
        <View style={{
          marginLeft: 10
        }}>
        <MaterialCommunityIcons name="download" size={24} color="black" />
        </View>
        <View style={{
          marginLeft: 30
        }}>
        <Text style={styles.boldText}>Downloads</Text>
        <Text style={styles.faintText}>Access your downloads</Text>
        </View> 
        <View style={styles.iconRight}>
        <Ionicons name="arrow-forward-circle-outline" size={20} color="black" />
        </View>
      </View>

      <View>
        <Text style={{
          marginTop: 5,
          fontSize: 15,
          fontWeight: 'bold',
          position: 'absolute',
          left: 10
        }}>App Settings</Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderBottomColor: "#402E7A",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  profileImage:{
    height:200,
    width: 200,
    marginHorizontal: 75,
    borderRadius: 100
  },
  iconContainer:{
    flexDirection: 'row',
    position: 'relative',
    left: 130,    
  },
  boldText:{
    fontWeight: 'bold',
    fontSize: 16
  },
  faintText:{
    fontSize: 10,
    color: '#B0A4A4'
  },
  iconRight:{
    position: 'absolute',
    left: 320
  }
});
