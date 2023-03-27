import React from "react";
import tweets from "../tuits/tweets.json"
import Tweet from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <Tweet/>
        </div>
    )
}
export default HomeComponent;