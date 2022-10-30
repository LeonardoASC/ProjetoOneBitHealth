import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultadoIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.resultado,
    });
  };

  return (
    <View style={styles.resultadoIMC}>
      <View style={styles.buttonShare}>
        <Text style={styles.information}>{props.menssagemResultIMC}</Text>
        <Text style={styles.numeroIMC}>{props.resultado}</Text>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
