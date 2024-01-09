import React from "react";

function NewsItem(props){
        const {title,imgurl,descript,link}= props;
        return(
            <div className="card my-4" style={{width: "18rem"}}>
           <img src={imgurl===null?"https://images.alphacoders.com/134/1341414.png":imgurl} alt="landscape"/>
            <div className="card-body">
            <h5 className="card-title">{title.slice(0,20)}</h5>
            <p className="card-text">{descript==null?"Sorry But Description ids not provided":descript.slice(0,50)}....</p>
            <a href={link} className="btn btn-success">Read More</a>
            </div>
            </div>
        )
    }


export default NewsItem;