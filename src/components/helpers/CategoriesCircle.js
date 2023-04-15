import React, { useEffect, useState, useReducer } from "react";

export const CategoriesCircle = () => {
    const [circleData, setCircleData] = useState([
        {
            Label: "Suits",
            ImgSrc: require("../../images/ravixkarunaSquare.jpg")
        },
        {
            Label: "Sherwanis",
            ImgSrc: require("../../images/sherwaniSquare.jpg")
        },
        {
            Label: "Sadris",
            ImgSrc: require("../../images/sadriSquare.jpg")
        },
        {
            Label: "Formals",
            ImgSrc: require("../../images/formalsSquare.png")
        },
        {
            Label: "Jodhpuris",
            ImgSrc: require("../../images/jodhpurisSquare.jpg")
        },
    ]);
    return (
        <div class="categoriesCarousal" style={{overflow: "auto"}}>
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