import {createStore} from 'react-redux';
import guestList from './ducks/guestList';

export default createStore(guestList(reducer));