import {
    Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import {
  Button,
  FormInputField,
  LoggedInContainer,
  Logo,
  Nav
} from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, CalendarIcon, CreditCardIcon, InfoIcon } from "../assets/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { padding } from "../data/general";
import { CardDesign } from "../assets/images";


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
                        }}>Add Card</Text>

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

const AddCard = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer
    removeSafeView headerHidden
      containerStyle={{
        paddingVertical: 15,
        paddingHorizontal: 0
      }}
      showBackFunction
      headerText="Add Card"
      headerTextStyle={{
        marginLeft: 5
      }}
    >
      <View
        style={{
          flex: 1,
          gap: 30
        }}
      >
        <View style={{
                width: "100%",
                height: 300,
                overflow: "hidden",
                backgroundColor: primaryColor.opacity100
            }}>

                <Header />

                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}>

                    <Image source={CardDesign} style={{
                        width: "60%",
                        resizeMode: "contain"
                    }} />

                </View>


            </View>
        <ScrollView
          contentContainerStyle={{
            gap: 20,
            paddingHorizontal:padding
          }}
        >
          <FormInputField
            floatLeftIcon={<CreditCardIcon color={primaryColor.default} />}
            placeholder="Card number"
            label="Card Number"
            labelStyle={{
              ...styles.labelStyle
            }}
            inputStyle={{
              ...styles.inputStyle
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              width: "100%"
            }}
          >
            <FormInputField
              style={{
                flex: 1 / 2
              }}
              floatLeftIcon={<CalendarIcon color={primaryColor.default} />}
              placeholder="Expiry Date"
              label="MM/YY"
              labelStyle={{
                ...styles.labelStyle
              }}
              inputStyle={{
                ...styles.inputStyle
              }}
            />

            <FormInputField
              style={{
                flex: 1 / 2
              }}
              floatLeftIcon={<InfoIcon color={primaryColor.default} />}
              placeholder="***"
              label="CVV"
              labelStyle={{
                ...styles.labelStyle
              }}
              inputStyle={{
                ...styles.inputStyle
              }}
            />
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity
        style={{
          alignItems: "center",
          paddingVertical: 15,
          paddingHorizontal: 20,
          backgroundColor: primaryColor.default,
          borderRadius: 10,
          marginHorizontal: padding
        }}
      >
        <Text
          style={{
            fontFamily: lato.bold.default,
            color: whiteColor.default
          }}
        >
          Add Card
        </Text>
      </TouchableOpacity>
    </LoggedInContainer>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "rgba(0, 0, 0, .05)",
    borderWidth: 0
  },
  labelStyle: {
    fontSize: 13,
    fontFamily: lato.bold.default
  }
});
