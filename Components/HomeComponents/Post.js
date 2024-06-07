import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import StoryInfoArray from '../../StoryInfo'

export default function Post() {
  return (
    <View>
      <PostInfo lst = {StoryInfoArray} />
    </View>
  )
}

const PostInfo = ({lst}) => (
  <View style = {styles.container}>
    {lst.map((head, index) => (
      <View>
        <View style = {{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10, marginRight: 25, marginLeft: 15,marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity key = {index} style = {styles.profile}>
            <Image source={head.url} style = {{width: 50, height: 50, borderRadius: 50,  borderWidth: 2, borderColor: 'orange', marginRight: 15}}/>
            <Text style = {{color: 'white'}}>{head.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {{color: 'white', fontWeight: '700', fontSize: 25}}>...</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={head.post} style = {styles.pics}/>
        </View>
      </View>
    ))}
  </View>
)




const styles = StyleSheet.create({
  container: {
    
    // backgroundColor: 'red'
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center'
  },
  
  profile : {
    flexDirection: 'row',
    alignItems: 'center',
  },

  pics : {
    width: '100%',
    height: 450,
  }
})