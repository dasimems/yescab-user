import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {  LoggedInContainer, ScheduleCard, TransactionCard, TripCard } from "../components";
import { blackColor, dangerColor, grayColor, infoColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavNames, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { AddCircle, AngleLeft, AngleRight, ArrowLeft, SubtractIconCircle } from "../assets/icons";
import { Coin, WalletBackground, WalletBanner } from "../assets/images";
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
                        }}>Wallet</Text>

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

const Schedules = () => {
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
                height: 300,
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

                    <Text style={{
                        fontFamily: lato.black.default,
                        fontSize: 35,
                        textAlign: "center",
                        color: primaryColor.default
                    }}>Create Schedule</Text>

                    <Text style={{
                        textAlign: "center",
                        color: blackColor.opacity500,
                        fontFamily: lato.regular.default,
                        maxWidth: 300,
                    }}>Create and book your schedule ahead to avoid unnecessary hassles</Text>
                </View>


            </View>

            <View style={{
                alignItems: "center",
                marginTop: -29,
            }}>
                <TouchableOpacity style={{
                    padding: 20,
                    backgroundColor: whiteColor.default,
                    borderRadius: 10,
                    maxWidth: 270,
                    width: "100%",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontFamily: lato.bold.default,
                        color: primaryColor.default
                    }}>Create Schedule</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                paddingHorizontal: padding,
                paddingTop: 30
            }}>



                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    gap: 25
                }}>

                    {trips.slice(0, 3).map((_, index)=>(
                        <ScheduleCard  key={index} />
                    ))}
                    

                </ScrollView>

            </View>
           

        </View>

    </LoggedInContainer>
  );
};

export default Schedules;

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
