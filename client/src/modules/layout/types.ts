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
  isFix: boolean;
  isOpen: boolean;
  items: TNavItem[];
};

export type TToolbar = {
  title: string;
};

type TLayout = {
  navbar: TNavbar;
  toolbar: TToolbar;
};

export default TLayout;
