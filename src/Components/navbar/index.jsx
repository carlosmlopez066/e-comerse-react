import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4"
  return (
    <nav
      className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light"
    >
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li
          className="text-black/60"
        >
          carlosmlopez066@gmail.com
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li className='flex'>
          <ShoppingCartIcon className="h-6 w-6 text-black" /> {context.count}
        </li>
      </ul>
    </nav>


  )
}

export default Navbar