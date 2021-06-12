import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChatIcon from '@material-ui/icons/Chat'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { useStateValue } from '../../StateProvider'

function Sidebar() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue()
  return(
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Info Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="More" />
    </div>
  )
}

export default Sidebar
