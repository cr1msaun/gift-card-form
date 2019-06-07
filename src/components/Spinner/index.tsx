import React from 'react';
import colors from 'styles/colors';

import * as S from './styles';

interface IProps {
  size?: string;
  color?: string;
}

const Spinner: React.FC<IProps> = props => {
  const {
    size = '32px',
    color = colors.WHITE,
  } = props;

  return (
    <S.Wrapper
      width={size}
      height={size}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <S.Circle
        fill="transparent"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </S.Wrapper>
  );
}

export default Spinner;
