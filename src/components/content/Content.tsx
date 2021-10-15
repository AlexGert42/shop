import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Bin} from './bin/Bin';
import {Price} from "./price/Price";

const content = {
    minHeight: 'calc(100vh - 100px)',
    padding: '20px 0',
    margin: '0 -20px'
    // backgroundColor: '#f1f1f1'
}

export const Content: React.FC = () => {

    return (
        <div style={content}>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={'/price'}/>}/>
                <Route path={'/price'} component={Price}/>
                <Route path={'/bin'} component={Bin}/>
            </Switch>
        </div>
    )
}