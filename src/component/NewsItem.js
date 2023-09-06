import React, { Component } from 'react'

export default class NewsItem extends Component {
       
    render() {
        let {title,description,imageUrl,newsURL,author,date}=this.props;
        return (
            <div>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsURL} target='_blank' rel="noreferrer" className="btn btn-sm btn-secondary">Read more ...</a>
                            <p className="card-text mt-3"><small class="text-muted">Last updated 3 mins ago <br/> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        </div>
                </div>
            </div>
        )
    }
}