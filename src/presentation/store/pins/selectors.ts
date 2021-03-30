import {IState} from '../types';

export const pinsSelector = (state: IState) => state.pins.pins;

export const pinDetailSelector = (state: IState) => state.pins.pinDetail;
