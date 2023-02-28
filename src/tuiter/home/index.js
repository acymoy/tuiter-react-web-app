import React from "react";
import tweets from "../tweet/tweets.json";
import Tweet from "../tweet";

const HomeComponent = () => {
    return (
        <div>
            {
                tweets.map(x => <Tweet post={x} key = {x._id}/>)
            }
        </div>
    )
}
export default HomeComponent;