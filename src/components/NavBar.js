import NavBarInboxListItem from "./NavBarInboxListItem.js"
import NavBarStarredListItem from "./NavBarStarredListItem.js"
import NavBarHideReadEmails from "./NavBarHideReadEmails.js"

function NavBar({currentTab, setCurrentTab, unreadEmails, starredEmails,
    hideRead, setHideRead}){
    return(
        <nav className="left-menu">
        <ul className="inbox-list">
          <NavBarInboxListItem currentTab={currentTab} 
            setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} />
          <NavBarStarredListItem currentTab={currentTab} 
            setCurrentTab={setCurrentTab} starredEmails={starredEmails}/>
          <NavBarHideReadEmails hideRead={hideRead} setHideRead={setHideRead}/>
        </ul>
      </nav>
    )
}
export default NavBar