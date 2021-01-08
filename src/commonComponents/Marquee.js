import React, { useState, useRef } from 'react';
import { Animated, Easing, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

const Marquee = ({ children, duration, delay }) => {
  const containerWidth = useRef(0);
  const contentWidth = useRef(0);
  const offsetX = useRef(new Animated.Value(0));
  const [isStartAnimation, setIsStartAnimation] = useState(false);
  let contentRef; // reference of flatlist

  function measureContainerView(event) {
    const newContainerWidth = event.nativeEvent.layout.width;
    if (containerWidth.current === newContainerWidth) return;
    containerWidth.current = newContainerWidth;
    if (contentRef) {
      contentRef.measure((fx, fy, width) => {
        // If contentWidth is less then containerWidth not start animation
        if (width > containerWidth.current - 50) {
          setIsStartAnimation(true);
          checkContent(width);
        }
      });
    }
  }

  function checkContent(newContentWidth) {
    contentWidth.current = newContentWidth;
    Animated.loop(
      Animated.timing(offsetX.current, {
        toValue: -contentWidth.current,
        duration: duration,
        delay,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }
  // if data gets updated on the list
  function measureContentView(event) {
    const { width, x } = event.nativeEvent.layout;
    if (!containerWidth.current || width === contentWidth.current) return;
    offsetX.current.stopAnimation();
    offsetX.current.setValue(0);
    offsetX.current.setOffset(0);
    if (width > containerWidth.current - 50) {
      setIsStartAnimation(true);
      checkContent(width);
    }
  }

  const childrenProps = children.props;
  const childrenWithProps = React.cloneElement(children, {
    ...childrenProps,
    onLayout: measureContentView,
    // eslint-disable-next-line no-return-assign
    ref: (ref) => (contentRef = ref),
  });

  return (
    <View onLayout={measureContainerView}>
      <ScrollView horizontal bounces={false} scrollEnabled={false} showsHorizontalScrollIndicator={false}>
        <Animated.View
          style={{
            flexDirection: 'row',
            transform: [{ translateX: offsetX.current }],
          }}
        >
          {childrenWithProps}
          {isStartAnimation && children}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

Marquee.defaultProps = {
  duration: 25000,
  delay: 0,
};

Marquee.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export default React.memo(Marquee);
