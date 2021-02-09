import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TLayout} from './types';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatIcon from '@material-ui/icons/Chat';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

const name = "layout";

const initialState: TLayout = {
    breakWidth: 200,
    toolbar: {
      title: 'Title',
    },
    navbar: {
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
      navbarToggle(state){
          state.navbar.isOpen = !state.navbar.isOpen;
      }
  };

  const layoutSlice = createSlice({
    name,
    initialState,
    reducers
  });

  export default layoutSlice.reducer;
  export const actions = layoutSlice.actions;