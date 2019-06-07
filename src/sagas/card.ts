import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as api from 'api/card';
import * as actions from 'actions/card';
import actionTypes from 'constants/card';

function* applyCard(action: actions.ICardAction) {
  try {
    const { number, code } = action.payload;

    const appliedCards = yield call(api.applyCard, number, code);

    yield delay(1000);

    if (appliedCards.length) {
     yield put(actions.applyCardSuccess(appliedCards[0]));
    } else {
      yield put(actions.applyCardError('Card not found'));
    }
  } catch (error) {
    yield put(actions.applyCardError(error.message));
  }
}

export default function* cardSaga() {
  yield takeLatest(actionTypes.APPLY_CARD, applyCard);
}
