type TipsProps = {
  text: string;
  onClick: () => void;
};

export const Tips = (props: TipsProps) => {
  const { text, onClick } = props;
  return (
    <span onClick={onClick} className="mx-4 my-2 flex rounded-md border text-xs">
      {text}
    </span>
  );
};
