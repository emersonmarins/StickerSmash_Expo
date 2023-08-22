import { View, Image } from 'react-native';
import Animated from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource }) {
const AnimatedImage = Animated.createAnimatedComponent(Image)

  return (
    <View style={{ top: -350 }}>
      <AnimatedImage
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
