import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { forwardRef, ReactElement, useState } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { TNavItem } from '../../../modules/layout/types';

type TStyleProps = {
  bgColor: string;
};
const useStyles = makeStyles<Theme, TStyleProps>((theme) =>
  createStyles({
    items: {
      '&.active': {
        'background': 'rgba(0,0,0,0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    itemIcon: (props) => ({
      color: props.bgColor,
    }),
  }),
);

export default function NavItem(props: TNavItem): ReactElement | null {
  const { title, url, Icon, subItems } = props;
  const classes = useStyles({ bgColor: 'green' });

  const isExpandable = subItems && subItems.length > 0;
  const [open, setOpen] = useState(false);

  const ListChildren = (
    <>
      {!!Icon && (
        <ListItemIcon className={classes.itemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={title} inset={!Icon} />
      {isExpandable && !open && <ExpandMoreIcon />}
      {isExpandable && open && <ExpandLessIcon />}
    </>
  );

  const RootItem =
    !url || typeof url !== 'string' ? (
      <ListItem
        button
        className={classes.items}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {ListChildren}
      </ListItem>
    ) : (
      <ListItem
        button
        className={classes.items}
        component={forwardRef<HTMLAnchorElement, NavLinkProps>((props: NavLinkProps, ref) => (
          <NavLink exact {...props} innerRef={ref} />
        ))}
        to={url}
      >
        {ListChildren}
      </ListItem>
    );

  const SubItem = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {subItems.map((item) => (
          <NavItem {...item} key={item.id} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {RootItem}
      {SubItem}
    </>
  );
}
