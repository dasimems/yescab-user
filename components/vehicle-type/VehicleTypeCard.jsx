import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blackColor, primaryColor } from '../../assets/colors'
import { measurements } from '../../data/general'
import { lato } from '../../fonts'
import { TouchableOpacity } from 'react-native'

const VehicleTypeCard = ({name, active, image, center, onPress, ...props}) => {

  if(!onPress){
    onPress = () => {}
  }

  return (
    <TouchableOpacity onPress={()=>{

    }} {...props} style={{
        width: "47.5%",
        height: (measurements.windowWidth - 40) * 0.4,
        gap: 10
    }}>

    <View style={{
      flex: 1,
      padding: 10,
      borderWidth: 1,
      borderColor: active? primaryColor.default : blackColor.opacity100,
      borderRadius: 10,
      alignItems: center? "center" : "flex-end",
      justifyContent: "center",
      paddingRight: 0
      
    }}>
      <Image source={image} style={{
        maxWidth: "100%",
        maxHeight: "100%",
        marginRight: -3,
        // position: "absolute",
        // right: 0,
        resizeMode: "contain"
      }} />

    </View>


      <Text style={{
        textAlign: "center",
        fontFamily: lato.bold.default,
        color: active? primaryColor.default: blackColor.opacity600
      }}>VehicleTypeBank</Text>
    </TouchableOpacity>
  )
}

export default VehicleTypeCard

const styles = StyleSheet.create({})