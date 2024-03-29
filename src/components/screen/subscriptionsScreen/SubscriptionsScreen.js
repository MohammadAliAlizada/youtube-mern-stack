import React, { useEffect } from 'react'
import './_subscriptions.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getSubscribeChannels } from '../../../redux/actions/videos.action';
import { Container } from 'react-bootstrap';
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const SubscriptionsScree = ({ setProgress}) => {


    const dispatch = useDispatch()

    useEffect(() => {
        setProgress(100)
        dispatch(getSubscribeChannels())
    }, [dispatch])

    const { loading, videos } = useSelector(state => state.subscriptionsChannel)
    return (
        <Container fluid>
            {
                !loading ? videos ?.map(video => <VideoHorizontal video={video} key={video.id} subScreen />) :
                    <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                        <Skeleton width="100%" height="160px" count={20} />
                    </SkeletonTheme>
            }
        </Container>
    )
}

export default SubscriptionsScree
