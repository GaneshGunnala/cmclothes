import React, { useEffect, useState, useReducer } from "react";

export const CategoriesCircle = () => {
    const [circleData, setCircleData] = useState([
        {
            Label: "Suits",
            ImgSrc: require("../../images/ravixkarunaSquare.jpg")
        },
    ]);
    debugger;
    return (
        <div class="categoriesCarousal">
            {circleData.map(item => {
                return(
                <div class="categoryDiv">
                    <img class="categoryImg" src={item.ImgSrc}></img>
                    <h6 class="categoryLabel">{item.Label}</h6>
                </div>
                )
            })}
        </div>
    );
}

// export default CategoriesCircle;