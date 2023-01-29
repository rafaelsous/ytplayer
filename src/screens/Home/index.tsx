import { useCallback, useState } from 'react'
import { ActivityIndicator, View, useWindowDimensions, Alert } from 'react-native'
import YoutubeIframe, {PLAYER_STATES  } from 'react-native-youtube-iframe'
import * as ScreenOrientation from 'expo-screen-orientation'

import { SCREEN_SPACE, styles, VIDEO_HEIGHT } from './styles'

export function Home() {
  const [isVideoReady, setIsVideoReady] = useState(false)

  const { width } = useWindowDimensions()
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2)

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
  }, [])

  const onChangeState = useCallback((state: string) => {
    if (state === PLAYER_STATES.ENDED)
    Alert.alert('E aí, curtiu?', 'Não deixe de curtir, comentar e se inscrever no canal')
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIframe
          videoId="8zBAw3_AXe8"
          width={VIDEO_WIDTH}
          height={isVideoReady ? VIDEO_HEIGHT : 0}
          onReady={() => setIsVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
          onChangeState={onChangeState}
        />
        {
          !isVideoReady && <ActivityIndicator color="red" />
        }
      </View>
    </View>
  )
}