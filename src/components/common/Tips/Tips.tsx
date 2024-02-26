type TipsProps = {
  text: string;
  onClick?: () => void;
};

export const Tips = (props: TipsProps) => {
  const { text, onClick } = props;
  return (
    <span onClick={onClick} className="inline-flex rounded-md border px-4 py-1 text-xs">
      {text}
    </span>
  );
};
