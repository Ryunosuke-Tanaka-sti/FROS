import { TextSize } from '@/constant/TextSize';

type TitleProps = {
  text: string;
  size: keyof typeof TextSize;
};

export const Title = (props: TitleProps) => {
  const { text, size } = props;
  if (size === 'sm') return <h3 className={`${TextSize[size]} text-text`}>{text}</h3>;
  if (size === 'md') return <h2 className={`${TextSize[size]} text-text`}>{text}</h2>;
  return <h1 className={`${TextSize[size]} text-text`}>{text}</h1>;
};
