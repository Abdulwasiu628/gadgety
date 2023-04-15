import navStyles from "../styles/navbar.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


function NavBar() {
    let colorArr = ['#17b5f3', '#edcd77', '#ab7c53', '#b6b7bd', '#385474 ']
    const [color, colorHandler] = useState(0)
    useEffect(() =>{
        let colorChange = setInterval(() =>{ 
            colorHandler((color + 1) % colorArr.length)
        }, 2000)
        return () => clearInterval(colorChange);
    }, [color])
    useEffect(() =>{
        const element = document.getElementById("logo")
        if(element) {
            element.style.color = colorArr[color]
        }
    }, [color])
  return (
    <nav className={navStyles.container}>
        <div className={navStyles.logo} id="logo">
            <Link href={'/'}>GadgetPlus</Link> 
        </div>
        <div className={navStyles.wrapped}>
            <ul className={navStyles.listItems}>
                <li className={navStyles.items}>
                    <Link href={'/contact'}> Contact Us </Link>   
                </li>
                <li className={navStyles.items}>
                    <Link href={'/product'}> Products </Link>
                </li>
                <li className={navStyles.items} id={navStyles.drops}> Account
                    <div className={navStyles.dropdown}>
                        <div className={navStyles.inner}>
                            <Link href={'/register'}> Sign Up </Link>
                        </div>
                        <div className={navStyles.inner}>
                        <Link href={'/login'}> Login </Link>
                        </div>
                    </div>
                    
                </li>
                <li className={navStyles.items}>
                    Cart
                </li>

            </ul>
            <div className={navStyles.search}>
                <input type="search" name="" id="" placeholder="search" />
            </div>
            <div className={navStyles.img}>
                <img src='../images/user1.png'
                    alt="Picture of the user"
                    width={30}
                    height={30}
                />
            </div>
        </div>

    </nav>
  )
}

export default NavBar