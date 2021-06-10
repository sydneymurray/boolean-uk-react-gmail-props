

function NavBarHideReadEmails(consignment){
    return(
        <li className="item toggle">
        <label htmlFor="hide-read">Hide read</label>
        <input
          id="hide-read"
          type="checkbox"
          checked={consignment.hideRead}
          onChange={e => consignment.setHideRead(e.target.checked)}
        />
      </li>

    )
}

export default NavBarHideReadEmails