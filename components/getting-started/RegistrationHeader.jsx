import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { lato } from '../../fonts'
import { blackColor, primaryColor } from '../../assets/colors'
import { ArrowLeft } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'

const RegistrationHeader = ({title, subTitle, backButtonHidden}) => {

    const {goBack} = useNavigation();

  return (
    <View style={{
        gap: 30,
        alignItems: "center",
        width: "100%"
    }}>

        {!backButtonHidden  && <View style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",


        }}>

            <TouchableOpacity onPress={()=>{
                goBack();
            }}>
                <ArrowLeft color={blackColor.opacity500} />
            </TouchableOpacity>
        </View>}

      {title && <Text style={{
        fontFamily: lato.bold.default,
        color: primaryColor.default,
        textAlign: "center",
        maxWidth: 200,
        fontSize: 25
      }} >{title}</Text>}


      {subTitle && <Text style={{
        
        fontFamily: lato.regular.default,
        color: blackColor.opacity600,
        textAlign: "center",
        fontSize: 15,
        maxWidth: 230
      }}>{subTitle}</Text>}
    </View>
  )
}

export default RegistrationHeader

const styles = StyleSheet.create({})