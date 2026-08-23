import Divider from "./Divider";
import { useState } from "react";
import { Button, Text, View } from "react-native";

// Defining what props this component accepts
type CatProps = {
  name: string;
};

// Creating Cat component
const Cat = (props: CatProps) => {
  // Cat starts hungry, so IsHungry is true
  const [IsHungry, SetIsHungry] = useState(true);

  // Returns ui
  return (
    <View>
      <Text>
        {/* If hungry show hungry, otherwise show full */}I am {props.name} & i
        am {IsHungry ? "hungry" : "full"}
      </Text>

      <Button
        // When pressed, makes cat full
        onPress={() => {
          SetIsHungry(false);
        }}
        // IsHungry → false, !false = true & disables btn
        disabled={!IsHungry}
        // If hungry show food msg, otherwise show ty
        title={IsHungry ? "Give me some food, please !" : "Thank you"}
      />
    </View>
  );
};

// Creating Cafe component
const Cafe = () => {
  // Returns multiple Cat components
  return (
    <>
      <Cat name="Rango" />
      <Cat name="Coco" />
    </>
  );
};

// Exporting our component
export default Cafe;