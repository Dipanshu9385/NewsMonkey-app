import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultsProps={
    country:"in",
    pageSize:10,
    category:'general'
  }
  static propTypes={
    // country:this.propTypes.tostring(),
    // pageSize:this.Proptypes.number,
    // category:this.propTypes.string()
  }
  articles = [{
    "source": {
      "id": null,
      "name": "NDTV News"
    },
    "author": null,
    "title": "India Uses NASA's Playbook To Get Ahead In Space Race With Chandrayaan-3 - NDTV",
    "description": "The space race India aims to win this week by landing first on the moon's south pole is about science, the politics of national prestige and a new frontier: money.",
    "url": "https://www.ndtv.com/india-news/chandrayaan-3-vs-luna-25-indias-boom-russias-crunch-how-money-is-shaping-a-new-space-race-4320932",
    "urlToImage": "https://c.ndtvimg.com/2023-08/il6j2cag_chandrayaan-students-afp_625x300_23_August_23.jpg",
    "publishedAt": "2023-08-23T03:37:00Z",
    "content": "Bengaluru/Washington: The space race India aims to win this week by landing first on the moon's south pole is about science, the politics of national prestige and a new frontier: money.\r\nIndia's Chan… [+4048 chars]"
  }
  ]
  constructor() {
    super();
    console.log('Hello i am constructer')
    this.state = {
      articles: this.articles,
      loading:false,
      page:1
    }

  }
  async componentDidMount(){
    console.log("CDN")
    this.setState({loading:true})
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb41f84bffa14f66bb57c5bee9bdec26&page=1&pageSize=${this.props.pageSize}`
    let data= await fetch(url)
    let parsedata=await data.json()
    console.log(parsedata)
    this.setState({articles:parsedata.articles,
    totalResults:parsedata.totalResults,
    loading:false
  })
    
  }
  handlePreviousclick=async()=>{
    console.log("Previous Clicked")
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb41f84bffa14f66bb57c5bee9bdec26&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url)
    let parsedata=await data.json()
    console.log(parsedata)
    this.setState({
      articles:parsedata.articles,
      page:this.state.page -1  ,
      loading:false
     })
    
  }
  handleNextclick=async()=>{
    console.log("Next Clicked")
    if((this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    }
    else{
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb41f84bffa14f66bb57c5bee9bdec26&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data= await fetch(url)
      let parsedata=await data.json()
      console.log(parsedata)
      this.setState({
        articles:parsedata.articles,
        page:this.state.page +1,
        loading:false
      })
    }

  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center py-2 text-dark">NewsMonkey - Today Top Headlines</h1>
        {this.state.loading && <Spinner  />}
        <div className="bottom-btn d-flex justify-content-between px-4 my-4">
          <button disabled={this.state.page<=1} className="btn btn-dark btn-lg" onClick={this.handlePreviousclick}>&#8592; Previous</button>
          <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark btn-lg" onClick={this.handleNextclick}>Next &#8594;</button>
        </div>
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 my-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })}
        </div>
        <div className="bottom-btn d-flex justify-content-between px-4 my-4">
          <button disabled={this.state.page<=1} className="btn btn-dark btn-lg" onClick={this.handlePreviousclick}>&#8592; Previous</button>
          <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark btn-lg" onClick={this.handleNextclick}>Next &#8594;</button>
        </div>


      </div>
    )
  }
}
