import WhoToFollowListItem from "./who-to-follow-list-item";
import React from "react";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return (
        <ul className='list-group rounded-3 bg-light'>
            <li className='list-group-item container-fluid bg-light border-0 d-flex'>
                <span className='h6 py-2 px-3'><b>Who to follow</b></span>
            </li>
            {
                whoArray.map(x => <WhoToFollowListItem key={x._id} who={x} />)
            }
            
        </ul>
    )
}
export default WhoToFollowList;

