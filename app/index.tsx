import { Redirect } from 'expo-router';

// Auth routing will be wired in Prompt 2.
export default function IndexScreen() {
  return <Redirect href="/(auth)/login" />;
}
