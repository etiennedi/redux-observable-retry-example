export const START_REQUEST = 'retry-example/startRequest';
export const RECEIVED = 'retry-example/received';
export const ERROR = 'retry-example/error';
export const ABORT_RETRY = 'retry-example/abortRetry';
export const REQUEST_STARTED = 'retry-example/REQUEST_STARTED';
export const RETRY_STARTED = 'retry-example/RETRY_STARTED';
export const RETRY_TIMER_UPDATED = 'retry-example/RETRY_TIMER_UPDATED';


export default function reducer(state = { data: [], attempt: 0 }, action) {
  switch (action.type) {

    case REQUEST_STARTED: {
      return {
        ...state,
        fetching: true,
        data: [],
        attempt: state.attempt + 1,
      };
    }

    case RETRY_STARTED: {
      return {
        ...state,
        timeLeft: action.timeLeft,
        status: 'trying',
      };
    }

    case RETRY_TIMER_UPDATED: {
      return {
        ...state,
        timeLeft: action.timeLeft,
      };
    }

    case RECEIVED: {
      return {
        ...state,
        fetching: false,
        status: 'success',
        data: [
          ...action.payload,
        ],
      };
    }

    case ABORT_RETRY: {
      return {
        ...state,
        fetching: false,
        timeLeft: null,
        status: 'aborted',
      };
    }

    default:
      return state;
  }
}

export const startRequest = () => ({
  type: START_REQUEST,
});

export const requestStarted = () => ({
  type: REQUEST_STARTED,
});

export const retryStarted = () => ({
  type: RETRY_STARTED,
  timeLeft: 5,
});

export const retryTimerUpdated = timeLeft => ({
  type: RETRY_TIMER_UPDATED,
  timeLeft,
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
