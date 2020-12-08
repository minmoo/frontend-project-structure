import * as React from 'react';
import { Color } from '@material-ui/lab/Alert';

type TSnackbar = {
    open: boolean,
    message: string,
    type: Color
}

export const SnackbarValueContext = React.createContext({} as TSnackbar);
export const SnackbarSetContext = React.createContext((open:boolean, message?:string, type?:Color):void=> {});

// memo()는 HOC for functional components. 
// 같은 목적의 PureComponent
// 이전 props랑 다음 props를 비교하여 같으면 re-render하지 않는다.
type TSnackbarSetProps = {
    setSnackbar: React.Dispatch<React.SetStateAction<{
        open: boolean;
        message: string;
        type: Color;
    }>>,
    children: React.ReactNode
};

const SnackbarSetProvider = React.memo<TSnackbarSetProps>(({setSnackbar, children}) =>{
    const handleSnackbarSet = (open=false, message, type='success' as Color) =>{
        setSnackbar({
            message, type, open
        });
    };

    console.log('SnackbarSetProvider refresh');

    return (
        <SnackbarSetContext.Provider value={handleSnackbarSet}>
            {children}
        </SnackbarSetContext.Provider>
    )
});

export default function CustomSnackbarProvider({children}){
    const [snackbar, setSnackbar] = React.useState({
        open: false,
        message: '',
        type: '' as Color
    });

    console.log('CustomSnackbarProvider refresh');

    // use multiple contexts ( value and setting)
    // setting 함수를 변경하지 않고 snackbat object 값만 변경할 경우
    // value값이 변하지 않으면 context를 제공은 re-renders 하지 않는다. 
    
    //이 방법은 <CustomSnackbarProvider/> 가 updates되면
    //<SnackbarSetProvider/> 를 refresh할려고 하지만 props(setSnackbar함수)가 변하지 않으면 re-render을 하지 않는다.
    //Optimize

    //주의: context를 2개로 분리하였기 때문에 필요한 context만 호출해서 사용해야한다.
    return (
        <SnackbarValueContext.Provider value={snackbar}>        
            <SnackbarSetProvider setSnackbar={setSnackbar}>
                {children}
            </SnackbarSetProvider>
        </SnackbarValueContext.Provider>

    );
}
