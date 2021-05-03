import { createContext } from 'react';
import initialState from './initialstate';

const PostContext = createContext(initialState);

export default PostContext;