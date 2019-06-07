import React from 'react';
import { IAppliedCard } from 'types';

import * as S from './styles';

interface IProps {
  card: IAppliedCard;
}

const AppliedCard: React.FC<IProps> = props => {
  const {
    card: { title, discount, number },
  } = props;

  return (
    <S.Wrapper>
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Number>**** **** **** **** {number.substr(-3)}</S.Number>
      </S.Details>
      <S.Discount>-€{discount}</S.Discount>
    </S.Wrapper>
  );
};

export default AppliedCard;
