import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import StorefrontIcon from '@material-ui/icons/Storefront'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import AddIcon from '@material-ui/icons/Add'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Avatar} from '@material-ui/core'
import { useStateValue } from '../../StateProvider'

function Header () {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"/>
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text"/>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
          <AddIcon />
          <NotificationsIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
