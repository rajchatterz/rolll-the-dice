import { ImageSourcePropType, StyleSheet, Text, View ,Image} from 'react-native'
import React, { PropsWithChildren } from 'react'
import DiceOne from './src/components/DiceOne.png'
import DiceTwo from './src/components/DiceTwo.png'
import DiceThree from './src/components/DiceThree.png'
import DiceFour from './src/components/DiceFour.png'
import DiceFive from './src/components/DiceFive.png'
import DiceSix from './src/components/DiceSix.png'

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

function App():JSX.Element {
  return (
    <View>
      <Text>App</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
  diceImage:{}
})

export default App