const PostSummaryItem = (post) => {
    return(`
        <div class = 'row mx-1 my-1'>
            <div class = 'col-10 my-auto'>
                <p class = 'text-secondary my-0'> ${post.topic}</p>
                <p class = 'my-0'><b class = 'text-white'>${post.userName}</b> <i class="text-white fa-solid fa-circle-check fa-xs"></i> &#x2022; <span class = 'text-secondary'>${post.time}</span></p>
                <p><b class = 'text-white'>${post.title}</b></p>
            </div>
            <div class = 'col-2 my-auto'>
                <img src = '${post.image}'
                    class = 'img-fluid rounded-3'/>
            </div>
        </div>
    `)
}
export default PostSummaryItem;