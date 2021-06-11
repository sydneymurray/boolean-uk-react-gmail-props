import EmailListItem from "./EmailListItem.js"

function MainSection({filteredEmails, toggleRead, toggleStar}){
    return(
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                <EmailListItem email={email} index={index} toggleRead={toggleRead} 
                 toggleStar={toggleStar}/>
                 ))}
            </ul>
        </main>
    )
}
export default MainSection