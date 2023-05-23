import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav>
       <div className="container">
              <ul>
                     <li><Link href={'/'}><b>MacBro</b></Link></li>
                    <span>
                    <li><Link href={"/"}>Home</Link></li>
                     <li><Link href={"/shop"}>Shop</Link></li>
                     <li><Link href={"/blablabla"}>Bla Bla Bla</Link></li>
                    </span>
                     
              </ul>
       </div>
    </nav>
  )
}

export default Nav