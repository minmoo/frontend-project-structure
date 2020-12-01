import {ActionType} from 'typesafe-actions';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import * as actions from './actions';

export type TNavItem = {
    id: string,
    title: string,
    url?: string,
    type?: string,
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    subItems?: TNavItem[]
};

export type TNavbar = {
    isOpen: boolean,
    items: TNavItem[]
};

export type TToolbar = {
    title: string
};

export type TLayout = {
    navbar: TNavbar
    toolbar: TToolbar
};

export type TLayoutAction = ActionType<typeof actions>;




