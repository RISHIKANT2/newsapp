import React, { useEffect, useState } from "react";
import NewsItem from "./newsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./spinner";


function  News(props){
  const [data,setData]= useState({
    articles:null,
    totalResults:null,
    page:1
  });
  const {page,pagesize,country,category,setprogress,newsApi}=props;
  // let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2b1d91988f2f4a22a8785b8658b30f91`;
  
  
   useEffect(()=>{
       setprogress(10)
       let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${newsApi}&pageSize=${pagesize}&page=${data.page}`;
        fetch(url)
      .then(res=>
        res.json() )
      .then(d=>
         setData({
            articles:d.articles,
            totalResults:d.totalResults,
            }));
          setprogress(100)
          },[]);
    
      
      console.log(data);

      // function handleNext(){
      //   console.log("Next")
      //   url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2b1d91988f2f4a22a8785b8658b30f91&page=${data.page+1}`;
      //   fetch(url)
      //   .then(res=>{
      //    return res.json()}) 
      //   .then(d=>{ 
      //       setData({
      //         articles:d.articles,
      //         page:data.page+1
      //       })
      //   });
      // }
      // function handlePrevious(){
      //   console.log("Previous")
      //   url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2b1d91988f2f4a22a8785b8658b30f91&pageSize=${props.pagesize}&page=${props.page-1}`;
      //   fetch(url)
      //   .then(res=>{
      //    return res.json()}) 
      //   .then(d=>{ 
      //     console.log(d)
      //       setData({
      //         articles:d.articles,
      //         page:data.page-1
      //       })

      //   });
      // }
     function fetchData(){
      let url= `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${newsApi}&pageSize=${props.pagesize}&page=${page<=data.totalResults/pagesize?page+1:page}`;
      fetch(url)
     .then(res=>{
      return res.json()}) 
     .then(d=>{ 
         setData({
          articles:data.articles.concat(d.articles),
          totalResults:data.totalResults
         })
     });
       console.log(data);
     }
  
        return(<>
           {data.articles && <InfiniteScroll
            dataLength={data.articles.length}
            next={fetchData}
            hasMore={data.articles.length!== data.totalResults}
            loader={<h4><Spinner/></h4>}
          >
          <div className="row" >

        <center><h1 className="my-4"><u>MyNews Provides Daily Latest News</u></h1></center>
        
              {data.articles && data.articles.map((element)=>{
              return <div className="col md-4" key={element.url}>
                      <NewsItem  title={element.title} descript={element.description} imgurl={element.urlToImage} link={element.url} author={element.author} published={element.publishedAt}/>
                      
                      </div>
                      
          })}
                     
          </div>
          </InfiniteScroll>}
          </>
          )
    }

export default News;