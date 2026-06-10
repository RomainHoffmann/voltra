import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#0A0A0B' },
        headerTintColor: '#FAFAFA',
        headerTitleStyle: { fontWeight: '600' },
        contentStyle: { backgroundColor: '#0A0A0B' },
      }}>
      <Stack.Screen name="programs/index" options={{ title: 'Programmes' }} />
    </Stack>
  );
}
