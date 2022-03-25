import React from 'react'
import {FaFacebookF,FaWhatsapp} from 'react-icons/fa'
import {AiFillHome,AiFillInfoCircle,AiOutlineVerticalLeft} from 'react-icons/ai'
import Dablogo from '../../assets/Images/tr-Logo.png'
const Navbar = () => {
  const [Active, setActive] = React.useState(false)
  const [mouseinw,setmouse] = React.useState(false)
         
  document.addEventListener('mousemove', function(e) {
      // check when mouse leaves the window
      if (e.pageX < 0 || e.pageY < 0 || e.pageX > window.innerWidth || e.pageY > window.innerHeight) {
          setmouse(false)
      } else {
          setmouse(true)
      } 
      let card = document.querySelector('.card_3d');
      let XAxis = (window.innerWidth / 2 - e.pageX) / 28 ;
      let YAxis = (window.innerHeight / 2 - e.pageY) / 28;
      if(mouseinw){
        card.style.transform = `rotateY(${XAxis}deg) rotateX(${YAxis}deg)`;
      }
      else{
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      }
  });
  
  const activeSide = "bg-gray-800 h-30 w-60 transform transition-all rounded-lg absolute duration-700 text-white flex justify-center p-2"
  const hiddenSide = "bg-gray-800 h-30 w-60 transform transition-all rounded-lg absolute duration-700 text-white flex justify-center p-2 -translate-x-60"
  const normalButton = "hidden"
  const activeButton = "absolute w-10 h-10 bg-white-400 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center"

  return (
    <>
    <div class="navbar shadow-xl rounded-box bg-white sticky">
        <div class="navbar-start">
            <div className='flex md:hidden'>
              <div className="flex transform relative transition-all duration-1000">
                <div
                    className={Active? activeSide:hiddenSide}
                    onClick={() =>setActive(!Active)}>
                    <ul className="menu w-56 h-48 p-2 rounded-box  ">
                      <li className="hover:bg-secondary focus:bg-secondary ">
                        <a>
                         <AiFillHome className="text-2xl" />
                           Home
                        </a>
                      </li>
                      <li className="hover:bg-secondary focus:bg-secondary">
                        <a><AiFillInfoCircle className="text-2xl" />
                           About
                        </a>
                      </li>
                      <li className="hover:bg-secondary focus:bg-secondary">
                        <a><AiOutlineVerticalLeft className="text-2xl" />
                           Contact
                        </a>
                      </li>
                   
                    </ul>
                </div>
            </div>
            <div className={Active ? normalButton : activeButton}
                onClick={() =>setActive(!Active)}>
            	&#9776;
          </div>
        </div>
        <div className="hidden p-2 py-0 md:flex text-primary">
            <ul class="menu menu-horizontal ml-3">
              <li className='hover:ring-2 ring-blue-900 h-12 rounded-xl hover:bg-primary hover:text-white hover:border border-white mr-1' ><a>Home</a></li>
              <li className='hover:ring-2 ring-blue-900 h-12 rounded-xl hover:bg-primary hover:text-white hover:border border-white mr-1'><a>Services</a></li>
              <li className='hover:ring-2 ring-blue-900 h-12 rounded-xl hover:bg-primary hover:text-white hover:border border-white mr-1'><a>About</a></li>
            </ul>
        </div>
        </div>
        <div class="navbar-center">
          <a class="btn border-0 bg-inherit hover:bg-inherit">
          <div className='preserve_3d'>
             <div className='flex items-center rounded-full px-3 pb-2 bg-white card_3d'> 
                  <div className='card-content_3d'>
                      <img src={Dablogo} alt="Dab site Logo" className='h-24 img_3d'/>
                  </div>
            </div>
          </div>
           
          </a>
        </div>
        <div class="navbar-end mr-3">  
            <button class="btn btn-ghost hover:bg-blue-700 btn-circle hover:text-white mr-2">
                <FaFacebookF className=' text-2xl'/>
            </button>
             <button class="btn btn-ghost btn-circle hover:text-white hover:bg-green-600">
                <FaWhatsapp className=' text-2xl'/>
            </button>
        </div>
      </div>
   </>
   );
  }
export default Navbar