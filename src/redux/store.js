import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { authReducer } from './reducers/auth.reducer'
import { homeVideosReducer, relatedVideoReducer, searchedVideosReducer, subscriptionsChannelReducer } from './reducers/videos.reducer'
import { selectedVideoReducer, ChannelVideosReducer } from './reducers/videos.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentsList: commentListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: ChannelVideosReducer,

})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));


export default store;