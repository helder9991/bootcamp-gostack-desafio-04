import React, { Component } from 'react';

import './index.css'

class Post extends Component{
    render(){
        const { data } = this.props; 
        
        return(
            <>
                <div className="post">
                    <div className="postHeader">
                        <img className="avatar" src={data.author.avatar} />
                        <div className="postTitles">
                            <strong className="name">{data.author.name}</strong>
                            <small className="date">{data.date}</small>
                        </div>
                    </div>
                    <p className="message">{data.content}</p>
                </div>
                <div className="answer">
                    {data.comments.map(comment => (
                        <div className="answerContainer">
                            <img className="avatar" src={comment.author.avatar}/>
                            <div className="answerContent">
                                <strong>{comment.author.name} </strong>
                                {comment.content}
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default Post;