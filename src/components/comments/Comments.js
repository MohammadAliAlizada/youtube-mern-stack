import React, { useEffect, useState } from 'react'
import './_comments.scss'
import Comment from '../comment/Comment'
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsOfVideoById, addComment } from '../../redux/actions/comments.action';
const Comments = ({ videoId, totalComments }) => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId))
    }, [dispatch, videoId])
    const comments = useSelector(state => state.commentsList.comments)
    const user = useSelector(state => state.auth ?.user)

    const _comments = comments ?.map(comment => comment.snippet.topLevelComment.snippet)

    const handleComment = e => {
        e.preventDefault()
        console.log(text)
        if (text.length === 0) return
        dispatch(addComment(videoId, text))
        setText('')
    }
    return (
        <div className="comments">
            <p>{totalComments} Comments</p>
            <div className="comment__form">
                <img
                    src={user ?.photoURL}
                    alt="avator"
                    className="rounded-circle mr-3"
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input
                        type="text"
                        className="flex-grow-1"
                        placeholder="write a comment..."
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button className="border-0 p-2">Comment</button>
                </form>
            </div>
            <div className="comment__list">
                {_comments ?.map((comment, i) => (
                    <Comment comment={comment} key={i} />
                ))}

            </div>
        </div>
    )
}

export default Comments
