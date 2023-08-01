import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { bauhs93, lato } from './fonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContainer, CameraContainer, Modal, Providers, ScreenContainer } from './components';
import { AddAddress, AddCard, AddProfilePicture, ChangePassword, ChatDetails, Chats, ChooseVehicle, Earnings, EditProfile, ExtraRateDetails, GettingStarted, GettingStartedTwo, History, Login, Navigation, NewBank, OTP, Profile, Rating, RatingDetails, Refer, Register,  SavedDestinations,  ScheduleRide,  Schedules,  SelectDestination,  Support,  TripDetails,  VehicleDetails, Wallet, Withdraw } from './screens';
import { NavNames } from './data/general';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    [lato.regular.default]: require("./fonts/Lato-Regular.ttf"),
    [lato.regular.italic]: require("./fonts/Lato-Italic.ttf"),
    [lato.black.default]: require("./fonts/Lato-Black.ttf"),
    [lato.black.italic]: require("./fonts/Lato-BlackItalic.ttf"),
    [lato.bold.default]: require("./fonts/Lato-Bold.ttf"),
    [lato.bold.italic]: require("./fonts/Lato-BoldItalic.ttf"),
    [bauhs93]: require("./fonts/BAUHS93.ttf"),
  });

  return (
    <>

      {fontsLoaded && <Providers>

        <Modal />

        <AppContainer>

          <NavigationContainer >
            <Stack.Navigator screenOptions={{
              
                  headerShown: false
            }} initialRouteName={NavNames.Navigation.name}>
              <Stack.Group screenOptions={{
                  animation:"slide_from_right",

                }}>

                <Stack.Screen name={NavNames.GettingStarted.name} component={GettingStarted} />
                <Stack.Screen name={NavNames.AddAddress.name} component={AddAddress} />
                <Stack.Screen name={NavNames.ChangePassword.name} component={ChangePassword} />
                <Stack.Screen name={NavNames.EditProfile.name} component={EditProfile} />
                <Stack.Screen name={NavNames.GettingStarted2.name} component={GettingStartedTwo} />
                <Stack.Screen name={NavNames.AddCard.name} component={AddCard} />
                <Stack.Screen name={NavNames.Support.name} component={Support} />
                <Stack.Screen name={NavNames.Refer.name} component={Refer} />
                <Stack.Screen name={NavNames.Schedules.name} component={Schedules} />
                <Stack.Screen name={NavNames.Earnings.name} component={Earnings} />
                <Stack.Screen name={NavNames.Withdraw.name} component={Withdraw} />
                <Stack.Screen name={NavNames.NewBank.name} component={NewBank} />
                <Stack.Screen name={NavNames.Wallet.name} component={Wallet} />
                <Stack.Screen name={NavNames.Register.name} component={Register} />
                <Stack.Screen name={NavNames.ChooseVehicle.name} component={ChooseVehicle} />
                <Stack.Screen name={NavNames.VehicleDetails.name} component={VehicleDetails} />
                <Stack.Screen name={NavNames.Navigation.name} component={Navigation} />
                <Stack.Screen name={NavNames.AddProfilePicture.name} component={AddProfilePicture} />
                <Stack.Screen name={NavNames.Login.name} component={Login} />
                <Stack.Screen name={NavNames.OTP.name} component={OTP} />
                <Stack.Screen name={NavNames.History.name} component={History} />
                <Stack.Screen name={NavNames.Rating.name} component={Rating} />
                <Stack.Screen name={NavNames.TripDetails.name} component={TripDetails} />
                <Stack.Screen name={NavNames.Profile.name} component={Profile} />
                <Stack.Screen name={NavNames.RatingDetails.name} component={RatingDetails} />
                <Stack.Screen name={NavNames.Chat.name} component={Chats} />
                <Stack.Screen name={NavNames.ExtraRatingDetails.name} component={ExtraRateDetails} />
                <Stack.Screen name={NavNames.ChatDetails.name} component={ChatDetails} />
                <Stack.Screen name={NavNames.ScheduleRide.name} component={ScheduleRide} />
              <Stack.Screen name={NavNames.SavedDestinations.name} component={SavedDestinations} />

              </Stack.Group>
              <Stack.Group screenOptions={{
                animation: "slide_from_bottom"
              }}>
                <Stack.Screen name={NavNames.SelectDestination.name} component={SelectDestination} />

              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>

        </AppContainer>

        

          <CameraContainer />

        
        
        </Providers>}
    
    </>
  );
}

const styles = StyleSheet.create({});
