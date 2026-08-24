import { Image, ScrollView, Text } from "react-native";

// Getting local flower image
const Logo = require("../Assets/Flower.png");

// Creating App component
const App = () => {
  // Returns scrollable ui
  return (
    <ScrollView>
      <Text style={{ fontSize: 90 }}>Scroll me !</Text>

      <Image source={Logo} style={{ width: 200, height: 200 }} />

      <Image source={Logo} style={{ width: 200, height: 200 }} />

      <Image source={Logo} style={{ width: 200, height: 200 }} />

      <Text style={{ fontSize: 96 }}>Just like that</Text>

      <Image source={Logo} style={{ width: 200, height: 200 }} />

      <Image source={Logo} style={{ width: 200, height: 200 }} />

      <Image source={Logo} style={{ width: 200, height: 200 }} />
    </ScrollView>
  );
};

// Exporting our component
export default App;
