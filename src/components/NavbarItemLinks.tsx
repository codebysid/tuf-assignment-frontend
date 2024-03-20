import { NavLink, useLocation } from "react-router-dom"

const navItems = [
  {
    id: 1,
    name: "Submit Code",
    route: "/"
  },
  {
    id: 2,
    name: "View Submissions",
    route: "/submissions"
  }
]

const NavbarItemLinks = () => {
  const location = useLocation()
  return (
    <>
      {
        navItems.map((item) => {
          return <NavLink key={item.id} to={item.route} className={`text-zinc-500 hover:text-primaryBlue text-xs w-max md:text-xl lg:text-xl 
 ${location.pathname === item.route && "navActiveItem"}`}>{item.name}</NavLink>

        })
      }
    </>
  )
}

export default NavbarItemLinks
