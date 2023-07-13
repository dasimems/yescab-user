import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { Button, CountryList, CountrySelectDetails, FormInputField, Logo2, RegistrationFooter, RegistrationHeader, ScreenContainer } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import allStyles from "../assets/stylesheet";
import { useActionContext, useFormContext } from "../context";
import { NavNames } from "../data/general";
import { Call } from "react-native-iconly";

const Login = () => {
    const {navigate} = useNavigation();
    const {inputStyle} = allStyles;
    const { phone, setPhoneNumber } = useFormContext();
    const {openModal} = useActionContext();

    const showCountryList = useCallback(()=>{
      openModal({content: <CountryList />, height: "80%"});
    }, [])

  return (
    <ScreenContainer
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: whiteColor.default
      }}
    >

      <View style={{
        flex: 1,
        gap: 50
      }}>

        <RegistrationHeader title="Authentication" subTitle="Enter your number below. A code will be sent for verification." />

        <View style={{
            ...styles.formParentStyle
        }}>

            <FormInputField placeholder="Mobile Number" inputStyle={{
                ...styles.inputStyle
                
            }} inputParentStyle={{
                ...styles.inputParentStyle
            }} style={{
                ...styles.formStyle

            }} floatLeftIcon={<Call color={primaryColor.default } />} />
        </View>


      </View>
      

      <RegistrationFooter next={NavNames.OTP.name} />

      
    </ScreenContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  formParentStyle: {
    backgroundColor: "rgba(0, 0, 0, .07)",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    height: 60
  },
  formStyle: {
    width: "99%",
    height: "97%"
  },
  inputStyle: {
    borderWidth: 0,
    paddingLeft: 50,
    backgroundColor: whiteColor.default
  },
  inputParentStyle: {
    width: "100%",
    height: "100%"
  }
});
