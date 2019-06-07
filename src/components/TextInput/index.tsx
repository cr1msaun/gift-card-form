import React, { ChangeEvent } from 'react';

import * as S from './styles';

interface IProps {
  name: string;
  type?: string;
  value: string;
  error?: boolean;
  maxLength?: number;
  placeholder?: string;
  onChange: (value: string, name: string) => void;
}

const TextInput: React.FC<IProps> = props => {
  const {
    name,
    value,
    onChange,
    type = 'text',
    error = false,
    placeholder = '',
    ...rest
  } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value, name);
  };

  return (
    <S.Input
      type={type}
      error={error}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      {...rest}
    />
  );
};

export default TextInput;
