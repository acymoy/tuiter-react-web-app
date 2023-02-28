import React from "react";
import PostSummaryList from "../post-summary-list";


const ExploreComponent = () => {
    return (
        <>
    <div className = 'row justify-content-between'>
                        <div className = 'input-group-sm col-11'>
                            <input className = 'form-control py-2 border-start-0 border rounded-pill ps-4' 
                                type = 'search' 
                                placeholder = '&#xF002;  Search Tuiter'
                                id = 'search-tuiter' style = {{"fontFamily": "Arial, Helvetica, sans-serif, FontAwesome"}}/>
                        </div>
                        <div className = 'col-1'>
                            <i className="fa-solid fa-gear pt-1" style = {{"color": "#0d9bf0", "verticalAlign": "middle"}}></i>
                        </div>
                    </div>
                    <div className = 'nav nav-tabs pt-1'>
                        <li className = 'nav-item'>
                            <a className = 'nav-link active' href = '#'>For you</a>
                        </li>
                        <li className = 'nav-item'>
                            <a className = 'nav-link' href = '#'>Trending</a>
                        </li>
                        <li className = 'nav-item'>
                            <a className = 'nav-link' href = '#'>News</a>
                        </li>
                        <li className = 'nav-item'>
                            <a className = 'nav-link' href = '#'>Sports</a>
                        </li>
                        <li className = 'nav-item'>
                            <a className = 'nav-link' href = '#'>Entertainment</a>
                        </li>
                    </div>
    
                    <div className = 'col pt-2 position-relative'>
                        <img src = "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className = 'img-fluid'/>
                        <span className = 'position-absolute bottom-0 start-0 text-white ms-2'><h1><b>SpaceX's Starship</b></h1></span>
                    </div>

                    <PostSummaryList/>
            
                    </> )
};

export default ExploreComponent;

