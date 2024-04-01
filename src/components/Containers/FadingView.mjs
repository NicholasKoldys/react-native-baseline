import React, { useRef } from 'react';

import {
  Animated,
  Text,
  StyleSheet,
} from 'react-native';

 // * React.ComponentProps<Animated.View>
//forwardRef<Animated.View, FadingViewProps>
/**
 * 
 * @param {{
    * style: StyleProp<ViewStyle>,
    * opacity: Animated.Value,
    * opacityThresholdToEnablePointerEvents: number,
    * children: React.ReactNode,
  * }} param0 
 * @param {*} ref 
 * @returns 
 */
export const FadingView = ({
  children,
  style,
  opacity = 1,
  startOpacity = 0,
  duration = 500,
  animatedProps = {},
  opacityThresholdToEnablePointerEvents = 1,
  // ...rest
}, ref = null ) => {
  // const _animatedProps = useAnimatedProps(() => {
  //   /** * @type {forwardRef<Animated, FadingViewProps>} */
  //   const _pointerEvents = 
  //     opacity.value >= opacityThresholdToEnablePointerEvents ? 'auto' : 'none';
  //   return { pointerEvents: _pointerEvents };
  // }, 
  // [opacityThresholdToEnablePointerEvents]);

  const fadeAnim = useRef(new Animated.Value(startOpacity)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: opacity,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View onLayout={fadeIn}
      ref={ ref }
      style={[ 
        styles.fadingContainer, 
        style, 
        { opacity: fadeAnim, }
      ]}
      animatedProps={{ /* _animatedProps, */ animatedProps }}
      // animatedProps={{ ..._animatedProps, ...animatedProps }}
      // { ...rest }
    >
      { children || <Text style={styles.fadingText}>Fading View!</Text> }
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
});