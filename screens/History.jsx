import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoggedInContainer, TripCard, TripFilter } from '../components'
import { trips } from '../data/tripsData'

const History = () => {
  const [tripData, setTripData] = useState([])
  const [activeTripType, setActiveTripType] = useState("")

  useEffect(()=>{

    
    if(activeTripType){
      setTripData(trips.filter(trips => trips.status.toLowerCase() === activeTripType.toLowerCase()))
    }else{
      setTripData(trips)

    }

  }, [activeTripType])

  return (
    <LoggedInContainer showBackFunction headerText="History">
      <View style={{
        marginTop: 10,
        flex: 1
      }}>
        <TripFilter onChange={(type)=>{
          setActiveTripType(type);
        }} />

        <View style={{
          flex: 1,
          paddingTop: 20,
        }}>

          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
              gap: 20
            }}
            data={tripData}
            extraData={tripData}
            keyExtractor={(_, index) => index}
            renderItem={({item: {date, passengerName, price, trip, status, image, id}})=>{
              
              return <TripCard image={image} date={date} name={passengerName} id={id} price={price} from={trip?.from} to={trip?.to} status={status} />;}}
          />

        </View>
      </View>
    </LoggedInContainer>
  )
}

export default History

const styles = StyleSheet.create({})