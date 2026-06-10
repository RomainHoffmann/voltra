import { Text } from '@/components/ui/Text';
import { cn } from '@/utils/cn';
import { Pressable, type PressableProps } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

type ButtonProps = PressableProps & {
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent active:opacity-90',
  secondary: 'bg-surface-elevated border border-border active:opacity-90',
  ghost: 'bg-transparent active:opacity-70',
  danger: 'bg-danger active:opacity-90',
};

const variantTextClasses: Record<ButtonVariant, string> = {
  primary: 'text-accent-foreground',
  secondary: 'text-foreground',
  ghost: 'text-muted',
  danger: 'text-foreground',
};

export function Button({
  variant = 'primary',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      className={cn(
        'min-h-14 items-center justify-center rounded-2xl px-6',
        variantClasses[variant],
        disabled && 'opacity-40',
        className,
      )}
      {...props}>
      {typeof children === 'string' ? (
        <Text className={cn('text-base font-semibold', variantTextClasses[variant])}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
