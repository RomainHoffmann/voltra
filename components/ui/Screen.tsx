import { cn } from '@/utils/cn';
import { type PropsWithChildren } from 'react';
import { ScrollView, View, type ScrollViewProps, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenProps = PropsWithChildren & {
  scroll?: boolean;
  className?: string;
  contentClassName?: string;
};

export function Screen({
  children,
  scroll = false,
  className,
  contentClassName,
}: ScreenProps) {
  const insets = useSafeAreaInsets();

  const containerStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  if (scroll) {
    return (
      <ScrollView
        className={cn('flex-1 bg-background', className)}
        contentContainerStyle={containerStyle}
        contentContainerClassName={cn('flex-grow px-5 py-6', contentClassName)}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    );
  }

  return (
    <View
      className={cn('flex-1 bg-background px-5 py-6', className)}
      style={containerStyle}>
      {children}
    </View>
  );
}

export type { ScreenProps, ScrollViewProps, ViewProps };
