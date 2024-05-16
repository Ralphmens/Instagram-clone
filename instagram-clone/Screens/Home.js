import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Components/HomeComponents/Header'
import Stories from '../Components/HomeComponents/Stories'

export default function Home() {
  return (
    <SafeAreaView>
      <Header/>
      <Stories/>
    </SafeAreaView>
  )
}