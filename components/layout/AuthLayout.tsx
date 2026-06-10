import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { type PropsWithChildren } from 'react';
import { View } from 'react-native';

type AuthLayoutProps = PropsWithChildren & {
  title: string;
  subtitle?: string;
};

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <Screen scroll className="bg-background" contentClassName="justify-center gap-8">
      <View className="gap-2">
        <Text variant="label">Voltra</Text>
        <Text variant="title">{title}</Text>
        {subtitle ? <Text variant="caption">{subtitle}</Text> : null}
      </View>
      <View className="gap-4">{children}</View>
    </Screen>
  );
}
