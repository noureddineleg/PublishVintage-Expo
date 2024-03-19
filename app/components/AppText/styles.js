import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir Next",
            },
            android:{
                fontSize: 18,
                fontFamily: "Roboto",
            }
        })
    }
});

export default styles;