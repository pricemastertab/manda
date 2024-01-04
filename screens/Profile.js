import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

export default function ProfileScreen(){
    return (
        <View style={styles.container} >
            <Image source={require("../assets/Capturar.png")} />
            <View style={styles.TextRotina} >
                <Text>Rotinas</Text>
            </View>
            <View>
                <Button>
                   <Text>criar rotina</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        left: '50%',
        top: '1%',
    }
})