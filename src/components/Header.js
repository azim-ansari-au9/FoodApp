import React from 'react';

const Header = (props) => {
    const{search, onInputChange, searchClick} = props
    return (
        <div className='jumbotron'>
            <h1 className='display-1'>
                <span class="material-icons brand-icon">restaurant</span>FoodApp
            </h1>
            <div class="input-group w-50 p-100px mx-auto">
                <input type="text" class="form-control" 
                    placeholder="Search your food ..." 
                    value={search} 
                    onChange={onInputChange}
                    
                    />
                <div class="input-group-append ">
                    <button className="btn btn-dark" onClick={searchClick}>Search</button>
                </div>
            </div>
        </div>
    )
};

export default Header;