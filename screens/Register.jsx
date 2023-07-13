import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { Button, FormInputField, GettingStartedFooter, Logo, RegistrationFooter } from "../components";
import {
  blackColor,
  primaryColor,
  secondaryColor,
  whiteColor
} from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { NavNames, measurements } from "../data/general";
import { ArrowRight } from "../assets/icons";
import { OnboardingBackgroundOne, OnboardingOneImage, RegistrationImage } from "../assets/images";
import { Building2, Mail, User } from "lucide-react-native";
import { Lock } from "lucide-react-native";
import { Home } from "lucide-react-native";

const Register = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: whiteColor.default
      }}
    >

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        minHeight: "100%",
      }}>
        <View style={{
            flex: 1,
        }}>

        <View style={{
            height: 200,
            position: "relative",
            overflow: "hidden",
        }}>

            <Image source={RegistrationImage} style={{
                ...StyleSheet.absoluteFillObject,
                resizeMode:"cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                bottom: 0,
                right: 0
            }} />

            <View style={{
                width: "100%",
                height: "100%",
                paddingHorizontal: 20,
                justifyContent: "flex-end",
                paddingVertical: 30,
                // backgroundColor: "red"
            }}>

                <Text style={{
                    color: primaryColor.default,
                    fontSize: 25,
                    fontFamily: lato.bold.default,
                    maxWidth: 100
                }}>Sign Up as Driver</Text>

            </View>


        </View>

        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 40,
            gap: 20
        }}>

        <View style={{
            ...styles.formParentStyle
        }}>

            <FormInputField placeholder="Full name" inputStyle={{
                ...styles.inputStyle
                
            }} inputParentStyle={{
                ...styles.inputParentStyle
            }} style={{
                ...styles.formStyle

            }} floatLeftIcon={<User color={primaryColor.default } />} />
        </View>
        <View style={{
            ...styles.formParentStyle
        }}>

            <FormInputField placeholder="Email Address" inputStyle={{
                ...styles.inputStyle
                
            }} inputParentStyle={{
                ...styles.inputParentStyle
            }} style={{
                ...styles.formStyle

            }} floatLeftIcon={<Mail color={primaryColor.default } />} />
        </View>
        <View style={{
            ...styles.formParentStyle
        }}>

            <FormInputField secureTextEntry={true} placeholder="Enter Password" inputStyle={{
                ...styles.inputStyle
                
            }} inputParentStyle={{
                ...styles.inputParentStyle
            }} style={{
                ...styles.formStyle

            }} floatLeftIcon={<Lock color={primaryColor.default } />} />
        </View>
        <View style={{
            ...styles.formParentStyle
        }}>

            <FormInputField secureTextEntry={true} placeholder="Repeat Password" inputStyle={{
                ...styles.inputStyle
                
            }} inputParentStyle={{
                ...styles.inputParentStyle
            }} style={{
                ...styles.formStyle

            }} floatLeftIcon={<Lock color={primaryColor.default } />} />
        </View>
        <View style={{
            ...styles.formParentStyle
        }}>

            <FormInputField placeholder="State of Residence" inputStyle={{
                ...styles.inputStyle
                
            }} inputParentStyle={{
                ...styles.inputParentStyle
            }} style={{
                ...styles.formStyle

            }} floatLeftIcon={<Home color={primaryColor.default } />} />
        </View>
        <View style={{
            ...styles.formParentStyle
        }}>

            <FormInputField placeholder="City" inputStyle={{
                ...styles.inputStyle
                
            }} inputParentStyle={{
                ...styles.inputParentStyle
            }} style={{
                ...styles.formStyle

            }} floatLeftIcon={<Building2 color={primaryColor.default } />} />
        </View>


        </View>


        </View>

        <RegistrationFooter next={NavNames.Login.name} />

      </ScrollView>


      

    </View>
  );
};

export default Register;

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
