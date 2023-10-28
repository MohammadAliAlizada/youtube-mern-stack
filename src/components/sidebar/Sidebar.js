import React from 'react'
import './_sidebar.scss'
import {
    MdSubscriptions,
    MdExitToApp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from "react-icons/md"
import { useDispatch,useSelector } from 'react-redux';
import { log_out } from '../../redux/actions/auth.action';
import { Link, useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const { accessToken, loading: pageloading } = useSelector(state => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(log_out())
        setTimeout(() => {
            navigate('/auth')
        }, 2000);
    }

    return (
        <nav className={"sidebar open"}
           >
            <Link style={{ textDecoration: 'none' }} to="/">
                <li >
                    <MdHome size={23} />
                    <span>Home</span>
                </li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/feed/subscriptions">
                <li>
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
            </Link>

            <li>
                <span><svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: 'none', fill: 'gray', display: 'block', width: '100%', height: '100%'}}><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg></span>
                <span>Shorts</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't Know</span>
            </li>
            <hr />
            <li onClick={logOutHandler}>
                <MdExitToApp size={23} />
               {accessToken ? <span>Logout</span> : <span>Login</span> } 
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar
