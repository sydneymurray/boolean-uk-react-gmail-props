
function NavBarStarredListItem(prop){
    return(
        <li
        className={`item ${prop.currentTab === 'starred' ? 'active' : ''}`}
        onClick={() => prop.setCurrentTab('starred')}
      >
        <span className="label">Starred</span>
        <span className="count">{prop.starredEmails.length}</span>
      </li>
    )
}
export default NavBarStarredListItem 