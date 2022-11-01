import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
     <header aria-label="Site Header" class="bg-white">
  <div
    class="mx-auto flex h-7 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 mb-2"
  >
    <a class="block text-teal-600" href="/">
      <span class="sr-only">Home</span>
      <Link href="/">AVOCADO</Link>
    </a>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Site Nav" class="hidden md:block">
        <ul class="flex items-center gap-6 text-l">
          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
              Design Lab
            </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
              Price
            </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
              Community
            </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
              Services
            </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
              Support
            </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
       

        <button
          class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
 
 
</header>


  
  <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        {/* <span className="cart-item-qty">{totalQuantities}</span> */}
      </button>

      {showCart && <Cart />}

      
     

      
    </div>
  )
}

export default Navbar