import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/components/useColorScheme';
import { View, Text } from '@/components/Themed';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';


// themes.js
export const CustomTheme:Theme = {
  ...DefaultTheme, // Puedes extender el tema por defecto si es necesario
  colors: {
    primary: '#ffffff',
    background: '#ffffff',
    card: '#0d5fc0',
    text: '#ffffff',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
    // Personaliza otros colores según sea necesario
  },
};

// También puedes definir un tema oscuro personalizado
export const CustomDarkTheme:Theme = {
  ...DarkTheme,
  colors: {
    primary: 'rgb(10, 132, 255)',
    background: 'rgb(1, 1, 1)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
    // Personaliza otros colores según sea necesario
  },
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}


function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : CustomTheme}>
      <Stack
       screenOptions={{
        headerTitle:"",
        headerLeft: () => (
        <View className=' py-3 bg-transparent flex-row gap-2 justify-center items-center'>
          <Feather name="database" size={35} color="white" />
          <Text className=' text-2xl text-white font-bold' ><Text className='text-green-500'>DB</Text>Shield</Text>
        </View>),
        headerRight: () => (
          <View className='bg-transparent flex-row justify-center items-center gap-4'>
            <Ionicons name="notifications-outline" size={30} color="white" />
            <Octicons name="three-bars" size={30} color="white" />
          </View>
        )
       }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
