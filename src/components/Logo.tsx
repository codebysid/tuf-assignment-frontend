import { NavLink } from "react-router-dom"

const Logo = () => {
  return (
    <NavLink to="/">
      <h1 className="font-bold text-3xl md:text-6xl lg:text-6xl"><span className="text-primaryBlue">Code</span><span className="text-darkGray">mit</span></h1>
    </NavLink>
  )
}

export default Logo
