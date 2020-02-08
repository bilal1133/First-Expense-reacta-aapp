import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashbordPage from '../components/DashbordPage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import PageNotFound from '../components/PageNotFound.js'
import EditExpencePage from '../components/EditExpencePage'
import Header from '../components/Header';
const AppRouter =()=>(
    <BrowserRouter>
    <Header/>
                <Switch>
                <Route path="/" component={DashbordPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpencePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound} />
                </Switch>
    </BrowserRouter>

);

export default AppRouter;