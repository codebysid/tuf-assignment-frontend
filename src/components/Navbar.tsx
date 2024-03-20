import Logo from "./Logo"
import { HiMenu } from "react-icons/hi"
import { useState } from "react"
import NavbarItemLinks from "./NavbarItemLinks"


const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(true)

  return (
    <nav className="fixed top-0 py-5 md:pt-10 lg:pt-10 px-10 h-40">
      <div className="flex flex-row items-center justify-between md:justify-around lg:justify-around w-[90vw]">
        <Logo />
        <div className="md:hidden lg:hidden relative right-10">
          <HiMenu className="text-2xl" onClick={() => setShowMobileNav(prev => !prev)} />
          {
            showMobileNav && <div className="absolute -right-6 top-6 flex flex-col gap-2 border border-darkGray p-2 rounded-lg bg-darkGray"><NavbarItemLinks /></div>
          }
        </div>
        <div className="hidden md:flex lg:flex flex-row items-center gap-10 text-xl">
          <NavbarItemLinks />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
