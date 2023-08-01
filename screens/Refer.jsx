import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {  LoggedInContainer, ScheduleCard, TransactionCard, TripCard } from "../components";
import { blackColor, dangerColor, grayColor, infoColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavNames, measurements, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { AddCircle, AngleLeft, AngleRight, ArrowLeft, SubtractIconCircle } from "../assets/icons";
import { Coin, ReferEarnImage, WalletBackground, WalletBanner } from "../assets/images";
import { trips } from "../data/tripsData";
import { FlatList } from "react-native";

const Header = () => {
    const {goBack, navigate} = useNavigation();
    return(

        <>

            

                <SafeAreaView style={{
                    paddingVertical: 15,
                    paddingHorizontal: padding,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 10
                }}>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 15
                    }}>

                        <TouchableOpacity onPress={()=>{
                            goBack();
                        }}>
                            <ArrowLeft />

                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: lato.bold.default,
                            fontSize: 20,
                        }}>Refer and Earn</Text>

                    </View>
                        

                    {/* <TouchableOpacity onPress={()=>{
                        navigate(NavNames.CreditDetails.name)
                    }} style={{
                        backgroundColor: blackColor.opacity100,
                        borderRadius: 90,
                        alignItems: "center",
                        paddingVertical: 5,
                        paddingHorizontal: 11,
                        flexDirection: "row",
                        gap: 6

                    }}>

                        <Coin width={20} height={20} />
                        <Text style={{
                            color: blackColor.default,
                            fontFamily: lato.bold.default,
                            fontSize: 12,
                        }}>2500</Text>
                    </TouchableOpacity> */}

                </SafeAreaView>
        
        </>
    )
}

const Refer = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <LoggedInContainer removeSafeView headerHidden containerStyle={{
        paddingHorizontal: 0,
        flex: 1
    }} >

        <View style={{
            flex: 1
            
        }}>

            <View style={{
                width: "100%",
                height: measurements.windowWidth + 10,
                overflow: "hidden",
            }}>

                <Image source={WalletBanner} style={{
                    ...StyleSheet.absoluteFillObject,
                    height: "100%",
                    width: "100%"
                }} />

                <Header />

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    // backgroundColor: "red",
                    paddingBottom: 50,
                    gap: 7,
                    alignItems: "center"
                }}>

                    <Image source={ReferEarnImage} style={{
                        width: "50%",
                        resizeMode: "contain"
                    }} />
                </View>


            </View>


            <View style={{
                flex: 1,
                paddingHorizontal: padding,
                paddingTop: 30
            }}>



                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    gap: 25,
                    alignItems: "center"
                }}>

                   <Text style={{
                    fontFamily: lato.bold.default,
                    fontSize: 25,
                    textAlign: "center"
                   }}>Earn free ride with your referral code</Text>

                   <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                   }}>
                    <View style={{
                        width: 50,
                        height: 2,
                        backgroundColor: primaryColor.default,
                        borderRadius: 5
                    }} />
                    <Text style={{
                        fontFamily: lato.bold.default,
                        textAlign: "center"
                    }}>REF03456</Text>
                    <View style={{
                        width: 50,
                        height: 2,
                        backgroundColor: primaryColor.default,
                        borderRadius: 5
                    }} />
                   </View>
                    
                    <Text style={{
                        fontFamily: lato.regular.default,
                        color: blackColor.opacity600,
                        maxWidth: 300,
                        textAlign: "center"
                    }}>Share your referral  code with friends and loved ones and earn a free ride when they register with your code.</Text>

                </ScrollView>

            </View>
           

        </View>

    </LoggedInContainer>
  );
};

export default Refer;

const styles = StyleSheet.create({
    actionButtonStyle:{
        
        backgroundColor: blackColor.opacity100,
        borderRadius: 10,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },

    actionButtonTextStyle:{
        
        fontFamily: lato.bold.default,

    },

    timeFilterStyle:{
        
        fontFamily: lato.bold.default,
        color: blackColor.opacity400,
        marginBottom: 5
    }
});
