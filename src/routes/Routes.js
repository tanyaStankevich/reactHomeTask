

import {Switch, Route, Link} from 'react-router-dom';
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Chat from "./Chat/Chat";
import ListChat from '../ListChat';
import NotFound from './NotFound';
import { arrChat } from '../NameChat';
import Message from './Chat/routes/message';
export default function Router() {
return (
            
        <Switch>
            <Route exact path="/" component={Home}>
               
        </Route>
        
            <Route exact path="/Profile.js" component={Profile}>
     
        </Route>
        
            <Route exact path="/Chat.js" component={Chat}>
               
        </Route>
         <Route exact path="/Chat/routes/:arrChatName" component={Chat}>
               
        </Route>
        
        <Route path="*" component={NotFound}>
               
        </Route>
        
        </Switch>

);
}
