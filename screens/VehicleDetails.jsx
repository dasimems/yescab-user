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
  GettingStartedFooter,
  Logo,
  RegistrationFooter,
  RegistrationHeader
} from "../components";
import {
  blackColor,
  primaryColor,
  secondaryColor,
  whiteColor
} from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { NavNames, measurements } from "../data/general";
import { ArrowRight } from "../assets/icons";
import {
  OnboardingBackgroundOne,
  OnboardingOneImage,
  RegistrationImage
} from "../assets/images";
import { Building2, Mail, User } from "lucide-react-native";
import { Lock } from "lucide-react-native";
import { Home } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VehicleDetails = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: whiteColor.default
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%"
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <View
            style={{
              height: "auto",
              position: "relative",
              overflow: "hidden",
              backgroundColor: secondaryColor.light.default,
            }}
          >  
            <SafeAreaView style={{
                paddingVertical: 20,
                paddingHorizontal: 20,
                paddingBottom: 40,
            }}>
                
                <RegistrationHeader title="Vehicle Details" subTitle="Kindly provide the details of your vehicle below to begin the registration process" />

            </SafeAreaView>

          </View>

          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingVertical: 40,
              gap: 20
            }}
          >
            <View
              style={{
                ...styles.formParentStyle
              }}
            >
              <FormInputField
                placeholder="Enter Vehicle Name"
                inputStyle={{
                  ...styles.inputStyle
                }}
                inputParentStyle={{
                  ...styles.inputParentStyle
                }}
                style={{
                  ...styles.formStyle
                }}
              />
            </View>
            <View
              style={{
                ...styles.formParentStyle
              }}
            >
              <FormInputField
                placeholder="Enter Vehicle Model"
                inputStyle={{
                  ...styles.inputStyle
                }}
                inputParentStyle={{
                  ...styles.inputParentStyle
                }}
                style={{
                  ...styles.formStyle
                }}
              />
            </View>
            <View
              style={{
                ...styles.formParentStyle
              }}
            >
              <FormInputField
                placeholder="No of Seat"
                inputStyle={{
                  ...styles.inputStyle
                }}
                inputParentStyle={{
                  ...styles.inputParentStyle
                }}
                style={{
                  ...styles.formStyle
                }}
              />
            </View>
            <View
              style={{
                ...styles.formParentStyle
              }}
            >
              <FormInputField
                placeholder="Plate Number"
                inputStyle={{
                  ...styles.inputStyle
                }}
                inputParentStyle={{
                  ...styles.inputParentStyle
                }}
                style={{
                  ...styles.formStyle
                }}
                
              />
            </View>
            <View
              style={{
                ...styles.formParentStyle
              }}
            >
              <FormInputField
                placeholder="Chasis Number"
                inputStyle={{
                  ...styles.inputStyle
                }}
                inputParentStyle={{
                  ...styles.inputParentStyle
                }}
                style={{
                  ...styles.formStyle
                }}
              />
            </View>
            <View
              style={{
                ...styles.formParentStyle
              }}
            >
              <FormInputField
                placeholder="Engine No"
                inputStyle={{
                  ...styles.inputStyle
                }}
                inputParentStyle={{
                  ...styles.inputParentStyle
                }}
                style={{
                  ...styles.formStyle
                }}
              />
            </View>

            <Button onPress={()=>{
                navigate(NavNames.Navigation.name)
            }} style={{
                width: "100%",
            }} text="Save" />

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VehicleDetails;

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
    backgroundColor: whiteColor.default
  },
  inputParentStyle: {
    width: "100%",
    height: "100%"
  }
});
