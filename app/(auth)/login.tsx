import { Link } from 'expo-router';
import { View } from 'react-native';

import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';

export default function LoginScreen() {
  return (
    <AuthLayout
      title="Connexion"
      subtitle="Application de musculation guidée, série par série.">
      <View className="rounded-2xl border border-border bg-surface p-5">
        <Text variant="caption">
          L&apos;écran de connexion sera implémenté au Prompt 2 (Supabase Auth).
        </Text>
      </View>

      <Button disabled>Se connecter</Button>

      <Link href="/(auth)/register" asChild>
        <Button variant="ghost">Créer un compte</Button>
      </Link>

      <Link href="/(app)/programs" asChild>
        <Button variant="secondary">Voir l&apos;app (dev)</Button>
      </Link>
    </AuthLayout>
  );
}
