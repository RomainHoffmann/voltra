import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Introuvable' }} />
      <Screen contentClassName="items-center justify-center gap-4">
        <Text variant="title">Page introuvable</Text>
        <Text variant="caption" className="text-center">
          Cet écran n&apos;existe pas encore.
        </Text>
        <Link href="/" asChild>
          <Button variant="secondary">Retour à l&apos;accueil</Button>
        </Link>
      </Screen>
    </>
  );
}
