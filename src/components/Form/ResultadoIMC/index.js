import React from "react";
import {View, Text} from "react-native";

export default function ResultadoIMC(props) {
    return (
    <View>
      <Text>{props.menssagemResultIMC}</Text>
      <Text>{props.resultado}</Text>
    </View>
    )
}