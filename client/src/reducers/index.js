import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostsReducer from './reducer_posts';

import TrailsReducer from './reducer_trails';
import TrailReducer from './reducer_trail';
import CoordinatesReducer from './reducer_coordinates';


const rootReducer = combineReducers({
  posts: PostsReducer,
  trails: TrailsReducer,
  trail: TrailReducer,
  coordinates: CoordinatesReducer,
  form: formReducer
});

export default rootReducer;