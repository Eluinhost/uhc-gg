import { Text, StyleSheet } from 'react-native';
import * as React from 'react';

export class AppText extends React.PureComponent {
  static styles = StyleSheet.create({
    text: {
      fontFamily: 'ShareTech-Regular',
      color: '#ECEFF1',
    },
    bold: {
      fontWeight: 'bold',
    },
  });

  render() {
    const styles = [AppText.styles.text];

    if (this.props.bold) {
      styles.push(AppText.styles.bold);
    }

    if (this.props.style) {
      styles.push(this.props.style);
    }

    return (
      <Text {...this.props} style={styles}>
        {this.props.children}
      </Text>
    );
  }
}
