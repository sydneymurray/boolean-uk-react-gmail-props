import { useState } from 'react'
import initialEmails from './data/emails'
import './App.css'

import NavBarInboxListItem from "./components/NavBarInboxListItem.js"
import NavBarStarredListItem from "./components/NavBarStarredListItem.js"
import NavBarHideReadEmails from "./components/NavBarHideReadEmails.js"
import AppHeader from "./components/AppHeader.js"
import EmailListItem from "./components/EmailListItem.js"

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)
let searchCritera=""

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <AppHeader searchCritera={searchCritera}/>
      <nav className="left-menu">
        <ul className="inbox-list">
          <NavBarInboxListItem currentTab={currentTab} 
            setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} />
          <NavBarStarredListItem currentTab={currentTab} 
            setCurrentTab={setCurrentTab} starredEmails={starredEmails}/>
          <NavBarHideReadEmails hideRead={hideRead} setHideRead={setHideRead}/>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
              <EmailListItem email={email} index={index} toggleRead={toggleRead} 
              toggleStar={toggleStar}/>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
