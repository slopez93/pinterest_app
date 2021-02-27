export type IState = {
  [key: string]: any;
};

export interface IActionCreator {
  type: string;
  payload: any;
}
