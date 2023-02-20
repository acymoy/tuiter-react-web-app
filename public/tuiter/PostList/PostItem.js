
const postitem = (post) => {
    return (`
    <div class = 'container-fluid d-flex pt-1 pb-3 mb-0 border-bottom border-secondary'>
        <div class = 'd-flex col-2 align-items-start pe-3'>
            <img src= "${post.userProfile}"
                    class = "img-fluid rounded-circle"/>
        </div>
        <div class = 'col-11 ps-2 container-fluid align-items-start'>
            <div class = 'row col-12 container-fluid'>
                <p class = 'm-0'><b class = 'text-white'>${post.userName} <span class = 'fa-stack fa-2xs'><i class="fa-solid fa-certificate fa-stack-2x" style = 'color: #0d9bf0'></i><i class="fa-solid fa-check fa-stack-1x" style = "color: white"></i></span></b>
                    <span class = 'text-secondary'>${post.handle} &#x2022; ${post.time}</span></p>
                <p class = ''>${post.text}</p>
            </div>
            <div class = 'row container-fluid border border-secondary p-0 rounded-top rounded-3 align-items-start'>
                <img src = "${post.mediaThumbnail}" class = 'img-fluid '/>
                <p class = 'text-white m-0'>${post.mediaTitle}</p>
                <p class = 'text-secondary'>${post.mediaDescription}
            </div>
            <div class = 'row pt-2 d-flex'>
                <div class = 'col'>
                    <i class="fa-regular fa-comment text-secondary"></i><span class = 'ps-3'> ${post.comments}</span>
                </div>
                <div class = 'col'>
                    <i class="fa-solid fa-retweet"></i><span class = 'ps-3'> ${post.shares}</span>
                </div>
                <div class = 'col'>
                    <i class="fa-regular fa-heart"></i><span class = 'ps-3'> ${post.likes}</span>
                </div>
                <div class = 'col'>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i><span class = ''></span>
                </div>
            </div>
        </div>
    </div>
        `)
}
export default postitem;