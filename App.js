import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://snack-exercise.vercel.app' }}
    />
  );
}
