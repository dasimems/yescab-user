import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { lato } from '../../fonts'
import { blackColor, primaryColor, whiteColor } from '../../assets/colors'
import { AngleDown } from '../../assets/icons'
import { ScrollView } from 'react-native-gesture-handler'

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
        justifyContent: "space-between",
        gap: 10,
    }}>

        <TouchableOpacity style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10
        }}>
            <Text style={{
                fontFamily: lato.regular.default
            }}>January 2020</Text>
            <AngleDown color={blackColor.opacity600} />
        </TouchableOpacity>

        <View style={{
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                
                gap: 20,
                alignItems: "center"
            }}>

                <TouchableOpacity style={{
                    ...styles.filterButtonStyle


                }}>
                    <Text style={{
                            ...styles.filterTextStyle

                    }}>Tue</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle
                    }}>19</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.filterButtonStyle


                }}>
                    <Text style={{
                            ...styles.filterTextStyle

                    }}>Wed</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle
                    }}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.filterButtonStyle


                }}>
                    <Text style={{
                            ...styles.filterTextStyle

                    }}>Thur</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle
                    }}>25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.filterButtonStyle,
                    backgroundColor: primaryColor.default


                }}>
                    <Text style={{
                            ...styles.filterTextStyle,
                            color: whiteColor.default

                    }}>Fri</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle,
                        color: whiteColor.default
                    }}>26</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.filterButtonStyle


                }}>
                    <Text style={{
                            ...styles.filterTextStyle

                    }}>Sat</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle
                    }}>27</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.filterButtonStyle


                }}>
                    <Text style={{
                            ...styles.filterTextStyle

                    }}>Sun</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle
                    }}>28</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.filterButtonStyle


                }}>
                    <Text style={{
                            ...styles.filterTextStyle

                    }}>Mon</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle
                    }}>29</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.filterButtonStyle


                }}>
                    <Text style={{
                            ...styles.filterTextStyle

                    }}>Tue</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle
                    }}>30</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.filterButtonStyle


                }}>
                    <Text style={{
                            ...styles.filterTextStyle

                    }}>Wed</Text>
                    <Text style={{
                        ...styles.filterTextTwoStyle
                    }}>31</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>



    </View>
  )
}

export default TripFilter

const styles = StyleSheet.create({

    filterButtonStyle: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: primaryColor.opacity100,
        alignItems: "center",
        gap: 5

    },
    filterTextStyle: {
        color: primaryColor.default,


    },
    filterTextTwoStyle: {
        color: blackColor.default,
        fontSize: 16,
        fontFamily: lato.bold.default


    }
})