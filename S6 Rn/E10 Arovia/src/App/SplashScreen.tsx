import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

// Function to render ui
function SplashScreen() {
  // Creating animation value, starts from invisible
  const FadeAnimation = useRef(new Animated.Value(0)).current;

  // Used for starting animation
  useEffect(() => {
    // Fades the logo in when app opens
    Animated.timing(FadeAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  // Returns ui
  return (
    // View is like div, giving style, Design is our variable with class Container
    <View style={Design.Container}>
      <Animated.Image
        source={require('../Assets/Images/Arovia-Logo.png')}
        style={[Design.Logo, { opacity: FadeAnimation }]}
        resizeMode="contain"
      />
    </View>
  );
}

// Exporting our UI
export default SplashScreen;

// Design variable storing our styling
const Design = StyleSheet.create({
  // Updating class Container
  Container: {
    flex: 1,
    backgroundColor: '#FAF8F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Updating class Logo
  Logo: {
    width: 220,
    height: 100,
  },
});
