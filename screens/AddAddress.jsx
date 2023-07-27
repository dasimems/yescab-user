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
  ProfileRoute,
  RegistrationFooter,
  RegistrationHeader,
  ScreenContainer
} from "../components";
import {
  blackColor,
  primaryColor,
  secondaryColor,
  whiteColor
} from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import allStyles from "../assets/stylesheet";
import { useActionContext, useFormContext } from "../context";
import { NavNames } from "../data/general";
import { Call } from "react-native-iconly";
import { Camera } from "lucide-react-native";
import { Image } from "react-native";
import { AddAddressImage, AddPicture } from "../assets/images";
import { CameraIcon, Dashboard, GalleryIcon, WorkIcon } from "../assets/icons";

const RouteIcon = ({ Icon }) => {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: primaryColor.default,
        borderRadius: 1000
      }}
    >
      {Icon &&
        typeof Icon !== "string" &&
        <Icon color={whiteColor.default} size={20} />}
    </View>
  );
};

const AddAddress = () => {
  const { navigate } = useNavigation();
  const { inputStyle } = allStyles;
  const { phone, setPhoneNumber } = useFormContext();
  const { openModal } = useActionContext();
  const [profileImage, setProfileImage] = useState(null);

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
      <RegistrationHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 30
        }}
      >
        <View>
          <Image
            source={AddAddressImage}
            style={{
              resizeMode: "contain",
              width: "100%"
            }}
          />
        </View>

        <View
          style={{
            gap: 15
          }}
        >
          <Text
            style={{
              fontFamily: lato.bold.default,
              fontSize: 25,
              color: blackColor.opacity700
            }}
          >
            Search Less, Ride Fast
          </Text>
          <Text
            style={{
              fontFamily: lato.regular.default,
              color: blackColor.opacity600
            }}
          >
            Enter home, work or most frequented address in your saved location
          </Text>
        </View>

        <ProfileRoute
          icon={<RouteIcon Icon={Dashboard} />}
          title="Add Home Address"
        />
        <ProfileRoute
          icon={<RouteIcon Icon={WorkIcon} />}
          title="Add Work Address"
        />
      </ScrollView>
      <RegistrationFooter
        skipAction={() => {}}
        next={NavNames.Navigation.name}
      />
    </ScreenContainer>
  );
};

export default AddAddress;

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
