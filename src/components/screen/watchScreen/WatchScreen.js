import React, { useEffect } from 'react'
import './_watchScreen.scss'
import { Row, Col } from 'react-bootstrap';
import VideoMetaData from '../../videoMetaData/VideoMetaData';
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal';
import Comments from '../../comments/Comments'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById, getRelatedVideos } from '../../../redux/actions/videos.action';

const WatchScreen = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoById(id))
        dispatch(getRelatedVideos(id))
    }, [dispatch, id])

    const { videos, loading: relatedVideosLoading } = useSelector(state => state.relatedVideos)
    const { video, loading } = useSelector(state => state.selectedVideo)

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen_player">
                    <iframe src={`https://www.youtube.com/embed/${id}`} frameBorder="0" title={video ?.snippet ?.title} allowFullScreen width="100%" height="100%">
                    </iframe>
                </div>
                {
                    !loading ? <VideoMetaData video={video} videoId={id} /> : <h1>loading.....</h1>
                }

                <Comments videoId={id} totalComments={video ?.statistics ?.commentCount} />
            </Col>
            <Col lg={4}>
                {!loading && videos?.filter(video => video.snippet).map((video) => (
                    <VideoHorizontal video={video} key={video.id.videoId} />
                ))}
            </Col>
        </Row>
    )
}

export default WatchScreen
