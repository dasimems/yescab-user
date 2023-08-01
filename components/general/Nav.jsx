import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { measurements, padding, screenNav } from "../../data/general";
import { useNavigation, useRoute } from "@react-navigation/native";
import { blackColor, primaryColor, whiteColor } from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedImage from "./RoundedImage";
import { lato } from "../../fonts";
import { AngleLeft } from "../../assets/icons";
import Button from "./Button";

const NavButton = ({ icon, label, name, ...props }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(name);
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10
      }}
      {...props}
    >
      {icon}

      <Text
        style={{
          color: blackColor.opacity700,
          fontFamily: lato.bold.default
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Nav = ({ opened, onClose }) => {
  const { name: screeName } = useRoute();
  const { navigate } = useNavigation();
  const initialPosition = -1 * (measurements.windowWidth * 0.85);
  const [navState, setNavState] = useState(opened);

  const slideAnim = useRef(new Animated.Value(initialPosition)).current;

  const openSlide = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed for the desired animation speed
      useNativeDriver: false // Set this to 'true' if possible to use native driver for performance
    }).start();
  }, []);
  const closeSlide = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: initialPosition,
      duration: 500, // Adjust the duration as needed for the desired animation speed
      useNativeDriver: false // Set this to 'true' if possible to use native driver for performance
    }).start();
  }, []);

  if (!onClose) {
    onClose = useCallback(() => {
      setNavState(false);
    }, []);
  }

  useEffect(
    () => {
      if (navState) {
        openSlide();
      } else {
        closeSlide();
      }
    },
    [navState]
  );

  useEffect(
    () => {
      setNavState(opened);
    },
    [opened]
  );

  return (
    <Animated.View
      style={{
        position: "absolute",
        width: initialPosition * -1,
        height: measurements.windowHeight,
        backgroundColor: whiteColor.default,
        zIndex: 9,
        transform: [{ translateX: slideAnim }]
      }}
    >
      <View style={{ backgroundColor: primaryColor.opacity100, height: 200 }}>
        <SafeAreaView style={{ flex: 1, justifyContent: "center", padding }}>
          <TouchableOpacity
            onPress={onClose}
            style={{ marginTop: -40, marginBottom: 30, alignSelf: "flex-end" }}
          >
            <AngleLeft />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={{ fontFamily: lato.bold.default, fontSize: 20 }}>
                Welcome John
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: lato.regular.default,
                    color: primaryColor.default
                  }}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>

            <RoundedImage />
          </View>
        </SafeAreaView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 30,
          paddingVertical: 20,
          paddingHorizontal: padding
        }}
      >
        {screenNav.map(({ Icon, label, name }, index) =>
          <NavButton icon={<Icon />} label={label} name={name} key={index} />
        )}
      </ScrollView>
      <Button
        style={{
          marginHorizontal: padding,
          width: initialPosition * -1 - 40,
          alignSelf: "center",
          backgroundColor: primaryColor.opacity100
        }}
      >
        <Text
          style={{
            color: primaryColor.default,
            fontFamily: lato.bold.default
          }}
        >
          Log Out
        </Text>
      </Button>
    </Animated.View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  buttonStyle: {
    // marginTop: -3
  }
});
