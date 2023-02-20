const NavigationSidebar = (active) => {
    let actives = {
        home: "",
        explore: "",
        notifications: "",
        messages: "",
        bookmarks: "",
        lists: "",
        profile: ""
    }
    actives[active] = "active";

    console.log('Loaded navigation sidebar.')
    return (`
        <div class="list-group">
            <a href = '#' class = 'list-group-item list-group-item-action'>
            <div class = 'col-2'>
                <i class = "fa-brands fa-twitter fa-xl" style = "color: #1DA1F2"></i> 
            </div>
            </a>
            <a href = '../HomeScreen/index.html' class = 'list-group-item list-group-item-action d-flex ${actives.home}'>
                <div class = 'container-fluid row justify-content-start p-0'>
                    <div class = 'col-2'>
                        <i class="fa-solid fa-house"></i> 
                    </div>
                    <div class = 'd-none d-xl-block col'>
                        Home
                    </div>
                </div>
            </a>
            <a href = '../explore/index.html' class = 'list-group-item list-group-item-action d-flex ${actives.explore}'>
                <div class = 'container-fluid row justify-content-start p-0'>
                    <div class = 'col-2'>
                        <i class = "fa-solid fa-hashtag"></i>
                    </div>
                    <div class = 'd-none d-xl-block col'>
                        Explore
                    </div>
                </div>
            </a>
            <a href = '#' class = 'list-group-item list-group-item-action d-flex ${actives.notifications}'>
                <div class = 'container-fluid row justify-content-start p-0'>
                    <div class = 'col-2'>
                        <i class="fa-solid fa-bell"></i>
                    </div>
                    <div class = 'd-none d-xl-block col'>
                        Notifications
                    </div>
                </div>
            </a>
            <a href = '#' class = 'list-group-item list-group-item-action d-flex ${actives.messages}'>
                <div class = 'container-fluid row justify-content-start p-0'>
                    <div class = 'col-2'>
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class = 'd-none d-xl-block col'>
                        Messages
                    </div>
                </div>
            </a>
            <a href = '#' class = 'list-group-item list-group-item-action d-flex ${actives.bookmarks}'>
                <div class = 'container-fluid row justify-content-start p-0'>
                    <div class = 'col-2'>
                        <i class="fa-solid fa-bookmark"></i>
                    </div>
                    <div class = 'd-none d-xl-block col'>
                        Bookmarks
                    </div>
                </div>
            </a>
            <a href = '#' class = 'list-group-item list-group-item-action d-flex ${actives.lists}'>
                <div class = 'container-fluid row justify-content-start p-0'>
                    <div class = 'col-2'>
                        <i class="fa-solid fa-list"></i>
                    </div>
                    <div class = 'd-none d-xl-block col'>
                        Lists
                    </div>
                </div>
            </a>
            <a href = '#' class = 'list-group-item list-group-item-action d-flex ${actives.profile}'>
                <div class = 'container-fluid row justify-content-start p-0'>
                    <div class = 'col-2'>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class = 'd-none d-xl-block col'>
                        Profile
                    </div>
                </div>
            </a>
            <a href = '#' class = 'list-group-item list-group-item-action d-flex'>
                <div class = 'container-fluid row justify-content-start p-0'>
                    <div class = 'col-2'>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    <div class = 'd-none d-xl-block col'>
                        More
                    </div>
                </div>
            </a>
                
                </div>
                <div class="d-grid mt-2">
                    <a href="tweet.html"
                    class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
`);
}

export default NavigationSidebar;