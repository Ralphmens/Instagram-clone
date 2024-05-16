import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style = {styles.header}>
      {/* <Text style = {{color:'white'}}>Header</Text> */}
      <Image source = {require('../../assets/Iglogo.webp')} style = {{width: 90, height: 30, marginLeft: 5}}/>
      <View style = {{flexDirection: 'row', marginRight: 5}}>
       <Text style = {{color: 'white', marginLeft: 10}}>A</Text>
       <Text style = {{color: 'white', marginLeft: 10}}>B</Text>
       <Text style = {{color: 'white', marginLeft: 10}}>C</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    header: {
        marginVertical:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})