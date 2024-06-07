import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import StoryInfoArray from '../../StoryInfo'

export default function Stories() {
  return (
    <ScrollView horizontal = {true} style = {styles.container}>
        {StoryInfoArray.map((info, index) => (
          <View key = {index} style = {styles.innercontainer}>
            <Image source={info.url} style = {styles.dps}/>
            <Text style = {{color: 'white'}}>{info.name}</Text>
          </View>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    },
    dps:{
        width: 90,
        height: 90, 
        borderRadius: 50,
        borderWidth: 3,
        borderColor:'#ff7000'
    },
    innercontainer:{
        alignItems: 'center',
        marginRight: 10,
    }
})