import * as React from 'react';
import { MuiThemeProvider } from "@material-ui/core";
import { themeCreator} from './themes/base';

export const ThemeContext = React.createContext((themeName:string):void => {});

const CustomThemeProvider: React.FC = (props) => {
    //read current theme from localstorage or maybe from an api
    const curThemeName = localStorage.getItem("appTheme") || "indigoTheme";

    //State to hold the selected theme name
    const [themeName, _setThemeName] = React.useState(curThemeName);

    //Get the theme object by theme name
    const theme = themeCreator(themeName);

    const setThemeName = (themeName: string): void => {
        localStorage.setItem("appTheme", themeName);
        _setThemeName(themeName);
    }

    //TODO CONTEXT로 전달해줄 필요가 없다 -> 그냥 hook을 사용해서 하자
    return (
        <ThemeContext.Provider value={setThemeName}>
            <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
        </ThemeContext.Provider>
    )
};

export default CustomThemeProvider;
