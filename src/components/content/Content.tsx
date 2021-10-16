import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import { Admin } from './abmin/Admin';
import {Bin} from './bin/Bin';
import { Login } from './login/Login';
import {Price} from "./price/Price";

const content = {
    minHeight: 'calc(100vh - 100px)',
    padding: '20px 0',
    margin: '0 -20px'
}

export const Content: React.FC = () => {

    return (
        <div style={content}>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={'/price'}/>}/>
                <Route path={'/price'} component={Price}/>
                <Route path={'/bin'} component={Bin}/>
                <Route path={'/admin'} component={Admin}/>
                <Route path={'/login'} component={Login}/>
            </Switch>
        </div>
    )
}