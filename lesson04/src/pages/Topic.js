import React from "react";
import TopMenuBar from "../components/Menu"
import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";

function TopicPage() {
    let match = useRouteMatch();

    return (
        <div>
            <TopMenuBar/>
            <h2>Topics</h2>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );

}

function Topic() {
    let {topicId} = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

export default TopicPage;