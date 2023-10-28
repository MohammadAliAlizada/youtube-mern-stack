import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import Video from '../../../components/video/Video'
import CategoriesBar from '../../../components/categoriesBar/CategoriesBar'
import { useDispatch, useSelector } from 'react-redux'
import {
    getPopularVideos,
    getVideosByCategory,
} from '../../../redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'
// import SkeletonVideo from '../../Skeleton/SkeletonVideo'
import { useNavigate } from 'react-router';

const HomeScreen = ({ setProgress }) => {
    const navigate = useNavigate()
    const { accessToken, loading: pageloading } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {

        // if (!pageloading && !accessToken) {
        //     navigate('/auth')
        // }
        dispatch(getPopularVideos())
        setProgress(100)
    }, [dispatch, pageloading,accessToken, navigate,setProgress])

    const { videos, activeCategory} = useSelector(
        state => state.homeVideos
    )

    const fetchData = () => {
        if (activeCategory === 'All') dispatch(getPopularVideos())
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
        <Container style={{marginLeft: '74px'}}>
<Col lg={12} md={12} sm={12} xs={10}>
            <CategoriesBar />
       </Col>
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto'></div>
                }
                className='row'>
                {videos.map(video => (
                    <Col xl={3} lg={4} md={4} sm={4} xs={5}>
                        <Video video={video} key={video.id} />
                    </Col>))}
            </InfiniteScroll>
        </Container>
    )
}

export default HomeScreen