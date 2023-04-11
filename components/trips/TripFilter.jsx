import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { lato } from '../../fonts'
import { blackColor, primaryColor } from '../../assets/colors'

const TripFilter = ({activeFilter,onChange}) => {
    const [tripType, setTripType] = useState("ongoing")
    const filters = ["Ongoing", "Completed", "Cancelled"]

    if(!onChange){
        onChange = () => {}
    }

    useEffect(()=>{
        if(activeFilter){
            setTripType(activeFilter)
        }
    }, [activeFilter])

    useEffect(()=>{
        setTripType("ongoing");
        onChange("ongoing")
    }, [])
  return (
    <View style={{
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        gap: 10,
    }}>

        {filters.map((filter,index)=> (

            tripType.toLowerCase() === filter.toLowerCase()? (
                <Pressable key={index}  style={{
                    ...styles.filterButtonStyle,
                    borderBottomWidth:  2,
                    borderBottomColor:  primaryColor.default 
                }}>
                    <Text style={{
                        ...styles.filterTextStyle,
                        color:  blackColor.default,
                        fontFamily:  lato.black.default
                    }}>{filter}</Text>
                </Pressable>
            ): (

                <TouchableOpacity key={index} onPress={()=>{
                    setTripType(filter);
                    onChange(filter);

                }} style={{
                    ...styles.filterButtonStyle,
                }}>
                    <Text style={{
                        ...styles.filterTextStyle,

                    }}>{filter}</Text>
                </TouchableOpacity>

            )

        ))}
    </View>
  )
}

export default TripFilter

const styles = StyleSheet.create({

    filterButtonStyle: {
        paddingHorizontal: 10,
        paddingVertical: 8

    },
    filterTextStyle: {
        fontFamily: lato.bold.default,
        fontSize: 15,
        color: blackColor.opacity700


    }
})