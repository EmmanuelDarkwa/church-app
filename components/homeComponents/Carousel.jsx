import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

export default function Carousel() {
  const data = [
    {
      id: 1,
      title: "Sunday Service",
      imageUrl:
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2h1cmNofGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Donations",
      imageUrl:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2h1cmNofGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Circles",
      imageUrl:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Gospel Concerts",
      imageUrl:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "Live Service",
      imageUrl:
        "https://citinewsroom.com/wp-content/uploads/2021/07/Stand-in-the-Gap-1.jpg",
    },
    {
      id: 6,
      title: "Stand In The Gap",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRZAeVqUsE7SLI_zDKvKiaiu-HZX4wkdCRb1RE6knKylP7mXCbxSxCkKK4XeZ-X0LGKE&usqp=CAU",
    },
  ];

 

  return (
    <View>
      <Text style={styles.header}>For You</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.flatlistContainer}>
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                height: 200,
                width: 200,
                borderRadius: 10
              }}
            />
            <Text style={{
              fontSize: 15,
              fontWeight: 'condensed'
            }}>{item.title}</Text>
          </View>
        )}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  carouselImage: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  flatlistContainer:{
    marginHorizontal: 10,
    marginTop: 10
  },
  header:{
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 10
  }
});
