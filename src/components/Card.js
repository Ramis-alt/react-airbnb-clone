import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}  
             <img src={`../images/${props.item.coverImg}`} className="card--image" alt="an olimpic swimmer"/>
            <div className="card--stats">
                <img src="../images/star1.png" className="card--star" alt="a red star"/>
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

// const nums = [1, 2, 3, 4, 5]

// const multipliers = nums.map(nums => nums * nums);
// console.log(multipliers);

/*
Added a conditional statement to the line above to display either Sold Out or Online card when appropiate. Did so by adding curly braces around the div
Also added CSS to style the card 
{badgeText && <div className="card--badge">{badgeText}</div>}  
this reads: if badgeText has a real value then display the badge.
*/