import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
} from "react-native";
import styles from "./style";
import ResultadoIMC from "./ResultadoIMC/index";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [Weight, setWeight] = useState(null);
  const [menssagemIMC, setmenssagemIMC] = useState("Preencha o peso e altura");
  const [imc, setIMC] = useState(null);
  const [textButton, settextButton] = useState("Calcular");
  const [errorMenssage, seterrorMenssage] = useState(null);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    return setIMC((Weight / (heightFormat * heightFormat)).toFixed(2));
  }

  function verificarionImc() {
    if (imc == null) {
      Vibration.vibrate();
      seterrorMenssage("Campo Obrigatorio*");
    }
  }

  function validationImc() {
    if (Weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setmenssagemIMC("Seu imc é igual a: ");
      settextButton("Calcular novamente");
      seterrorMenssage(null);
    } else {
      verificarionImc();
      setIMC(null);
      settextButton("Calcular ");
      setmenssagemIMC("Preencha o peso e altura");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.mensagemError}>{errorMenssage}</Text>

          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex.: 1.70"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.mensagemError}>{errorMenssage}</Text>

          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={Weight}
            placeholder="Ex.: 65.05"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.Button}
            onPress={() => validationImc()}
          >
            <Text style={styles.stlTextButton}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exbirResultImc}>
          <ResultadoIMC menssagemResultIMC={menssagemIMC} resultado={imc} />
          <TouchableOpacity
            style={styles.Button}
            onPress={() => validationImc()}
          >
            <Text style={styles.stlTextButton}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
