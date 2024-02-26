import React from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type FormInputSkillProps<T extends FieldValues> = UseControllerProps<T> & {
  removeAction: () => void;
};
export const FormInputSkill = <T extends FieldValues>(props: FormInputSkillProps<T>) => {
  const { name, control, rules, removeAction } = props;
  const { field } = useController<T>({ name, control, rules });
  const onClickLevel = (level: number) => {
    field.onChange(level);
  };
  return (
    <div className="flex flex-row gap-4">
      <Select currentLevel={field.value}>
        <SelectItem level={1} onClick={onClickLevel} />
        <SelectItem level={2} onClick={onClickLevel} />
        <SelectItem level={3} onClick={onClickLevel} />
        <SelectItem level={4} onClick={onClickLevel} />
        <SelectItem level={5} onClick={onClickLevel} />
      </Select>
      <button type="button" onClick={removeAction}>
        削除
      </button>
    </div>
  );
};
type SelectProps = {
  children: React.ReactNode;
  currentLevel: number;
};
const Select = (props: SelectProps) => {
  const { children, currentLevel } = props;
  return (
    <ul className="flex w-40 flex-row items-center justify-around">
      {React.Children.map(children, (child, index) => {
        if (currentLevel === index + 1)
          return <li className="size-8 rounded-full bg-blue-500 hover:cursor-pointer">{child}</li>;
        return <li className="size-8 rounded-full hover:cursor-pointer">{child}</li>;
      })}
    </ul>
  );
};
type SelectItemProps = {
  level: number;
  onClick: (level: number) => void;
};
const SelectItem = (props: SelectItemProps) => {
  const { level, onClick } = props;
  return (
    <div className="flex size-full items-center justify-center " onClick={() => onClick(level)}>
      {level}
    </div>
  );
};
