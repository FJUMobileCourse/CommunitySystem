
import { StyleSheet, View, Text, Navigator, FlatList, Button, Modal} from 'react-native';
import React, { useState, Component, useEffect } from 'react';



const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);
  
    return (
      <View>
        <Text>
          I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
        </Text>
        <Button
          onPress={() => {
            setIsHungry(false);
          }}
          disabled={!isHungry}
          title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
        />
      </View>
    );
  }
  
  const Cafe = () => {
    return (
      <>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
      </>
    );
  }
  
  export default Cafe;