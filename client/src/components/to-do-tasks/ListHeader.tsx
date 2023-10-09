import { Button } from "@mui/material"
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
        <Button variant="contained" color="success">Add New</Button>
        <Button variant="contained" color="error" onClick={singOut}>Sign Out</Button>
      </div>
    </div>
  )
}

export default ListHeader