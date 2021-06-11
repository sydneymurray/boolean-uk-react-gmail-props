import { useState } from 'react'
import initialEmails from './data/emails'
import './App.css'


import NavBar from "./components/NavBar.js"
import AppHeader from "./components/AppHeader.js"
import MainSection from "./components/MainSection.js"

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)


function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchCriteria, setSearchCriteria] = useState("Arsenal")

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  function searchEmails(emails){
    let filteredEmails = emails.filter(function (email){
      if (email.title.toUpperCase().includes(searchCriteria.toUpperCase()) || email.sender.toUpperCase().includes(searchCriteria.toUpperCase()))
        return email
    })
    return  filteredEmails
  }

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

  if (searchCriteria!="")
    filteredEmails = searchEmails(filteredEmails)

  return (
    <div className="app">
      <AppHeader searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria}/>
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} 
          unreadEmails={unreadEmails} starredEmails={starredEmails}
          hideRead={hideRead} setHideRead={setHideRead}/>
      <MainSection filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar}/>
    </div>
  )
}

export default App
