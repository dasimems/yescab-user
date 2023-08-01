import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  blackColor,
  dangerColor,
  pendingColor,
  primaryColor,
  secondaryColor,
  successColor,
  whiteColor
} from "../../assets/colors";
import { formatDate } from "../../functions";
import { lato } from "../../fonts";
import { LocationDot, LocationPin, StarIcon } from "../../assets/icons";
import RoundedImage from "../general/RoundedImage";
import { useNavigation } from "@react-navigation/native";
import { NavNames } from "../../data/general";

const TripCard = ({
  date,
  name,
  price,
  image,
  from,
  to,
  status,
  id,
  plain
}) => {
  const imageWidth = 50;
  const viewGap = 20;
  const [statusColor, setStatusColor] = useState(primaryColor.default);

  useEffect(
    () => {
      if (status) {
        if (status.toLowerCase() === "completed") {
          setStatusColor(successColor.default);
        } else if (status.toLowerCase() === "cancelled") {
          setStatusColor(dangerColor.default);
        }
      }
    },
    [status]
  );

  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(NavNames.TripDetails.name, { id });
      }}
      style={{
        elevation: 2,
        shadowColor: blackColor.opacity300,
        shadowOffset: {
          width: 0,
          height: 1
        },

        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderRadius: 17,
        overflow: "hidden",
        padding: 2
      }}
    >
      <View
        style={{
          backgroundColor: whiteColor.default,
          // borderColor:blackColor.opacity100,
          // borderWidth:1,
          borderRadius: 15
        }}
      >
        <View
          style={{
            height: 150,
            backgroundColor: blackColor.opacity100
          }}
        />
        {!plain &&
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 20,
              paddingVertical: 20,
              justifyContent: "space-between"
            }}
          >
            <View style={{
              gap: 5
            }}>
              <Text style={{
                fontFamily: lato.bold.default,

                
              }}>March 25, 2020 | 4:30 PM</Text>
              <Text style={{
                fontFamily: lato.regular.default,
                color: statusColor,
              }}>
                {status}
              </Text>
            </View>

            <Text style={{
              fontFamily: lato.bold.default,
              color: blackColor.opacity600
            }}>${price?.amount}</Text>
          </View>}
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({});
