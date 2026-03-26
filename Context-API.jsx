import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function App() {
  const languages = ['C++', 'JavaScript'];
  const MyContext = createContext();

  const [langIndex, setLangIndex] = useState(0);
  const toggleLang = () => {
    setLangIndex(val => (val + 1) % languages.length);
  }

  const contextValue = {
    currLang: languages[langIndex],
    toggleLang
  }

  return (
    <MyContext.Provider value={contextValue}>
      <MainSection/>
    </MyContext.Provider>
  )

  function MainSection() {
    const {currLang, toggleLang} = useContext(MyContext);
    
    return (
      <View style={styles.container}>
        <Text>{currLang}</Text>
        <Button title='click to toggle language' onPress={() => toggleLang()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  }
})

export default App;
