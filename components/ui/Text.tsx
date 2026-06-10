import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { cn } from '@/utils/cn';

type TextVariant = 'title' | 'subtitle' | 'body' | 'caption' | 'label';

type TextProps = RNTextProps & {
  variant?: TextVariant;
  className?: string;
};

const variantClasses: Record<TextVariant, string> = {
  title: 'text-3xl font-bold text-foreground',
  subtitle: 'text-xl font-semibold text-foreground',
  body: 'text-base text-foreground',
  caption: 'text-sm text-muted',
  label: 'text-sm font-medium text-muted uppercase tracking-wide',
};

export function Text({ variant = 'body', className, ...props }: TextProps) {
  return <RNText className={cn(variantClasses[variant], className)} {...props} />;
}
