/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { VictoryBar, VictoryChart, VictoryTooltip, VictoryPie, VictoryTheme } from 'victory-native';
import CustomLabel from './custom_label_component';
import Svg from "react-native-svg";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.container}>
              <Svg width={400} height={400} viewBox="0 0 400 400"
                     style={{ width: "100%", height: "auto" }}>
                <VictoryPie
                  style={{ labels: { fill: "white" } }}
                  innerRadius={100}
                  labelRadius={110}
                  labels={({ datum }) => `# ${datum.y}`}
                  labelComponent={<CustomLabel renderInPortal={false}/>}
                  data={[
                    { x: 1, y: 5 },
                    { x: 2, y: 4 },
                    { x: 3, y: 2 },
                    { x: 4, y: 3 },
                    { x: 5, y: 1, label: "test" }
                  ]} 
                events={[{
                  target: "data",
                  eventHandlers: {
                    onPressIn: () => {
                      alert("click");
                    }
                  }
                }]}
                />
              </Svg>
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
