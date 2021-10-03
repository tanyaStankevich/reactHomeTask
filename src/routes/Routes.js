

import {Switch, Route, Link} from 'react-router-dom';
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Chat from "./Chat/Chat";


export default function Router() {
return (
            
        <Switch>
            <Route exact path="/" component={Home}>
               
        </Route>
        
            <Route exact path="/Profile.js" component={Profile}>
     
        </Route>
        
            <Route exact path="/Chat.js" component={Chat}>
               
        </Route>
         <Route exact path="/Chat.js" component={Chat}>
               
            </Route>
        </Switch>

);
}
