import React, {PropTypes} from 'react'
import AutoComplete from 'material-ui/AutoComplete'

import subreddits from '../data/subreddits'


const SubRedditSearchBar = (props) => (
  <AutoComplete
    floatingLabelText="Type a subreddit name"
    filter={AutoComplete.fuzzyFilter}
    dataSource={subreddits}
    maxSearchResults={10}
  />
)

SubRedditSearchBar.propTypes = {
  subreddit: PropTypes.string
}

export default SubRedditSearchBar
