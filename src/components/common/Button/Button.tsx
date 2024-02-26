import { ButtonColorStyles } from '@/constant/ButtonColor';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  color?: keyof typeof ButtonColorStyles;
};

export const Button = ({ text, type = 'button', onClick, color = 'primary' }: ButtonProps) => {
  const ButtonStyle = 'flex items-center justify-center w-full h-10 text-white rounded-md';
  return (
    <button onClick={onClick} type={type} className={`${ButtonStyle} ${ButtonColorStyles[color]}`}>
      {text}
    </button>
  );
};
