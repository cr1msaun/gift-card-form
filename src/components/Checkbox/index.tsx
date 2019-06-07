import React, { useMemo } from 'react';

import * as S from './styles';

interface IProps {
  onChange: () => void;
  checked?: boolean;
}

const Checkbox: React.FC<IProps> = props => {
  const { children, onChange, checked = false } = props;
  const id = useMemo(() => `id${Math.random()}`, []);

  return (
    <S.Wrapper>
      <S.Checkbox onChange={onChange} checked={checked} id={id} />
      <S.FakeCheckbox />
      <S.Label htmlFor={id}>{children}</S.Label>
    </S.Wrapper>
  );
};

export default Checkbox;
