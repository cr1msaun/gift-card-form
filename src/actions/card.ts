import { Action } from 'redux';
import { ICardPayload, IAppliedCard } from 'types';
import ActionTypes from 'constants/card';

export interface ICardAction extends Action<string> {
  payload: any;
}

interface IApplyCardAction extends ICardAction {
  payload: ICardPayload;
}

interface IApplyCardSuccessAction extends ICardAction {
  payload: IAppliedCard;
}

interface IApplyCardErrorAction extends ICardAction {
  payload: string;
}

export type ApplyCardActionType = (card: ICardPayload) => IApplyCardAction;
export type ApplyCardSuccessActionType = (appliedCard: IAppliedCard) => IApplyCardSuccessAction;
export type ApplyCardSuccessErrorType = (error: string) => IApplyCardErrorAction;

export const applyCard: ApplyCardActionType = card => ({
  type: ActionTypes.APPLY_CARD,
  payload: card,
});

export const applyCardSuccess: ApplyCardSuccessActionType = appliedCard => ({
  type: ActionTypes.APPLY_CARD_SUCCESS,
  payload: appliedCard,
});

export const applyCardError: ApplyCardSuccessErrorType = error => ({
  type: ActionTypes.APPLY_CARD_ERROR,
  payload: error,
});
