import { createContext } from 'react';
import initialState from './initialstate';

const CommentContext = createContext(initialState);

export default CommentContext;