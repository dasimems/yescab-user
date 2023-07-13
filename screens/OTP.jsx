import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, FormInputField, Logo, RegistrationFooter, RegistrationHeader, ScreenContainer } from "../components";
import { blackColor, dangerColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { AngleLeft } from "../assets/icons";
import AnimatedLottieView from "lottie-react-native";
import { mailLottieFile } from "../assets/lotties";
import { useFormContext } from "../context";
import {
  OTP_CODE_FOUR,
  OTP_CODE_ONE,
  OTP_CODE_THREE,
  OTP_CODE_TWO
} from "../data/_actions";
import { formatSeconds } from "../functions";
import { NavNames } from "../data/general";

const OTP = () => {
  const { navigate, goBack } = useNavigation();
  const {
    phone,
    otpCodeOne,
    otpCodeTwo,
    otpCodeThree,
    otpCodeFour,
    setOTPCode,
    country: { mobileCode }
  } = useFormContext();
  const [defaultTimer, setDefaultTimer] = useState(30000);
  const [error, setError] = useState(false)
  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);
  const inputRefThree = useRef(null);
  const inputRefFour = useRef(null);

  const processOtp = useCallback(()=>{

    var allCode = `${otpCodeOne}${otpCodeTwo}${otpCodeThree}${otpCodeFour}`;


    if(allCode === "5555"){
      navigate(NavNames.Navigation.name);

    }else{

        setError(true);
            var positionArr = [OTP_CODE_ONE, OTP_CODE_TWO, OTP_CODE_THREE, OTP_CODE_FOUR];

            positionArr.forEach((_, index) => {
                setOTPCode("", positionArr[index]);
            });
            inputRefOne.current.focus();


    }

  }, [otpCodeOne, otpCodeTwo, otpCodeThree, otpCodeFour])

  useEffect(
    () => {
      setTimeout(() => {
        if (defaultTimer > 0) {
          var newTimer = defaultTimer - 1000;

          if (newTimer < 0) {
            newTimer = 0;
          }

          setDefaultTimer(newTimer);
        }
      }, 1000);
    },
    [defaultTimer]
  );

  useEffect(() => {
    if(otpCodeOne.trim() !== "" && otpCodeTwo.trim() !== "" && otpCodeThree.trim() !== "" && otpCodeFour.trim() !== ""){

        processOtp();

    }
    // setError(false)
  }, [otpCodeOne, otpCodeTwo, otpCodeThree, otpCodeFour, processOtp]);

  return (
    <ScreenContainer style={{ flex: 1, padding: 20, backgroundColor: whiteColor.default }}>
      <View style={{ flex: 1 }}>
        

        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 50
          }}
        >
          
          <RegistrationHeader title="Verification" subTitle="Kindly enter the OTP sent to your mobile phone " />

          <View style={{
            gap: 40
          }}>

            <View style={{ flexDirection: "row", gap: 20 }}>
                <FormInputField
                disableKeyboardAutoHide
                ref={inputRefOne}
                value={otpCodeOne}
                onChangeText={text => {
                    var value = text.trim();

                    if (value.length < 5) {
                        var positionArr = [
                            OTP_CODE_ONE,
                            OTP_CODE_TWO,
                            OTP_CODE_THREE,
                            OTP_CODE_FOUR
                            ],
                            codeArr = value.split("");

                        codeArr.forEach((code, index) => {
                            if (index > 0) {
                            setOTPCode(code, positionArr[index]);
                            }
                        });
                    }

                    if (value.length > 1) {
                    value = value.slice(0, 1);
                    }

                    setOTPCode(value, OTP_CODE_ONE);

                    if (value.length > 0) {
                    inputRefTwo.current.focus();
                    }
                }}
                keyboardType="number-pad"
                inputType="numeric"
                inputStyle={{ ...styles.inputFieldStyle,
                }}
                style={{ ...styles.inputStyle,
                
                    borderWidth: error? 1: 0,
                    borderColor: error? dangerColor.opacity600: "transparent" }}
                removePlaceholder
                />
                <FormInputField
                    onKeyPress={({ nativeEvent: { key: keyValue } }) => {

                        if(otpCodeTwo.trim() === ""){

                            if(keyValue.toLowerCase() === "backspace"){
                                inputRefOne.current.focus()
                            }

                        }
                    }}
                disableKeyboardAutoHide
                ref={inputRefTwo}
                value={otpCodeTwo}
                onChangeText={text => {
                    var value = text.trim();
                    if (value.length > 1) {
                    value = value.slice(0, 1);
                    }

                    setOTPCode(value, OTP_CODE_TWO);

                    if (value.length > 0) {
                    inputRefThree.current.focus();
                    }
                }}
                keyboardType="number-pad"
                inputType="numeric"
                inputStyle={{ ...styles.inputFieldStyle,
                }}
                style={{ ...styles.inputStyle,
                
                    borderWidth: error? 1: 0,
                    borderColor: error? dangerColor.opacity600: "transparent" }}
                removePlaceholder
                />
                <FormInputField
                    onKeyPress={({ nativeEvent: { key: keyValue } }) => {

                        if(otpCodeThree.trim() === ""){

                            if(keyValue.toLowerCase() === "backspace"){
                                inputRefTwo.current.focus()
                            }

                        }
                    }}
                disableKeyboardAutoHide
                ref={inputRefThree}
                value={otpCodeThree}
                onChangeText={text => {
                    var value = text.trim();
                    if (value.length > 1) {
                    value = value.slice(0, 1);
                    }

                    setOTPCode(value, OTP_CODE_THREE);

                    if (value.length > 0) {
                    inputRefFour.current.focus();
                    }
                }}
                keyboardType="number-pad"
                inputType="numeric"
                inputStyle={{ ...styles.inputFieldStyle,
                }}
                style={{ ...styles.inputStyle,
                
                    borderWidth: error? 1: 0,
                    borderColor: error? dangerColor.opacity600: "transparent" }}
                removePlaceholder
                />
                <FormInputField
                onKeyPress={({ nativeEvent: { key: keyValue } }) => {

                    if(otpCodeFour.trim() === ""){

                        if(keyValue.toLowerCase() === "backspace"){
                            inputRefThree.current.focus()
                        }

                    }
                }}
                ref={inputRefFour}
                value={otpCodeFour}
                onChangeText={text => {
                    var value = text.trim();
                    if (value.length > 1) {
                    value = value.slice(0, 1);
                    }

                    setOTPCode(value, OTP_CODE_FOUR);
                }}
                keyboardType="number-pad"
                inputType="numeric"
                inputStyle={{ ...styles.inputFieldStyle,
                }}
                style={{ ...styles.inputStyle,
                
                    borderWidth: error? 1: 0,
                    borderColor: error? dangerColor.opacity600: "transparent" }}
                removePlaceholder
                />
            </View>

            <View>
              {defaultTimer < 1
                ? <TouchableOpacity
                    onPress={() => {
                      setDefaultTimer(100000);
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: lato.bold.default,
                        color: primaryColor.opacity500,
                      }}
                    >
                      Resend Code
                    </Text>
                  </TouchableOpacity>
                : <Text
                    style={{
                      textAlign: "center",
                      fontFamily: lato.regular.default,
                      color: blackColor.opacity700
                    }}
                  >
                    Resend Code in ({formatSeconds(defaultTimer)})
                  </Text>}
            </View>

          </View>

        </View>
      </View>

      <RegistrationFooter />

      
    </ScreenContainer>
  );
};

export default OTP;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontFamily: lato.regular.default,
    color: blackColor.opacity600,
    fontSize: 17
  },

  inputStyle: {
    width: 50,
    backgroundColor: "transparent",
    borderRadius: 10
  },

  inputFieldStyle: {
    textAlign: "center",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 0,
    borderColor: blackColor.opacity400
  }
});
