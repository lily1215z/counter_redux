
const INC = 'INC';
const SET = 'SET';
const RES = 'RES';
const STARTV = 'START-V';
const MAXV = 'MAX-V';

const initialState: stateType = {
    value: 0,
    startV: 1,
    maxV: 3,
    mistake: 'error'
}

export interface stateType {
    value: number,
    startV: number,
    maxV: number,
    mistake: string
}

enum actionType {
    INC = 'INC',
    SET = 'SET',
    RES = 'RES',
    STARTV = 'START-V',
    MAXV = 'MAX-V',
}

interface startAction {
    type: actionType.STARTV,
    // payload: ChangeEvent<HTMLInputElement>
    payload: any
}

interface maxAction {
    type: actionType.MAXV,
    payload: any
}

interface IncAction {
    type: actionType.INC
}

interface DecAction {
    type: actionType.SET
}

interface ResAction {
    type: actionType.RES
}

type GeneralActionType = IncAction | DecAction | ResAction | startAction | maxAction;

export const CounterReducer = (state = initialState, action: GeneralActionType): stateType => {
    switch (action.type) {
        case INC: {
            return {...state, value: state.value + 1};
        }
        case SET:
        case RES: {
            return {...state, value: state.value = state.startV};
        }
        case STARTV: {
            return {...state, startV: state.startV = action.payload}
        }
        case MAXV: {
            return {...state, maxV: state.maxV = action.payload}
        }
        default:
            return state;
    }
}

export const incAction = () => ({type: INC})
export const setAction = () => ({type: SET})
export const resAction = () => ({type: RES})
export const onChangeHandlerMaxAction = (payload: number) => ({type: 'MAX-V', payload})
export const onChangeHandlerStartAction = (payload: number) => ({type: 'START-V', payload})