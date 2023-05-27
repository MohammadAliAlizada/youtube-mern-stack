import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CategoriesBar from '../../categoriesBar/CategoriesBar';
import Video from '../../video/Video';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../../redux/actions/videos.action';
import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'
const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === "All")
            dispatch(getPopularVideos())
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
        <Container >
            <CategoriesBar />
            <Row >
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    Loader={
                        <div className="spainner-border text-danger d-block mx-auto"></div>
                    } className="row">
                    {!loading ? videos.map((video) => (
                        <Col lg={3} md={4}>
                            <Video video={video} key={video.id} />
                        </Col>
                    ))
                        : [...Array(20)].map(() => {
                            <Col lg={3} md={4}>
                                <Skeleton heigh={180} width="100%" />
                            </Col>
                        })}
                </InfiniteScroll>
            </Row>
        </Container>
    )
}

export default HomeScreen
