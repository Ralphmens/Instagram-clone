import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style = {styles.header}>
      {/* <Text style = {{color:'white'}}>Header</Text> */}
      <TouchableOpacity>  
        <Image source = {require('../../assets/Iglogo.webp')} style = {{width: 90, height: 30, marginLeft: 5}}/>
      </TouchableOpacity>
      <View style = {{flexDirection: 'row', marginRight: 5, alignItems: 'center'}}>
        <TouchableOpacity>
       <Image style = {styles.links} source = {require('../../assets/like.png')}/>
        </TouchableOpacity>
       <TouchableOpacity>
        <Image style = {styles.links} source = {require('../../assets/message.png')}/>
       </TouchableOpacity>
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
    },

    links : {
      width:25,
      height: 25,
      // backgroundColor: 'blue',
      color: 'white',
      marginLeft: 25,
    }
})