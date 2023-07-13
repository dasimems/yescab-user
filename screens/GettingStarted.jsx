import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, GettingStartedFooter, Logo } from '../components'
import { blackColor, primaryColor, secondaryColor, whiteColor } from '../assets/colors'
import { lato } from '../fonts'
import { useNavigation } from '@react-navigation/native'
import { NavNames } from '../data/general'
import { ArrowRight } from '../assets/icons'
import { OnboardingBackgroundOne, OnboardingOneImage } from '../assets/images'

const GettingStarted = () => {
    
    const { navigate } = useNavigation();
  return (
    <View style={{
        flex: 1,
        backgroundColor: whiteColor.default
    }}>

    <Image source={OnboardingBackgroundOne} style={{
      height: "100%",
      resizeMode: "contain",
      width: '100%',
      position: "absolute"

    }} />

        <View style={{
            flex: 1,
            position: "relative",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 40
        }}> 

        <Image source={OnboardingOneImage} style={{
          flex: 1/1.5,
          resizeMode: "contain"

        }} />

        <Text style={{
          color: primaryColor.default,
          fontFamily: lato.bold.default,
          maxWidth: 280,
          textAlign: "center",
          fontSize: 25
        }}>Make money when you drive</Text>
        <Text style={{
          color: blackColor.opacity500,
          fontFamily: lato.regular.default,
          maxWidth: 250,
          textAlign: "center",
          fontSize: 15
        }}>Making money for driving just got easier and better</Text>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10
        }}>

          <View style={{
            width: 10,
            height: 10,
            backgroundColor: primaryColor.default,
            borderRadius: 100,

          }}></View>

          <View style={{
            width: 10,
            height: 10,
            backgroundColor: blackColor.opacity200,
            borderRadius: 100,
            
          }}></View>

        </View>
            
        </View>


      <GettingStartedFooter />
    </View>
  )
}

export default GettingStarted

const styles = StyleSheet.create({})