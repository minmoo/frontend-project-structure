import * as React from 'react';
import {makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemText, Divider, Collapse } from '@material-ui/core';
import { NavLink, NavLinkProps } from 'react-router-dom';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {TNavItem} from '../../../modules/layout/types';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        items: {
            '&.active':{
                background: 'rgba(0,0,0,0.08)',
                '& .MuiListItemIcon-root':{
                    color: '#fff',
                },
            },
        },
        itemIcon:{
            color: theme.palette.secondary.main,
        }
    })
)

export default function NavItem(props:TNavItem){
    const {id, title, url, type, Icon, subItems} = props;
    const classes = useStyles();

    const isExpandable = subItems && subItems.length > 0;
    const [open, setOpen] = React.useState(false);

    const ListChildren = (
        <>
            {!!Icon && (
                <ListItemIcon className={classes.itemIcon}>
                    <Icon />
                </ListItemIcon>
            )}
            <ListItemText primary={title} inset={!Icon}/>
            {isExpandable && !open && <ExpandMoreIcon/>}
            {isExpandable && open && <ExpandLessIcon/>}
        </>
    );

    
    const RootItem = (!url || typeof url !== "string")? (
        <ListItem button className={classes.items} onClick={() => {setOpen(!open)}}>
            {ListChildren}
        </ListItem>
    ) : (
        <ListItem button className={classes.items} 
            component={React.forwardRef((props:NavLinkProps, ref:any) => <NavLink exact {...props} innerRef={ref} />)}
            to={url}
        >
            {ListChildren}
        </ListItem>
    );

    const SubItem = isExpandable? (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Divider/>
            <List component="div" disablePadding>
                {subItems.map((item, index) => (
                    <NavItem {...item} key={item.id}/>
                ))}
            </List>
        </Collapse>
    ): null;

    return (
        <>
            {RootItem}
            {SubItem}
        </>
    )
};