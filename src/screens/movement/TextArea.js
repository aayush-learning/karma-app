import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class Textarea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: +(!!props.defaultValue && props.defaultValue.length),
    };
  }

  onChangeText = (text) => {
    const { onChangeText } = this.props;

    this.setState({ count: text.length });

    if (onChangeText) onChangeText(text);
  };

  renderCount() {
    const { maxLength } = this.props;
    const { count } = this.state;

    if (!maxLength) return null;

    return <Text style={styles.count}>{`${count}/${maxLength}`}</Text>;
  }

  render() {
    const { containerStyle, maxLength, ...rest } = this.props;
    if (maxLength) {
      rest.maxLength = maxLength;
    }
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput multiline {...rest} onChangeText={this.onChangeText} ref="textarea" />
        {this.renderCount()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
  },
  count: {
    position: 'absolute',
    bottom: 8,
    right: 2,
    fontSize: 14,
    color: '#ccc',
  },
});
