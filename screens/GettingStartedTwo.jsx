import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { Button, GettingStartedFooter, Logo } from "../components";
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
import { OnboardingBackgroundOne, OnboardingOneImage, OnboardingTwoImage } from "../assets/images";

const eclipseMeasurement = measurements.windowWidth * 1.5;

const GettingStartedTwo = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: whiteColor.default
      }}
    >
      

      <View
        style={{
          flex: 1,
          position: "relative",
          backgroundColor: secondaryColor.dark.default,
          overflow: "hidden"
        }}
      >

        <View style={{
            flex: 4/6,
            position: "relative"
        }}>

            <View style={{
                width: eclipseMeasurement,
                height: eclipseMeasurement,
                backgroundColor: secondaryColor.light.default,
                borderRadius: eclipseMeasurement,
                position: "absolute",
                bottom: -((eclipseMeasurement) * 0.43),
                left: -((eclipseMeasurement)/2),
                transform: [{
                    translateX: ((eclipseMeasurement)/3)
                }],
                alignItems: "center",
                justifyContent: "center"

            }}>
                <View style={{
                    width: "80%",
                    height: "80%",
                    borderRadius: eclipseMeasurement,
                    backgroundColor: secondaryColor.lighter.default,
                    alignItems: "center"
                }}>

                    <Image source={OnboardingTwoImage} style={{
                        flex: 1/2,
                        resizeMode: "contain",
                        maxWidth: 250,
                        maxHeight: 250
                    }} />

                </View>
            </View>

        </View>
        
        <View style={{
            flex: 2/6,
            backgroundColor: whiteColor.default,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            alignItems: "center",
            gap: 40,
            paddingVertical: 40,
            paddingBottom: 20,
            paddingHorizontal: 20
        }}>

            <Text style={{
                color: blackColor.opacity700,
                fontFamily: lato.bold.default,
                fontSize: 22,
                textAlign: "center",
                maxWidth: 250

            }}>Withdraw funds easily from your wallet</Text>

            <Text style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity500,
                maxWidth: 280,
                textAlign: "center",
                fontSize: 15
            }}>You can easily withdraw your funds and earning from your wallet</Text>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10
            }}>

                <View style={{
                    width: 10,
                    height: 10,
                    backgroundColor: blackColor.opacity200,
                    borderRadius: 100,

                }}></View>

                <View style={{
                    width: 10,
                    height: 10,
                    backgroundColor: primaryColor.default,
                    borderRadius: 100,
                    
                }}></View>


            </View>
        </View>


      </View>

      <GettingStartedFooter />
    </View>
  );
};

export default GettingStartedTwo;

const styles = StyleSheet.create({});
