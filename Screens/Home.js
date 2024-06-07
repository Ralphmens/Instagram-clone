import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/HomeComponents/Header'
import Stories from '../Components/HomeComponents/Stories'
import Post from '../Components/HomeComponents/Post'

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header/>
        <Stories/>
        <Post/>
      </ScrollView>
    </SafeAreaView>
  )
}