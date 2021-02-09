import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type TNavItem = {
  id: string;
  title: string;
  url?: string;
  type?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
  subItems?: TNavItem[];
};

export type TNavbar = {
  isOpen: boolean;
  items: TNavItem[];
};

export type TToolbar = {
  title: string;
};

export type TLayout = {
  breakWidth: number;
  navbar: TNavbar;
  toolbar: TToolbar;
};
