import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Carousel from './Carousel'

export default function Events() {
    const element = [
        {
          id: 1,
          photoUrl:
            "https://images.unsplash.com/photo-1547382002-b908c9367d83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          photoUrl:
            "https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          photoUrl:
            "data:image/png;base64,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",
        },
        {
          id: 4,
          photoUrl:
            "https://images.unsplash.com/photo-1579975096649-e773152b04cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 5,
          photoUrl:
            "https://images.unsplash.com/photo-1543702474-2c562b1845eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 6,
          photoUrl:
            "https://images.unsplash.com/photo-1550633600-4cfc6929e592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
        },
      ];

  return (
    <View>
        
        <FlatList 
        data={element}
        style={styles.flatlistContainer}
        ListHeaderComponentStyle={{
            position: 'relative'
        }}
        ListHeaderComponent={
            <View>
            <Carousel/>
            <Text style={styles.header}>Upcoming this week</Text>
            </View>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            gap: 15, 
            paddingBottom:100,
        }}
        
        renderItem={({item})=><View>
            
          <Image source={{uri: item.photoUrl}}
          style={{
            height: 200,
                width: 320,
                borderRadius: 10,
                paddingVertical: 10,
                marginLeft: 20
          }}
          />
        </View>}
        />
      </View>
  )
}
const styles = StyleSheet.create({
    header:{
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 30
      },
      flatlistContainer:{
        marginVertical: 10,
        marginTop: 10,
      }
})
