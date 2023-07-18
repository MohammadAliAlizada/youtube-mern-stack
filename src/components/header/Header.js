import React, { useState } from 'react'
import './_header.scss'
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = ({ handleToggleSidebar }) => {

    const [input, setInput] = useState('')

    const navigat = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigat(`/search/${input}`)
    }

    const user = useSelector(state => state.auth ?.user)
    return (
        <div className="border border-dark header">
            <FaBars className="header__menu" size={26}
                onClick={() => handleToggleSidebar()}
            />
            <Link to={'/'}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                    alt=""
                    className="header__logo"
                />
            </Link>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search" value={input} onChange={e => setInput(e.target.value)} />
                <button type="submit"><AiOutlineSearch size={22} /></button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src={user ?.photoURL} alt='avatar' />

            </div>



        </div>
    )
}

export default Header
