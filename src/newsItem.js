import React from "react";

function NewsItem(props){
        const {title,imgurl,descript,link,author,published}= props;
        const d= new Date(published);
        return(<div>
            
            <div className="card my-4" style={{width: "18rem"}}>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{width:"50px", height:"30px"}}>
                          New
              <span class="visually-hidden">unread messages</span>
              </span>
           <img src={imgurl===null?"https://images.alphacoders.com/134/1341414.png":imgurl} alt="landscape"/>
           
            <div className="card-body">
            <h5 className="card-title">{title.slice(0,20)}</h5>
            <p className="card-text">{descript==null?"Sorry But Description ids not provided":descript.slice(0,50)}....</p>
            <p class="card-text"><small class="text-body-secondary">Published By-{author}</small></p>
            <p class="card-text"><small class="text-body-secondary">Published-{d.toGMTString()}</small></p>
            <a href={link} className="btn btn-success">Read More</a>
            </div>
            </div>
            </div>
        )
    }


export default NewsItem;