import { Text, View } from "react-native";
import { Fonts } from '@/constants/theme';
import { useColorScheme } from 'react-native'

export default function Index() {
    const colorScheme = useColorScheme()

  return (
<View
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 25,
    backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
  }}
    >
      <Text style={{ fontFamily: Fonts.bold, fontSize: 25, color: colorScheme === 'dark' ? '#fff' : '#000', marginBottom: 10 }}>Good afternoon!</Text>
      <Text style={{ fontFamily: Fonts.regular, color: colorScheme === 'dark' ? '#fff' : '#000'  }}>Looking for something tasty?</Text>
    </View>
  );
}
