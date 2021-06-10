


function NavBarInboxListItem(prop){
    return(
    <li
    className={`item ${prop.currentTab === 'inbox' ? 'active' : ''}`}
    onClick={() => prop.setCurrentTab('inbox')}>
        <span className="label">Inbox</span>
        <span className="count">{prop.unreadEmails.length}</span>
    </li>
    )
}
export default NavBarInboxListItem