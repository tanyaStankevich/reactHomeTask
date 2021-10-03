

import {Switch, Route, Link} from 'react-router-dom';



export default function RouterChat() {
return (
            
        <Switch>
            <Route exact path="/" component={Home}>
               
        </Route>
        
            <Route exact path="/Profile.js" component={Profile}>
     
        </Route>
        
            <Route exact path="/Chat.js" component={Chat}>
               
            </Route>
        </Switch>

);
}
