import { INIT_STATE } from '../../constants';
import { getType, hideSideBar, showSideBar } from '../actions';

export default function sidebar(state = INIT_STATE.sidebar, action) {
    switch (action.type) {
        case getType(showSideBar):
            return {
                isShow: true,
            };
        case getType(hideSideBar):
            return {
                isShow: false,
            };
        default:
            return state;
    }
}