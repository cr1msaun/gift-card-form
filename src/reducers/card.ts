import { ICardAction } from 'actions/card';
import ActionTypes from 'constants/card';
import { IAppliedCard } from 'types';

export interface ICardState {
  loading: boolean;
  card?: IAppliedCard,
  error: string | null;
}

type CardReducerType = (state: ICardState | undefined, action: ICardAction) => ICardState;

const initialState = {
  error: null,
  loading: false,
};

const cardReducer: CardReducerType = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.APPLY_CARD:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case ActionTypes.APPLY_CARD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        card: action.payload,
      };
    case ActionTypes.APPLY_CARD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default cardReducer;
