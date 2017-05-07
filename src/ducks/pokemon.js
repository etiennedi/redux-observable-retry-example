export const START_REQUEST = 'workshop/pokemon/startRequest';
export const RECEIVED = 'workshop/pokemon/received';
export const ERROR = 'workshop/pokemon/error';
export const ABORT_RETRY = 'workshop/pokemon/abortRetry';

export default function reducer(state = [], action) {
  switch (action.type) {

    case RECEIVED: {
      return [
        ...state,
        ...action.payload,
      ];
    }

    default:
      return state;
  }
}

export const startRequest = () => ({
  type: START_REQUEST,
});

export const abortRetry = () => ({
  type: ABORT_RETRY,
});

export const error = message => ({
  type: ERROR,
  message,
});

export const received = payload => ({
  type: RECEIVED,
  payload,
});
