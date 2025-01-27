import { useContext } from 'react'
import logo from '../assets/food-logo.png'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import DarkMode from './DarkMode'
const Navbar = () => {
  const { user, handleLogout } = useAuth()
  return (
    <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold'>Tasty Food</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <DarkMode></DarkMode>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/all-foods'>All Foods</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/my-foods' className='justify-between'>
                  My Foods
                </Link>
              </li>
              <li>
                <Link to='/add-food'>Add Food</Link>
              </li>
              <li>
                <Link to='/my-orders'>My Orders</Link>
              </li>
        
              <li className='mt-2'>
                <button
                  onClick={handleLogout}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
