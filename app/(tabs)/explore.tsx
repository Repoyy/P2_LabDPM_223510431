import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#000' }}
      headerImage={
        <Image
          source={require('@/assets/images/favicon.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Biodata Saya</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.label}>Nama:</ThemedText>
        <ThemedText style={styles.value}>Muhammad Revi Suryandi</ThemedText>

        <ThemedText style={styles.label}>Pekerjaan:</ThemedText>
        <ThemedText style={styles.value}>Mahasiswa</ThemedText>

        <ThemedText style={styles.label}>Lokasi:</ThemedText>
        <ThemedText style={styles.value}>Taluk Kuantan, Indonesia</ThemedText>

        <ThemedText style={styles.label}>Hobi:</ThemedText>
        <ThemedText style={styles.value}>Mancing</ThemedText>

        <ThemedText style={styles.label}>Tentang Saya:</ThemedText>
        <ThemedText style={styles.value}>
SAYA SUKA MANCING
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 50,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
});
