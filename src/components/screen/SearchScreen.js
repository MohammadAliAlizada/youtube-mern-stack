import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosBySearch } from '../../redux/actions/videos.action';
import { Container } from 'react-bootstrap';
import VideoHorizontal from '../videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SearchScreen = ({ setProgress}) => {
    const { query } = useParams()


    const dispatch = useDispatch()

    useEffect(() => {
        setProgress(100)
        dispatch(getVideosBySearch(query))
    }, [query, dispatch])

    const { videos, loading } = useSelector(state => state.searchedVideos)
    return (
        <Container>
            {
                !loading ? (
                    videos ?.map(video => <VideoHorizontal video={video} key={video.id.videoId} searchScreen />)
                ) :
                    (
                        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                            <Skeleton width="100%" height="160px" count={20} />
                        </SkeletonTheme>
                    )}
        </Container>
    )
}

export default SearchScreen
