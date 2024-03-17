import { Link, useNavigate } from "react-router-dom"
import PropTypes from "prop-types"


const LinkBtn = ({ children, to }) => {
    const navigate = useNavigate()
    const styles = "text-blue-500 hover:text-red-500 hover:underline"

    if (to === "-1")
    return <button onClick={() => navigate(-1)} className={styles}> {children}</button>


    return <Link to={to} className={styles}> {children}</Link>
}





LinkBtn.propTypes = {
    children: PropTypes.any.isRequired,
    to: PropTypes.any.isRequired
}



export default LinkBtn
