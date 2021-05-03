import { createContext } from 'react';
import { themes } from '../constants';

const ThemeContext = createContext(themes);

export default ThemeContext;