
import {useSelector } from "react-redux"

const UserName = () => {
// this get the current state of the user
  const userName = useSelector((state)=>state.user.username) 
  console.log(userName)
  return (
    <div className="text-sm font-semibold  hidden md:block ">
     {userName}
    </div>
  )
}

export default UserName
