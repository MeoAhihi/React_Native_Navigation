import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function Screen1({ navigation }) {
  const [person, setPerson] = useState([]);
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      const personz = res.data[0];
      setPerson( personz);
      console.log(person);
    })
    .catch((error) => console.log(error));

  function clickNe() {
    navigation.navigate("Screen2", { name: "Wind Ly", age: 20 });
  }
  return (
    <View style={styles.container}>
      <Text>Screen 1!</Text>
      <Text>ID: {person.id}</Text>
      <Text>Name: {person.name}</Text>
      <Pressable onPress={clickNe}>
        <Text>To Screen 2</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
