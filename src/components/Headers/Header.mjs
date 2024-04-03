import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FadingView } from '../Containers/FadingView.mjs';

/** 
 * @typedef {{
  * leftComp: React.ReactNode,
  * centerComp: React.ReactNode,
  * rightComp: React.ReactNode,
  * headerStyle: StyleProp<ViewStyle>,
  * headerLeftStyle: StyleProp<ViewStyle>,
  * headerCenterStyle: StyleProp<ViewStyle>,
  * headerRightStyle: StyleProp<ViewStyle>,
  * isLeftFadedIn: boolean,
  * isCenterFadedIn: boolean,
  * isRightFadedIn: boolean,
  * isBottomBorder: boolean,
  * isIOSTopSafeIgnored: boolean,
  * borderColor: String, 
  * borderWidth: number, 
  * SurfaceComponent: React.ReactNode,
 * }} HeaderProps
*/

/**
 * 
 * @param {HeaderProps} param0 
 * @returns {React.JSX.Element}
 */
export const Header = ({
  showNavBar = 1,
  headerStyle,
  leftComp = null,
  headerLeftStyle,
  isLeftFadedIn = false,
  centerComp = null,
  headerCenterStyle,
  isCenterFadedIn = true,
  rightComp = null,
  headerRightStyle,
  isRightFadedIn = false,
  isBottomBorder = false,
  // isIOSTopSafeIgnored = false,
  borderColor,
  borderWidth,
  SurfaceComponent,
}) => {
  const dimensions = useWindowDimensions();

  const headerCenterExists = !!centerComp;
  const { centerWidth, minSideHeaderWidth } = useMemo(() => {
    const _centerWidth = headerCenterExists ? 0.4 * dimensions.width : 0;
    const _minSideHeaderWidth = (dimensions.width - _centerWidth) / 2;

    return { centerWidth: _centerWidth, minSideHeaderWidth: _minSideHeaderWidth };
  }, [headerCenterExists, dimensions]);

  const noHeaderLeftRight = !leftComp && !rightComp;

  return (
    <View>
      {SurfaceComponent && SurfaceComponent({ showNavBar })}

      <View style={[styles.container, headerStyle, 
        /* !isIOSTopSafeIgnored && { paddingTop: top } */
        ]}>
        {isLeftFadedIn ? (
          <FadingView
            opacity={showNavBar}
            style={[
              styles.leftContainer,
              headerLeftStyle,
              noHeaderLeftRight && styles.noFlex,
              { width: minSideHeaderWidth },
            ]}
          >
            {leftComp}
          </FadingView>
        ) : (
          <View
            style={[
              styles.leftContainer,
              headerLeftStyle,
              noHeaderLeftRight && styles.noFlex,
              { width: minSideHeaderWidth },
            ]}
          >
            {leftComp}
          </View>
        )}

        {centerComp &&
          (isCenterFadedIn ? (
            <FadingView
              opacity={showNavBar}
              style={[styles.centerContainer, headerCenterStyle, { minWidth: centerWidth }]}
            >
              {centerComp}
            </FadingView>
          ) : (
            <View style={[styles.centerContainer, headerCenterStyle, { width: centerWidth }]}>
              {centerComp}
            </View>
          ))}

        {isRightFadedIn ? (
          <FadingView
            opacity={showNavBar}
            style={[
              styles.rightContainer,
              headerRightStyle,
              noHeaderLeftRight && styles.noFlex,
              { width: minSideHeaderWidth },
            ]}
          >
            {rightComp}
          </FadingView>
        ) : (
          <View
            style={[
              styles.rightContainer,
              headerRightStyle,
              noHeaderLeftRight && styles.noFlex,
              { width: minSideHeaderWidth },
            ]}
          >
            {rightComp}
          </View>
        )}
      </View>

      {/* {!isBottomBorder && (
        <HeaderBottomBorder
          opacity={showNavBar}
          borderColor={borderColor}
          borderWidth={borderWidth}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  leftContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flexDirection: 'row-reverse',
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  noFlex: { display: 'none' },
});