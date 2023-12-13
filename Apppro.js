import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'


export default function Apppro() {
    const [diceImage, setDiceImage] = useState(DiceOne)
    const rollDice = () => {
        let random = Math.floor(Math.random() * 6) + 1 
        switch (random) {
            case 1:
                setDiceImage(DiceOne)
                break;
            case 2:
                setDiceImage(DiceTwo)
                break;
            case 3:
                setDiceImage(DiceThree)
                break;
            case 4:
                setDiceImage(DiceFour)
                break;
            case 5:
                setDiceImage(DiceFive)
                break;
            case 6:
                setDiceImage(DiceSix)
                break;
        }
    }
  return (
    <View>
          <Image source={diceImage} style={{ width: 200, height: 200 }} />
          <TouchableOpacity onPress={rollDice}>
              <Text>Roll Dice</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})