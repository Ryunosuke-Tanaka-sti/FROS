type MenuItemProps = {
  text: string;
  onClick: () => void;
  active?: boolean;
};

export const MenuItem = (props: MenuItemProps) => {
  const { onClick, text, active } = props;
  const activeStyle = active ? 'bg-slate-200' : '';

  return (
    <li
      onClick={onClick}
      className={
        `flex h-14 flex-row items-center px-2 hover:cursor-pointer hover:bg-slate-200 ` +
        activeStyle
      }
    >
      {text}
    </li>
  );
};
