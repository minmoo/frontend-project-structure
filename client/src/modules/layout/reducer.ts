import {createReducer} from 'typesafe-actions';
import produce from 'immer';
import {TLayout, TLayoutAction} from './types';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatIcon from '@material-ui/icons/Chat';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { NAVBAR_TOGGLE } from './actions';

const initailState:TLayout = {
    toolbar: {
        title: "Title"
    },
    navbar:{
        isOpen: false,
        items:[
            {
                id: 'dashboard',
                title: 'Dashboard',
                url: '/home/dashboard',
                Icon: DashboardIcon
            },
            {
                id: 'websocket',
                title: 'Websocket',
                url: '/home/websocket',
                Icon: ChatIcon,
            },
            {
                id: 'pages',
                title: 'Pages',
                Icon: LibraryBooksIcon,
                subItems:[
                    {
                        id: 'pages1-1',
                        title: 'Pages1-1',
                    },
                    {
                        id: 'pages1-2',
                        title: 'Pages1-2',
                        subItems: [
                                {
                                    id: 'pages2-1',
                                    title: 'Pages2-1',
                                },
                                {
                                    id: 'pages2-2',
                                    title: 'Pages2-2',
                                },
                            ],
                    },
                ]
            }
        ]
    }
};

const layout = createReducer<TLayout, TLayoutAction>(initailState, {
    [NAVBAR_TOGGLE]: (state, action) => 
        produce(state, (draft) => {
            draft.navbar.isOpen = !draft.navbar.isOpen
        }),
});

export default layout;