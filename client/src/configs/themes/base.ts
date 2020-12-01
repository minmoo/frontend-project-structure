import {Theme} from '@material-ui/core';
import {indigoTheme} from "./indigo";
import {darkTheme} from "./dark";

export function themeCreator(theme:string): Theme {
    return themeMap[theme];
}

const themeMap: { [key:string]:Theme} = {
    indigoTheme,
    darkTheme
};