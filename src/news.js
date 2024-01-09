import React, { useEffect, useState } from "react";
import NewsItem from "./newsItem";

   
    

function  News(){
  let [data,setData]= useState({
    articles:null,
    page:1,
    totalResults:1234
  });
  let url= `https://newsapi.org/v2/everything?q=apple&from=2024-01-08&to=2024-01-08&sortBy=popularity&apiKey=2b1d91988f2f4a22a8785b8658b30f91&pageSize=20&page=${data.page}`;
  
  
   useEffect(()=>{
       fetch(url)
      .then(res=>{
       return res.json()}) 
      .then(d=>{ 
          setData(d)
      });
        },[]);
      console.log(data);
      function handleNext(){
        console.log("Next")
        url=`https://newsapi.org/v2/everything?q=apple&from=2024-01-08&to=2024-01-08&sortBy=popularity&apiKey=2b1d91988f2f4a22a8785b8658b30f91&pageSize=20&page=${data.page+1}`;
        fetch(url)
        .then(res=>{
         return res.json()}) 
        .then(d=>{ 
            setData({
              articles:d.articles,
              page:data.page+1
            })
        });
      }
      function handlePrevious(){
        console.log("Previous")
        url=`https://newsapi.org/v2/everything?q=apple&from=2024-01-08&to=2024-01-08&sortBy=popularity&apiKey=2b1d91988f2f4a22a8785b8658b30f91&pageSize=20&page=${data.page-1}`;
        fetch(url)
        .then(res=>{
         return res.json()}) 
        .then(d=>{ 
          console.log(d)
            setData({
              articles:d.articles,
              page:data.page-1
            })

        });
      }
     
  
        return(
            <div className="row">
              <center><h1 className="my-4"><u>MyNews Provides Daily Latest News</u></h1></center>
              {data.articles && data.articles.map((element)=>{
              return <div className="col md-4" key={element.url}>
                      <NewsItem  title={element.title} descript={element.description} imgurl={element.urlToImage} link={element.url}/>
                      
                      </div>
          })}<div className="d-flex justify-content-between"> 
             <button type="button" className="btn btn-primary" onClick={handlePrevious} >&laquo;Previous</button>
             <button type="button" className="btn btn-primary" onClick={handleNext}>Next&raquo;</button>
          </div>
                     
          </div>
            
         
          )
    }

export default News;