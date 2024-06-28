import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, SafeAreaView } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
      <Text style={{
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 20
      }}>Empowerment Worship Center</Text>
      <View style={{
        width: '80%',
        marginHorizontal: 40
      }}>
      <Button 
            title="Get Started" 
            onPress={() => navigation.navigate('Home')} 
            color="#272829"
          />
      </View>
      
      </View>
     </SafeAreaView> 
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    justifyContent: 'center',
            backgroundColor: '#61677A',
            height: '100%',

  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '80%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
});

export default WelcomePage;
