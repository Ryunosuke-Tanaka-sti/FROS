import { ButtonColorStyles } from '@/constant/ButtonColor';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  color?: keyof typeof ButtonColorStyles;
};

export const Button = ({ text, type = 'button', onClick, color = 'primary' }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`${ButtonColorStyles[color]}`}>
      {text}
    </button>
  );
};
