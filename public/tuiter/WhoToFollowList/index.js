import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    let s = `<ul class = 'list-group rounded-3 bg-light'
        <li class = 'list-group-item container-fluid bg-light border-0 d-flex'>
            <span class = 'h6 py-2 px-3'><b>Who to follow</b></span>
        </li>`;
    for (let i = 0; i < who.length; i++) {
        s += `<li class = 'list-group-item container-fluid bg-light border-0 d-flex'>`;
        s += WhoToFollowListItem(who[i]);
        s += `</li>`;
    }
    s += `</ul>`
    return s;
}
export default WhoToFollowList;

