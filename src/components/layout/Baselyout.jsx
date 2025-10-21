import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import useToggle from '../../hooks/useToggle';
import { useSelector } from 'react-redux';

const BaseLayout = () => {

  const { isOpen, toggle } = useToggle();
  const cartItems = useSelector((state) => state.cart) 
  console.log(cartItems);

  return (
    <div>
      <Navbar toggleSidebar={toggle} />
      <Sidebar toggleSidebar={toggle} isOpen={isOpen} />
      <Outlet />
    </div>
  );
};

export default BaseLayout;