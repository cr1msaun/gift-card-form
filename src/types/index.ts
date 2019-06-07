export interface ICardPayload {
  number: string;
  code: string;
}

export interface IAppliedCard extends ICardPayload {
  id: number;
  title: string;
  discount: number;
}
