import {REQUEST_POSTS, RECEIVE_POSTS, SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT} from '../constants/ActionTypes'


export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}
