import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  blackColor,
  dangerColor,
  pendingColor,
  primaryColor,
  secondaryColor,
  successColor,
  whiteColor,
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
  plain,
}) => {
  const imageWidth = 50;
  const viewGap = 20;
  const [statusColor, setStatusColor] = useState(pendingColor.default);

  useEffect(() => {
    if (status) {
      if (status.toLowerCase() === "completed") {
        setStatusColor(successColor.default);
      } else if (status.toLowerCase() === "cancelled") {
        setStatusColor(dangerColor.default);
      }
    }
  }, [status]);

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
          height: 1,
        },

        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderRadius: 17,
        overflow: "hidden",
        padding: 2,
      }}
    >
      <View
        style={{
          backgroundColor: whiteColor.default,
          // borderColor:blackColor.opacity100,
          // borderWidth:1,
          padding: 20,
          borderRadius: 15,
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View
              style={{
                height: 100,
                justifyContent: "space-between",
                alignItems: "center",
                gap: 5,
              }}
            >
              <LocationDot color={primaryColor.opacity500} />
              <View
                style={{
                  flex: 1,
                  gap: 5,
                }}
              >
                <View
                  style={{
                    flex: 1 / 4,
                    width: 3,
                    backgroundColor: primaryColor.opacity200,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    flex: 1 / 4,
                    width: 3,
                    backgroundColor: primaryColor.opacity200,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    flex: 1 / 4,
                    width: 3,
                    backgroundColor: primaryColor.opacity200,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    flex: 1 / 4,
                    width: 3,
                    backgroundColor: primaryColor.opacity200,
                    borderRadius: 10,
                  }}
                ></View>
              </View>
              <LocationPin color={primaryColor.default} />
            </View>

            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: lato.regular.default,
                }}
              >
                {from?.place}
              </Text>
              <Text
                style={{
                  fontFamily: lato.regular.default,
                }}
              >
                {to?.place}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: lato.regular.default,
                color: primaryColor.default,
              }}
            >
              {
                formatDate({
                  date: from?.time,
                  timeFormat: ["H", "M"],
                  showTimeDifference: true,
                }).fullTime
              }
            </Text>
            <Text
              style={{
                fontFamily: lato.regular.default,
                color: primaryColor.default,
              }}
            >
              {
                formatDate({
                  date: to?.time,
                  timeFormat: ["H", "M"],
                  showTimeDifference: true,
                }).fullTime
              }
            </Text>
          </View>
        </View>
        {!plain && (
          <View
            style={{
              borderTopWidth: 1,
              borderColor: blackColor.opacity200,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingTop: 20,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <RoundedImage image={image} />

              <View
                style={{
                  gap: 6,
                }}
              >
                <Text
                  style={{
                    fontFamily: lato.bold.default,
                  }}
                >
                  {name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  <StarIcon set="bold" color="#FFBA40" />

                  <Text
                    style={{
                      fontFamily: lato.regular.default,
                      color: blackColor.opacity500,
                    }}
                  >
                    4.8
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                gap: 5,
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  fontFamily: lato.bold.default,
                }}
              >
                ${price?.amount}
              </Text>
              <Text
                style={{
                  color:
                    status === "completed"
                      ? successColor.default
                      : secondaryColor.default,
                  textTransform: "uppercase",
                }}
              >
                Ride {status}
              </Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({});
