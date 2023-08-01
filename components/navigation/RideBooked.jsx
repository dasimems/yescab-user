import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { CancelIcon2, LocationPin, NotificationIcon } from "../../assets/icons";
import { blackColor, primaryColor } from "../../assets/colors";
import { useActionContext } from "../../context";
import { lato } from "../../fonts";
import { RideBookedImage } from "../../assets/images";

const RideBookedDetails = ({ icon, content }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10
      }}
    >
      {icon}
      <Text
        style={{
          fontFamily: lato.regular.default,
          color: blackColor.opacity600
        }}
      >
        {content}
      </Text>
    </View>
  );
};

const RideBooked = () => {
  const { closeModal } = useActionContext();
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 20
      }}
    >
      <TouchableOpacity
        onPress={() => {
          closeModal();
        }}
      >
        <CancelIcon2 color={blackColor.opacity600} />
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          gap: 5
        }}
      >
        <Image
          source={RideBookedImage}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
        />

        <Text
          style={{
            fontFamily: lato.bold.default
          }}
        >
          Ride Booked
        </Text>
      </View>

      <RideBookedDetails
        icon={<LocationPin color={primaryColor.default} />}
        content="You will be picked up on Wed 2, Jun, 12:35 - 12:45 PM at Ikeja City Mall"
      />
      <RideBookedDetails
        icon={<NotificationIcon set="bold" color={primaryColor.default} />}
        content="You will be picked up on Wed 2, Jun, 12:35 - 12:45 PM at Ikeja City Mall"
      />
    </View>
  );
};

export default RideBooked;

const styles = StyleSheet.create({});
