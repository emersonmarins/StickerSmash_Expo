import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const uriImage = selectedImage ? { uri: selectedImage} : placeholderImageSource;
  
  return (
    <Image source={uriImage} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
