
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Button = ({children,disabled,to, type}) => {

    // const styles = "bg-yellow-500 uppercase px-4 py-1.5 rounded-3xl font-semibold hover:bg-red-600 hover:text-slate-300 mt-2 transition-colors duration-300  tracking-wide focus:bg-red-500 focus:ring focus:outline-none focus:ring-offset-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:bg-slate-400 sm:px-6 sm:py-4"

     const base ="bg-yellow-500 uppercase text-sm rounded-3xl hover:bg-red-600 hover:text-slate-300 mt-2 transition-colors duration-300 font-semibold tracking-wide focus:bg-red-500 focus:ring focus:outline-none focus:ring-offset-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:bg-slate-400 "

    const Styles = {
      primary: base + "  md:px-6 md:py-4 px-4 py-1.5 ",
      small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
      secondary:"bg-red-500 uppercase text-sm  border-2 border-stone-300 rounded-3xl hover:bg-stone-300 hover:text-stone-800 mt-2 transition-colors duration-300 font-semibold tracking-wide focus:bg-red-500 focus:ring focus:outline-none focus:ring-offset-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:bg-slate-400 md:px-6 md:py-3 px-2.5 py-1 "

    }

    

if(to) return <Link  className={Styles[type]} to={to}>{children} </Link>

 
  return (
    <button  disabled={disabled}
    className={Styles[type]}>
      {children}
    </button>
  )
}



Button.propTypes ={
    children: PropTypes.any.isRequired,
    disabled: PropTypes.any,
    to:PropTypes.any,
    type:PropTypes.any.isRequired
}


export default Button
