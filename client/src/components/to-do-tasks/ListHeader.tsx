import { IListHeaderProps } from "../../helpers/Types"
import "./ListHeaderStyles.css"

const ListHeader = ({ listName }: IListHeaderProps) => {

  const singOut = () => {
    console.log("Sign out")
  }

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">Add New</button>
        <button className="signout" onClick={singOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default ListHeader