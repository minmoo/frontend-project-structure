import ChatIcon from '@material-ui/icons/Chat';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { createSlice } from '@reduxjs/toolkit';
import * as layoutTypes from './types';

const name = 'layout';

const initialState: layoutTypes.default = {
  toolbar: {
    title: 'Title',
  },
  navbar: {
    isMini: false,
    isOpen: false,
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        url: '/home/dashboard',
        Icon: DashboardIcon,
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
        subItems: [
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
        ],
      },
    ],
  },
};

const reducers = {
  navbarToggle(state) {
    state.navbar.isOpen = !state.navbar.isOpen;
  },
  navbarMini(state) {
    state.navbar.isMini = !state.navbar.isMini;
  },
};

const layoutSlice = createSlice({
  name,
  initialState,
  reducers,
});

export default layoutSlice.reducer;
export const actions = layoutSlice.actions;
