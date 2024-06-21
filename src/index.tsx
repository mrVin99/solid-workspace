import {render} from 'solid-js/web';
import {Route, Router} from "@solidjs/router";
import Layout from "./layout";

import './index.css';

render(() => (
    <Router root={Layout}>
        <Route path={'/'} component={demoComponent}/>
    </Router>
), document.body);

function demoComponent(){
    return <></>
}