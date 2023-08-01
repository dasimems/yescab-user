import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import {
  Button,
  LoggedInContainer,
  Logo,
  Nav,
  ProfileDetailsCard,
  ProfileRoute,
  RoundedImage,
  Stats
} from "../components";
import {
  blackColor,
  dangerColor,
  primaryColor,
  whiteColor
} from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { AngleLeft, LogOutIcon, StarIcon, UserVerified } from "../assets/icons";
import { NavNames, padding, profileLinks } from "../data/general";
import { MaleAvatarOne } from "../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";

const ProfileSection = ({ children, title, icon }) => {
  return (
    <View
      style={{
        gap: 10
      }}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: blackColor.opacity100,
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center",
          gap: 15
        }}
      >
        {icon ? icon : <UserVerified />}
        <Text
          style={{
            fontFamily: lato.bold.default,
            color: primaryColor.default
          }}
        >
          {title}
        </Text>
      </View>

      <View stye={{ gap: 15 }}>
        {children}
      </View>
    </View>
  );
};

const Header = () => {
  const { goBack } = useNavigation();
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: padding,
        paddingVertical: 15,
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
      >
        <AngleLeft />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 18,
          fontFamily: lato.bold.default
        }}
      >
        My Account
      </Text>
    </SafeAreaView>
  );
};

const Profile = () => {
  const { navigate } = useNavigation();

  const stats = [
    {
      stat: "3,251",
      label: "Trips",
      action: () => navigate(NavNames.History.name)
    },

    {
      stat: "4.90",
      label: "Ratings",
      action: () => navigate(NavNames.Rating.name)
    },

    {
      stat: "2",
      label: "Months"
    }
  ];

  return (
    <LoggedInContainer removeSafeView header={<Header />} navHidden>
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 28
          }}
        >
          <ProfileSection title="Account">
            <ProfileRoute
              title="Edit Profile"
              name={NavNames.EditProfile.name}
            />
            <ProfileRoute
              title="Change Password"
              name={NavNames.ChangePassword.name}
            />
            <ProfileRoute
              title="Saved Address"
              name={NavNames.SavedDestinations.name}
            />
          </ProfileSection>
          <ProfileSection title="Security">
            <ProfileRoute title="Password Reset" />
          </ProfileSection>
        </ScrollView>
      </View>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 20
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: dangerColor.opacity600,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10
          }}
          onPress={() => {
            navigate(NavNames.Login.name);
          }}
        >
          <Text
            style={{
              fontFamily: lato.bold.default
            }}
          >
            Log out
          </Text>

          <LogOutIcon />
        </TouchableOpacity>
      </View>
    </LoggedInContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  contentTitleStyle: {
    fontFamily: lato.bold.default
  },
  contentValueStyle: {
    fontFamily: lato.regular.default,
    color: blackColor.opacity500
  },
  accountContentStyle: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between"
  }
});
