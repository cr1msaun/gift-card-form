import React, { ButtonHTMLAttributes } from 'react';
import { Spinner } from 'components';

import * as S from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IProps> = props => {
  const {
    onClick,
    children,
    type = 'button',
    loading = false,
  } = props;

  return (
    <S.Button
      type={type}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <Spinner size="15" /> : children}
    </S.Button>
  );
};

export default Button;
