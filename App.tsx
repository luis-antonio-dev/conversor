import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [kelvin, setKelvin] = useState(0);
  const [temperature, setTemperature] = useState(0);

  function celsiusToKelvin(value: number): number {
    return value + 273.15;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Kelvin: {kelvin}</Text>

      <TextInput
        value={temperature.toString()}
        onChangeText={(newTemperature) =>
          setTemperature(
            newTemperature.length > 0 ? Number.parseFloat(newTemperature) : 0
          )
        }
        style={styles.input}
        keyboardType="numeric"
        placeholder="°C"
      />

      <Button
        title="Calcular"
        onPress={() => setKelvin(celsiusToKelvin(temperature))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    fontSize: 35,
    marginTop: 30,
    paddingLeft: 30,
  },
  input: {
    marginTop: 30,
    fontSize: 35,
    marginBottom: 30,
    paddingLeft: 30,
  },
  button: {
    width: "90%",
  },
});
