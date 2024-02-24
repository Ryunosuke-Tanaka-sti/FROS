import { Children } from 'react';

type UtilityMenuProps = {
  children: React.ReactNode;
};

export const UtilityMenu = ({ children }: UtilityMenuProps) => {
  return (
    <ul className="flex w-32 flex-col gap-2 ">
      {Children.map(children, (child) => {
        return <>{child}</>;
      })}
    </ul>
  );
};
