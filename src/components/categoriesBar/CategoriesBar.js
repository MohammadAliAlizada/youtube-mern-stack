import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
    getPopularVideos,
    getVideosByCategory,
} from '../../redux/actions/videos.action'
import './_categoriesBar.scss'

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
]

const CategoriesBar = () => {
    const contentRef = useRef(null);
    const [leftScrolPosition, setLeftScrolPosition] = useState(0)
    const [rightScrolPosition, setRightScrolPosition] = useState(0)

    const handleScrollLeft = () => {
        if (contentRef.current) {
            const sl = contentRef.current.scrollLeft -= 100; // Adjust scroll speed as needed
            setLeftScrolPosition(sl)
            setRightScrolPosition(sl)


        }
    };

    const handleScrollRight = () => {
        if (contentRef.current) {
            const sr = contentRef.current.scrollLeft += 100; // Adjust scroll speed as needed
            setRightScrolPosition(sr)
            setLeftScrolPosition(sr)

        }
    };

    const [activeElement, setActiveElement] = useState('All')

    const dispatch = useDispatch()
    const handleClick = value => {
        setActiveElement(value)
        if (value === 'All') {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(value))
        }
    }

    return (
        <div className="d-flex">

            {leftScrolPosition > 0 && <span className="scrollLeft" onClick={handleScrollLeft}>
                <svg className="greater" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                    <path d="M10.71 16.59L15.3 12l-4.59-4.59L12 6l6 6-6 6z" />
                </svg>
            </span>
            }

            <div className='categoriesBar content' ref={contentRef}>

                {keywords.map((value, i) => (
                    <span
                        onClick={() => handleClick(value)}
                        key={i}
                        className={activeElement === value ? 'active' : ''}>
                        {value}
                    </span>
                ))}
            </div>

            {rightScrolPosition < 500 && <span className="scrollRight" onClick={handleScrollRight}>
                <svg className="less" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                    <path d="M17.41 7.41L16 6l-6 6 6 6 1.41-1.41L12.83 12z" />
                </svg>

            </span>
            }
        </div>
    )
}

export default CategoriesBar