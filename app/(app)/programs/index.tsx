import { Link } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';

export default function ProgramsScreen() {
  return (
    <Screen scroll contentClassName="gap-6">
      <View className="gap-2">
        <Text variant="subtitle">Tes programmes</Text>
        <Text variant="caption">
          La gestion des programmes sera implémentée au Prompt 5.
        </Text>
      </View>

      <View className="rounded-2xl border border-dashed border-border bg-surface p-6">
        <Text className="text-center text-muted">
          Aucun programme pour le moment. Cet écran servira de liste principale après connexion.
        </Text>
      </View>

      <Link href="/(auth)/login" asChild>
        <Button variant="secondary">Retour à la connexion (dev)</Button>
      </Link>
    </Screen>
  );
}
