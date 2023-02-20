const WhoToFollowListItem = (who) => {
    return (`
    <div class = 'col-1'>
    <img src = '${who.avatarIcon}' class = 'rounded-circle img-fluid'/>
    </div>
    <div class = 'col-6 align-self-center ps-2'>
        <p class = 'my-0 h6 text-nowrap'><b>${who.userName}</b> <span class = 'fa-stack fa-2xs'><i class="fa-solid fa-certificate fa-stack-2x" style = 'color: #0d9bf0'></i><i class="fa-solid fa-check fa-stack-1x" style = "color: white"></i></span></p>
        <p class = 'text-secondary h6'>${who.handle}</p>
    </div>
    <div class = 'col-3 align-self-center ms-auto'>
        <button type = 'button' class = 'btn rounded-pill btn-primary text-white'><b>Follow</b></button>
    </div>
`)
}
export default WhoToFollowListItem;