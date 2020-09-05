import React from 'react';
import {Media, Image} from "react-bootstrap";

let like = 0;

const BlogPost = (props) => {
    let l = Number(props.like)
    like+= l;
    if(props.like === '0'){
        return (
            <div style={{paddingLeft:'50px'}}>
                <p style={{fontSize: '24px'}}>
                <img style={{width: '27px', align: 'left'}}
                     src="https://img.icons8.com/cotton/2x/facebook-like.png" alt=""/>
                : {like}
                </p>
            </div>
        )
    }else {
        return (
            <div>
                <Media className='m-4'>
                    <Image roundedCircle
                           src={props.blog_image}
                           alt=""
                           width={100}
                           height={100}
                           className='mr-3'
                    />
                    <Media.Body>
                        <h5>{props.blog_name}</h5>
                        <p>{props.blog_comment}</p>
                        <p style={{fontSize: '24px'}}>
                            <img style={{width: '27px', align: 'left'}}
                                 src="https://img.icons8.com/cotton/2x/facebook-like.png" alt=""/>
                            : {props.like}</p>
                    </Media.Body>
                </Media>
            </div>
        );
    }
};

export default BlogPost;
