import { StyleSheet, Text, View } from "react-native";

// Creating LotsOfStyling component
const LotsOfStyling = () => {
  // Returns styled ui
  return (
    <View style={styles.Container}>
      {/* Shows red text */}
      <Text style={styles.Red}>Just red</Text>

      {/* Shows big blue text */}
      <Text style={styles.BigBlue}>Just BigBlue</Text>

      {/* Red comes last, so it overrides BigBlue color */}
      <Text style={[styles.BigBlue, styles.Red]}>BigBlue, then Red</Text>

      {/* BigBlue comes last, so it overrides Red color */}
      <Text style={[styles.Red, styles.BigBlue]}>Red, then BigBlue</Text>
    </View>
  );
};

// Creating styles
const styles = StyleSheet.create({
  Container: {
    marginTop: 50,
  },
  BigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  Red: {
    color: "red",
  },
});

// Exporting our component
export default LotsOfStyling;