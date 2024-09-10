import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "../components/ui/MobileNav";

import { Button } from "./ui/button"
//component if it's in a separate file


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-gradient-to-r from-gray-100 via-gray-40 to-black

">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <h1 className="text-black text-4xl font-custom font-semibold hover:text-accent-hover">Adarsh <span className="text-accent hover:text-accent-hover">.</span> </h1>

        </Link>

        <div className="hidden xl:flex items-center gap-8 ">
        <Nav/>
        <Link href="/contact">
        <Button>Hire Me</Button>
        </Link>
                </div>
<div className="xl:hidden">
  <MobileNav />
</div>

        
      </div>
    </header>
  )
}

export default Header
