import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import BudgetQIcon from '../components/icons/BudgetQ';

interface SplashProps {
  version: string;
  show: boolean;
}

/**
 * Splash screen
 */
const SplashScreen = (props: SplashProps) => {
  const {version, show} = props;

  if (show) {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={style.container.backgroundColor} />
        <View style={style.container}>
          <BudgetQIcon fill="#00A3FF" />

          <View style={style.footer}>
            <Text style={style.text}>Version {version}</Text>
            <Text style={style.text}>handcrafted with ❤️ by Arza</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

export default SplashScreen;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F1F6FB',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  text: {
    color: '#2A3236',
  },

  footer: {
    position: 'absolute',
    bottom: 14,
    rowGap: 4,
    alignItems: 'center',
  },
});
