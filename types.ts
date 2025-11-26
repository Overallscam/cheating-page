export interface ButtonProps {
  label: string;
  onClick: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface HeaderProps {
  text: string;
  subtext?: string;
}