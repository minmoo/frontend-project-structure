import {makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useLayoutStyles = makeStyles((theme:Theme) => {
    const drawerWidth = theme.spacing(30);
    
    return createStyles({
        root: {
            display: "flex",
        },
        drawer: {
            [theme.breakpoints.up('sm')]:{
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        appBar: {
            [theme.breakpoints.up('sm')]:{
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                backgroundColor: theme.palette.primary,
            }
        },
        toolBar: theme.mixins.toolbar, //content to be below app bar
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]:{
                display:'none',
            },
        },
        title: {
            flexGrow: 1,
        },
    });
});

export default useLayoutStyles;