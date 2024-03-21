import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItems } from "./cartSlice"

import PropTypes from "prop-types"


const DeleteBtn = ({ pizzaId}) => {
   const dispatch= useDispatch()

  return  <Button type="small" onClick={()=>dispatch(deleteItems( pizzaId))}> delete</Button>
}

DeleteBtn.propTypes= {
    pizzaId: PropTypes.any
}


export default DeleteBtn
