import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/e-learning-online-flat-illustration_98292-3809.jpg?ga=GA1.2.388752119.1717149668&semt=ais_hybrid",
        }}
        style={{ height: 400, width: 350, marginTop: 100, borderRadius: 20 }}
      />
      <View style={styles.card}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: 50,
            color: "white",
            fontFamily:"Outfit-VariableFont_wght",
            fontWeight:"bold"
          }}
        >
          CODEBOX
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: 30,
            color: "white",
            paddingLeft: 10,
            paddingRight: 10,
            fontFamily: "Outfit-VariableFont_wght",
          }}
        >
          your ultimate programming learning box
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            gap: 10,
            backgroundColor: "white",
            margin: 50,
            borderRadius: 30,
            padding: 10,
          }}
        >
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/3d-view-letters-alphabet_23-2150499103.jpg?ga=GA1.2.388752119.1717149668&semt=ais_hybrid",
            }}
            style={{ height: 40, width: 40, borderRadius: 10 }}
          />
          <Text
            style={{
              color: "#6857E8",
              fontSize: 20,
              fontFamily:"Oswald-VariableFont_wght"
            }}
          >
            Sign in with google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#6857E8",
    height: 400,
    width: "100%",
    marginTop: -20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
export default LoginScreen;
