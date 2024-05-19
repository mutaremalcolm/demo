'use client'

import {  
  RiLinkedinFill, 
  RiGithubFill, 
  RiTwitterFill, 
  RiInstagramFill 
} from "react-icons/ri";


import Link from "next/link";

const icons = [

  {
    path: "https://www.linkedin.com/in/malcolm-mutare-a234a61aa/",
    name: <RiLinkedinFill />
  },
  {
    path: "https://github.com/mutaremalcolm",
    name: <RiGithubFill />
  },
  {
    path: "https://twitter.com/MalcolmTech",
    name: <RiTwitterFill />
  },
]

  
const Socials = ({containerStyles, iconStyles}: any) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=> {
        return <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>
            {icon.name}
          </div>
        </Link>
      })}
    </div>
  )
}

export default Socials