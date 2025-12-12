import { Text, View } from "react-native";
import { Fonts } from '@/constants/theme';
import { useColorScheme } from 'react-native';
import ImageCarousel from '@/components/ImageCarousel';

export default function Index() {
    const colorScheme = useColorScheme()

  return (
<View
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
  }}
    >
      <Text style={{ fontFamily: Fonts.bold, fontSize: 25, color: colorScheme === 'dark' ? '#fff' : '#000', marginBottom: 10, paddingLeft: 25, }}>Good afternoon!</Text>
      <Text style={{ fontFamily: Fonts.regular, color: colorScheme === 'dark' ? '#fff' : '#000', paddingLeft: 25,  }}>Looking for something tasty?</Text>
    <ImageCarousel />
    </View>
  );
}
