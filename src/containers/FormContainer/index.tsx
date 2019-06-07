import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ICardState } from 'reducers/card';
import { CardForm } from 'containers';
import { AppliedCard, Checkbox } from 'components';
import { IAppliedCard } from 'types';

import * as S from './styles';

type IMappedStateProps = {
  card?: IAppliedCard;
};

const FormContainer: React.FC<IMappedStateProps> = props => {
  const { card } = props;

  const [cardFormVisible, setCardFormVisibility] = useState(false);
  const toggleCardFormVisibility = () => setCardFormVisibility(!cardFormVisible);

  return (
    <S.Wrapper>
      <S.Title>Gift cards</S.Title>
      <Checkbox
        checked={cardFormVisible}
        onChange={toggleCardFormVisibility}
      >
        Do you have a gift card?
      </Checkbox>

      {cardFormVisible && (
        <>
          <S.Description>
            Please enter the 19-digit number and code from your gift card below.
          </S.Description>
          {!!card && <AppliedCard card={card} />}
          <CardForm />
        </>
      )}
    </S.Wrapper>
  );
};

const mapStateToProps = (state: ICardState) => ({
  card: state.card,
});

export default connect(mapStateToProps)(FormContainer);
