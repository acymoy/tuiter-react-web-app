import PostSummaryList from "../PostSummaryList/index.js";

const ExploreList = () => {
    console.log('Loaded explore list.')
    return (`
    <div class = 'row justify-content-between'>
                        <div class = 'input-group-sm col-11'>
                            <input class = 'form-control py-2 border-start-0 border rounded-pill ps-4' 
                                type = 'search' 
                                placeholder = '&#xF002;  Search Tuiter'
                                id = 'search-tuiter', style = "font-family: Arial, Helvetica, sans-serif, FontAwesome">
                        </div>
                        <div class = 'col-1'>
                            <i class="fa-solid fa-gear pt-1" style = 'color: #0d9bf0; vertical-align: middle'></i>
                        </div>
                    </div>
                    <div class = 'nav nav-tabs pt-1'>
                        <li class = 'nav-item'>
                            <a class = 'nav-link active' href = '#'>For you</a>
                        </li>
                        <li class = 'nav-item'>
                            <a class = 'nav-link' href = '#'>Trending</a>
                        </li>
                        <li class = 'nav-item'>
                            <a class = 'nav-link' href = '#'>News</a>
                        </li>
                        <li class = 'nav-item'>
                            <a class = 'nav-link' href = '#'>Sports</a>
                        </li>
                        <li class = 'nav-item'>
                            <a class = 'nav-link' href = '#'>Entertainment</a>
                        </li>
                    </div>
    
                    <div class = 'col pt-2 position-relative'>
                        <img src = "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class = 'img-fluid'/>
                        <span class = 'position-absolute bottom-0 start-0 text-white ms-2'><h1><b>SpaceX's Starship</b></h1></span>
                    </div>

                    ${PostSummaryList()}

    `)
}
export default ExploreList;