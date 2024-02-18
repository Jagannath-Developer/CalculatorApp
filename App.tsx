import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Main from "./src/app";
import { COLORS } from "./src/style/color";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
      <StatusBar
        style="light"
        hidden={false}
        backgroundColor={COLORS.APP_BG}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APP_BG,
    paddingHorizontal:15,
  },
});
