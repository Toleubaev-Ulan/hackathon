import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from 'expo-router';

const ButtonCustom = ({ text, color, textColor, onPress }) => {
    const router = useRouter();

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={() => router.push(`/${onPress}`)}>
                <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    button: {
        width: '100%',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ButtonCustom;
