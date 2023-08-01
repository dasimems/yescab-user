import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  LoggedInContainer,
  Logo,
  Nav,
  ProfileDetailsCard,
  RoundedImage,
  TripCard,
} from "../components";
import {
  blackColor,
  dangerColor,
  primaryColor,
  secondaryColor,
  successColor,
  whiteColor,
} from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { trips } from "../data/tripsData";
import { padding } from "../data/general";
import { AngleLeft, AngleRight, LocationDot, LocationPin, Money, StarIcon } from "../assets/icons";
import { MaleAvatarOne } from "../assets/images";

const TripDetails = () => {
  const { navigate, goBack } = useNavigation();
  const { params } = useRoute();
  const { id } = params;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      var tripDetails = trips.find((trip) => trip.id === id);

      if (tripDetails) {
        setDetails(tripDetails);
      } else {
        goBack();
      }
    } else {
      goBack();
    }
  }, [id]);
  return (
    <LoggedInContainer
      headerText={"Trip Details"}
      containerStyle={{
        paddingHorizontal: 0,
      }}
      showBackFunction
      headerTextStyle={16}
    >
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingVertical: 20,
        gap: 20
      }}>

        <View
          style={{
            paddingHorizontal: padding,
          }}
        >
          <TripCard
            plain
            id={details?.id}
            price={details?.price}
            to={details?.trip?.to}
            from={details?.trip?.from}
          />
        </View>

        <View
          style={{
            paddingHorizontal: padding,
            paddingVertical: 15,
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
              <View>

                <Text
                  style={{
                    fontFamily: lato.bold.default,
                  }}
                >
                  Ikeja City Hall
                </Text>
                <Text
                  style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity600
                  }}
                >
                 Obafemi Awolowo Way, Ikeja Nigeria
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: lato.bold.default,
                  }}
                >
                  Shoprite Event Center
                </Text>
                <Text
                  style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity600
                  }}
                >
                  Shoprite Road, Alausa Ikeja
                </Text>

              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: lato.regular.default,
                  color: primaryColor.default,
                }}
              >
                Pick up
                
              </Text>
              <Text
                style={{
                  fontFamily: lato.regular.default,
                  color: blackColor.opacity600,
                }}
              >
                4:30pm
                
              </Text>

            </View>

            <View>

              <Text
                style={{
                  fontFamily: lato.regular.default,
                  color: primaryColor.default,
                }}
              >
                Drop-Off
              </Text>
              <Text
                style={{
                  fontFamily: lato.regular.default,
                  color: blackColor.opacity600,
                }}
              >
                4:30pm
              </Text>
            </View>
          </View>
        </View>
        </View>


        <View
          style={{
            paddingHorizontal: padding,
            alignItems: "center",
            gap: 10,
            paddingTop: 20
          }}
        >
          <RoundedImage size={100} />
          <Text style={{
            fontFamily: lato.regular.default,
            color: blackColor.opacity600,
          }}>You rode with David Seyi</Text>
          <View style={{
            flexDirection: "row",
            gap: 10

          }}>

            {new Array(5).fill("t").map((_, index)=>(
              <StarIcon  set="bold" color="#FFBA40" key={index} />
            ))}
          </View>
          <Text style={{
            fontFamily: lato.bold.default,
            fontSize: 16
          }}>$8</Text>
        </View>
      </ScrollView>
    </LoggedInContainer>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  actionStyle: {
    paddingVertical: 20,
  },
});
