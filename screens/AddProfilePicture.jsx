import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useCallback, useState } from "react";
import {
  Button,
  CountryList,
  CountrySelectDetails,
  FormInputField,
  Logo2,
  RegistrationFooter,
  RegistrationHeader,
  ScreenContainer
} from "../components";
import { blackColor, primaryColor, secondaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import allStyles from "../assets/stylesheet";
import { useActionContext, useFormContext } from "../context";
import { NavNames } from "../data/general";
import { Call } from "react-native-iconly";
import { Camera } from "lucide-react-native";

const AddProfilePicture = () => {
  const { navigate } = useNavigation();
  const { inputStyle } = allStyles;
  const { phone, setPhoneNumber } = useFormContext();
  const { openModal } = useActionContext();
  const [profileImage, setProfileImage] = useState(null)

  const showCountryList = useCallback(() => {
    openModal({ content: <CountryList />, height: "80%" });
  }, []);

  return (
    <ScreenContainer
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: whiteColor.default
      }}
    >

        <ScrollView contentContainerStyle={{
            minHeight: "100%"
        }}>
            <View
                style={{
                flex: 1,
                gap: 50,
                }}
            >
                <RegistrationHeader
                title="Profile Picture"
                subTitle="Upload a profile picture for your new account"
                />

                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20
                }}>


                    <View style={{
                        width: 150,
                        height: 150,
                        borderRadius: 1000,
                        marginTop: -51,
                        backgroundColor: secondaryColor.light.opacity200
                    }}>

                        <View style={{
                            width: 30,
                            height: 30,
                            backgroundColor: primaryColor.opacity700,
                            borderRadius: 100,
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                            <Camera color={whiteColor.default} size={20} />

                        </View>

                    </View>

                    <TouchableOpacity>

                        <Text style={{
                            color: primaryColor.opacity400,
                            fontFamily: lato.bold.default,

                        }}>Choose from library</Text>
                    </TouchableOpacity>


                </View>

                
            </View>

            <RegistrationFooter skipAction={()=>{}} next={NavNames.OTP.name} />

        </ScrollView>
    </ScreenContainer>
  );
};

export default AddProfilePicture;

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
