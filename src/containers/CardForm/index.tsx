import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TextInput, Button } from 'components';
import { ICardState } from 'reducers/card';
import { applyCard, ApplyCardActionType } from 'actions/card';
import { ICardPayload } from 'types';

import * as S from './styles';

interface IMappedActionsProps {
  applyCard: ApplyCardActionType;
}

type Props = ICardState & IMappedActionsProps;

const CARD_NUMBER_LENGTH = 19;
const formInitialState: ICardPayload = { number: '', code: '' };
const formErrorsInitialState = { number: false, code: false };
const digitsRegex = /^[\d]*$/;

const CardFormContainer: React.FC<Props> = props => {
  const { loading, error } = props;

  const [values, setValues] = useState<ICardPayload>(formInitialState);
  const [errors, setErrors] = useState(formErrorsInitialState);

  const changeValue = (value: string, name: string) => {
    if (!digitsRegex.test(value)) return;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { number, code } = values;

    const numberValid = number.length === CARD_NUMBER_LENGTH;
    const codeValid = code.length > 0;

    setErrors({ number: !numberValid, code: !codeValid });

    return numberValid && codeValid;
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      props.applyCard(values);

      setValues(formInitialState);
      setErrors(formErrorsInitialState);
    }
  };

  return (
    <S.Form onSubmit={submitForm}>
      <S.CardInputsWrapper>
        <TextInput
          type="tel"
          name="number"
          value={values.number}
          error={errors.number}
          onChange={changeValue}
          placeholder="Gift Card Number"
          maxLength={CARD_NUMBER_LENGTH}
        />
        <TextInput
          type="tel"
          name="code"
          value={values.code}
          error={errors.code}
          onChange={changeValue}
          placeholder="Control Code"
        />
      </S.CardInputsWrapper>
      <S.Footer>
        <Button type="submit" loading={loading}>Apply</Button>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Footer>
    </S.Form>
  );
};

const mapStateToProps = (state: ICardState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => ({
  applyCard: (card: ICardPayload) => dispatch(applyCard(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardFormContainer);
