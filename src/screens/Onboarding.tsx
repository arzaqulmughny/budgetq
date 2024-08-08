import React from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import WelcomeScreenIllustration from '../components/illustrations/WelcomeScreen';
import BudgetQIcon from '../components/icons/BudgetQ';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/icons/budgetq.png')}
        style={styles.logo}
      />

      <View style={styles.header}>
        <Text style={styles.heading1}>Hi There!</Text>
        <Text style={styles.paragraph}>
          Welcome to BudgetQ! Easily manage your money, track spending, and save
          more. Let's start your financial journey together!
        </Text>
      </View>

      <WelcomeScreenIllustration />

      <Pressable style={styles.buttonPrimary}>
        <Text style={styles.buttonPrimaryText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F6FB',
    height: '100%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    padding: 24,
  },
  logo: {
    alignSelf: 'flex-end',
    width: 44,
    resizeMode: 'contain',
    height: 18
  },
  header: {
    rowGap: 7,
  },
  heading1: {
    color: '#2A3236',
    fontSize: 32,
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#2A3236',
    fontSize: 16,
    lineHeight: 30,
  },
  buttonPrimary: {
    backgroundColor: '#00A3FF',
    display: 'flex',
    borderRadius: 24,
    padding: 16,
  },
  buttonPrimaryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
