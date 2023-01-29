import { StyleSheet } from 'react-native'

export const VIDEO_HEIGHT = 180
export const SCREEN_SPACE = 24

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A09',
    padding: SCREEN_SPACE,
  },
  player: {
    width: '100%',
    height: VIDEO_HEIGHT,
    marginTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
  }
})