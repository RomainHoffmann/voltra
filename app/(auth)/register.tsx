import { Link } from 'expo-router';
import { View } from 'react-native';

import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';

export default function RegisterScreen() {
  return (
    <AuthLayout
      title="Inscription"
      subtitle="Crée ton compte pour commencer à suivre tes programmes.">
      <View className="rounded-2xl border border-border bg-surface p-5">
        <Text variant="caption">
          L&apos;écran d&apos;inscription sera implémenté au Prompt 2 (Supabase Auth).
        </Text>
      </View>

      <Button disabled>S&apos;inscrire</Button>

      <Link href="/(auth)/login" asChild>
        <Button variant="ghost">Déjà un compte ? Se connecter</Button>
      </Link>
    </AuthLayout>
  );
}
