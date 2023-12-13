import { ImageSourcePropType,TouchableOpacity, StyleSheet, Text, View ,Image, Touchable} from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps) => { 
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
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
      <Dice imageUrl={diceImage} />
      <TouchableOpacity onPress={rollDice}>
        <Text>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  ) 
}

const styles = StyleSheet.create({
  diceImage:{}
})

export default App