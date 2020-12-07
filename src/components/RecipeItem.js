import React from 'react';

const RecipeItem = props => {
    const {name,image,ingredientLines} = props;
    return(
        // <div className="col">
            <div className="card py-3 text-center">
                <img src={image} className="img-fluid w-50 mx-auto rounded-circle" alt="Items"/>
                    <div className="card-body">
                        <h4>{name}</h4>
                    </div>
                    <ol className="list-group">
                        {ingredientLines.map(ingredient =>
                        (<li className="list gropu-items">{ingredient}</li>))
                        }
                    </ol>
                </div>
            // </div>
    )

}

export default RecipeItem;