import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import ResultadoIMC from "./ResultadoIMC/index";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [Weight, setWeight] = useState(null);
  const [menssagemIMC, setmenssagemIMC] = useState("Preencha o peso e altura");
  const [imc, setIMC] = useState(null);
  const [textButton, settextButton] = useState("Calcular");

  function imcCalculator() {
    return setIMC((Weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (Weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setmenssagemIMC("Seu imc é igual a: ");
      settextButton("Calcular novamente");
      return;
    }
    setIMC(null);
    settextButton("Calcular ");
    setmenssagemIMC("Preencha o peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>

        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.70"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>

        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={Weight}
          placeholder="Ex.: 65.05"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.Button} onPress={() => validationImc()}>
          <Text style={styles.stlTextButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultadoIMC menssagemResultIMC={menssagemIMC} resultado={imc} />
    </View>
  );
}
