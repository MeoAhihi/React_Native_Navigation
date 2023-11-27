import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Screen2({ navigation, route }) {
  const { params } = route;
  const { name, age } = params;
  function Goback() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Text>Screen 2!</Text>
      <Text>Full name: {name}</Text>
      <Text>Age: {age}</Text>
      <Pressable onPress={Goback}>
        <Text>Back to Screen 1</Text>
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
