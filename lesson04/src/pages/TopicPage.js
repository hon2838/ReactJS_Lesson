import React from "react";
import TopMenuBar from "../components/Menu"
import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";

function TopicPageLanding() {
    let match = useRouteMatch();

    return (
        <div>
            <TopMenuBar/>
            <h2>Topics</h2>
            <ul>
                <li><a href="/Topics/100">100</a></li>
                <li><a href="/Topics/10">10</a></li>

            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <TopicPage/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>

        </div>
    );

}

function TopicPage() {
    let {topicId} = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

export default TopicPageLanding;