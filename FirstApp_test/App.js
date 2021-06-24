/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [num, setNum] = useState(0);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          flexDirection: 'row',
          textAlign: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          // style={{backgroundColor: 'blue'}}
          onPress={() => setNum(num - 1)}>
          <Text>UP</Text>
        </TouchableOpacity>
        <Text>{num}</Text>
        <TouchableOpacity
          // style={{backgroundColor: 'gray'}}
          onPress={() => setNum(num + 1)}>
          <Text>DOWN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
