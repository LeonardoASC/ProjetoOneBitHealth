import React from "react";
import {View, Text} from "react-native";
import styles from "./style";

export default function ResultadoIMC(props) {
    return (
    <View style={styles.resultadoIMC}>
      <Text style={styles.information}>{props.menssagemResultIMC}</Text>
      <Text style={styles.numeroIMC}>{props.resultado}</Text>
    </View>
    )
}