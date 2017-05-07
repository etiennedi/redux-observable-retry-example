# A redux observable showing how to do retries

## How to satisfy your product owner

Image your product owner would list the following Acceptance Criteria:

- When an API request fails, the app will retry
- Between each retry there is a 5 second delay
- If a new request is started while a request or delay is running, the old request must be aborted
- During a 5 second waiting period the user must be informed every second about when the next retry will occur
- When the request finally succeds, all retrying must stop at once

### How many story points would you estimate this story?

I'd say about a 3 ... at the maximum.

In fact this becomes quite easy with [redux-observable](https://redux-observable.js.org) and [RxJS 5](https://github.com/ReactiveX/rxjs). Check out this example.
