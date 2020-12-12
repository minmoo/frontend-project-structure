import * as React from 'react';
import {makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {List, Divider} from '@material-ui/core';
import NavItem from './NavItem';
import {TNavItem} from '../../../modules/layout';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        navItems: {
            width: '100%',
        },
        toolbar: theme.mixins.toolbar,
    }),
);

type TNavItemsProps = {
    items: TNavItem[]
}

export default function NavItems({items}:TNavItemsProps){
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List component="nav" className={classes.navItems}>
                {items.map((item, index) => (
                    <NavItem {...item} key={item.id} />
                ))}
            </List>
        </div>
    )

}
