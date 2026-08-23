import Divider from "./Divider";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

// Creating PizzaTranslator component
const PizzaTranslator = () => {
  // Starts with empty text
  const [UserText, SetUserText] = useState("");

  // Returns ui
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextInput
        placeholder="Type here to translate!"
        // Gets new text & saves it in state
        onChangeText={(NewText) => SetUserText(NewText)}
        // Shows current text in input
        value={UserText}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}
      />

      <Text style={{ padding: 10, fontSize: 42 }}>
        {/* Splits text → changes each word to 🍕 → joins them */}
        {UserText
        .split(" ")
          .map((Word) => Word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
};

// Exporting our component
export default PizzaTranslator;