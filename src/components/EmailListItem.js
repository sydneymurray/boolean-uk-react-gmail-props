

function EmailListItem(prop){
    return(
        <li
        key={prop.index}
        className={`email ${prop.email.read ? 'read' : 'unread'}`}
      >
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={prop.email.read}
            onChange={() => prop.toggleRead(prop.email)}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={prop.email.starred}
            onChange={() => prop.toggleStar(prop.email)}
          />
        </div>
        <div className="sender">{prop.email.sender}</div>
        <div className="title">{prop.email.title}</div>
      </li>
    )
}
export default EmailListItem