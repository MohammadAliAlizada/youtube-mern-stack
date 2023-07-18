import React from 'react'
import moment from 'moment'
import './_comment.scss'
import { MdThumbDown, MdThumbUp } from 'react-icons/md'
// import numeral from 'numeral'

const Comment = ({ comment }) => {

    const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } = comment
    return (
        <div className="comment pt-2 d-flex">
            <img
                src={authorProfileImageUrl}
                alt=""
                className="rounded-circle mr-3"
            />
            <div className="comment__body">
                <p className="comment__header mb-1">
                    {authorDisplayName} • {moment(publishedAt).fromNow()}
                </p>
                <p className="mb-0">{textDisplay}</p>
                <div className="d-flex">
                    <div className="comment__rounded"><span><MdThumbUp size={27} className="comment__like" /></span></div>
                    <div className="comment__rounded"><span><MdThumbDown size={27} className="comment__like" /></span></div>
                </div>
            </div>
        </div>
    )
}

export default Comment
