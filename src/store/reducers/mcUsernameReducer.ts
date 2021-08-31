import types from '../actions/types';

const { FETCH_MC_USERNAME } = types;

export default function (state = null, action: any) {
  switch (action.type) {
    case FETCH_MC_USERNAME:
      return action.payload || false;
    default:
      return state;
  }
}
