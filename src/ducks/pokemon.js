export const MOUNTED = 'workshop/pokemon/mounted';
export const RECEIVED = 'workshop/pokemon/received';
export const ERROR = 'workshop/pokemon/error';

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

export const mounted = () => ({
  type: MOUNTED,
});

export const error = message => ({
  type: ERROR,
  message,
});

export const received = payload => ({
  type: RECEIVED,
  payload,
});
