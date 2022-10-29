import React,  { useState }  from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultadoIMC from "./ResultadoIMC/index";

export default function Form() {
    
    const [height, setHeight] = useState(null)
    const [Weight, setWeight] = useState(null)
    const [menssagemIMC, setmenssagemIMC] = useState("Preencha o peso e altura")
    const [imc, setIMC] = useState(null)
    const [textButton, settextButton] = useState("Calcular")

    function imcCalculator(){
        return  setIMC((Weight/(height*height)).toFixed(2))
    }
    
    function validationImc(){
        if(Weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setmenssagemIMC("Seu imc é igual a: ")
            settextButton("Calcular novamente")
            return 
        }
    setIMC(null)
    settextButton("calcular ")
    setmenssagemIMC("Preencha o peso e altura")
    }
    
    
        return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
        onChangeText={setHeight}
        value={height}
        placeholder="Ex.: 1.70"
        keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
        onChangeText={setWeight}
        value={Weight}
         placeholder="Ex.: 65.05"
         keyboardType="numeric"
         />
         <Button 
         onPress={() => validationImc()}
         title={textButton}
         />

      </View>
      <ResultadoIMC menssagemResultIMC={menssagemIMC} resultado={imc}/>
    </View>
    )
}

