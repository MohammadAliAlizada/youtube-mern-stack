import React, { useState } from 'react'
import "./_categoriesBar.scss"
import { useDispatch } from 'react-redux';
import { getVideosByCategory, getPopularVideos } from '../../redux/actions/videos.action';

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
    const [activeElement, setActiveElement] = useState('All')

    const dispatch = useDispatch()
    const handleClick = (value) => {
        setActiveElement(value)
        if (value === 'All') {
            dispatch(getPopularVideos())
        }
        else {

            dispatch(getVideosByCategory(value))
        }
    }
    return (
        <div className="categoriesBar">
            {keywords.map((value, i) => (
                <span className={activeElement === value ? 'active' : ''}
                    onClick={() => handleClick(value)}
                    key={i}>
                    {value}
                </span>
            ))}
        </div>
    )
}

export default CategoriesBar
