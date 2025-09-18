import React,{useEffect, useState} from 'react'
import {FiMenu,FiX} from 'react-icons/fi'
import {FaGithub,FaLinkedin} from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  const [activeSection, setactiveSection] = useState(false)
  const [isScrolled, setisScrolled] = useState(false)

  //check scrollbar and change navbar background
  useEffect(()=>{
    const handleScroll=()=>{
      setisScrolled(window.scrollY>50)
    }
    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll)
  },[])

 

  //smooth scroll function
  const handleMenuItemClick=(sectionId)=>{
setactiveSection(sectionId)
setisOpen(false)

const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

   const menuitems=[
    {id:'about',label:"About"},
    {id:'skills',label:"Skills"},
    {id:'experience',label:"Experience"},
    {id:'work',label:"Work"},
    {id:'education',label:"Education"},
  ]

  return (
    <div>
       <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled?'bg-[#050414]/50 backdrop-blur-md shadow-md':'bg-transparent'}`}>
<div className='text-white py-5 flex justify-between items-center'>

  {/* Logo */}
  <div className='text-lg font-semibold cursor-pointer'>
    <span className='text-[#8245ec]'>&lt;</span>
    <span className='text-white'>Vishal</span>
    <span className='text-[#8245ec]'></span>
    <span className='text-[#8245ec]'>&gt;</span>
  </div>

  {/* Desktop Menu */}
  <ul className='hidden md:flex space-x-8 text-gray-300'>
{
  menuitems.map((item)=>(
    <li key={item.id}  className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}>
      <button onClick={()=>handleMenuItemClick(item.id)}>
        {item.label}
      </button>
    </li>
  ))
}
  </ul>








  {/* social media icons */}
  <div className='space-x-4 hidden md:flex'>
    <a href="https://github.com/vishal-code-lab" target='_blank' rel='' className=' text-gray-300 hover:text-[#8245ec]'><FaGithub size={24}/></a>

    <a href="https://www.linkedin.com/in/vishal-682a00255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='' className=' text-gray-300 hover:text-[#8245ec]'><FaLinkedin size={24}/></a>

  </div>






{/* responsiveness start from here */}



  {/* mobile menu icons */}

<div className='md:hidden'>

  {
    isOpen ? (
      <FiX className='text-3xl text-[#8245ec] cursor-pointer' onClick={()=>setisOpen(false)}
    />):(
      <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={()=>setisOpen(true)}/>
    )
  }

</div>


</div>







{/* mobile menu items */}

{
  isOpen &&(
   <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 
  bg-[#050414]/50  
  backdrop-blur-lg 
  z-50 
  rounded-lg 
  shadow-lg">

      <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
{
  menuitems.map((item)=>(
    <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection=== item.id ? 'text-[#8245ec]':''}`}>
      <button onClick={()=>handleMenuItemClick(item.id)}>{item.label}</button>
    </li>
  ))
}
<div className='flex space-x-4'>
<a href="https://github.com/vishal-code-lab" target='_blank' rel="noopener noreferrer"
className=' text-gray-300 hover:text-white'><FaGithub size={24}/></a>

    <a href="https://www.linkedin.com/in/vishal-682a00255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer"
 className=' text-gray-300 hover:text-white]'><FaLinkedin size={24}/></a>
</div>
      </ul>

    </div>
  )
}


       </nav>
    </div>
  )
}

export default Navbar