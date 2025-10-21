import { useSelector } from "react-redux";
import Cart from "../cart/cart";

const CartSidebar = ({ toggleSidebar, isOpen }) => {

    const cartItems = useSelector((state) => state.cart)

    return (
        <>
            {/* Overlay */}
            <div
                aria-hidden={!isOpen}
                onClick={toggleSidebar}
                className={`fixed inset-0 z-40 backdrop-blur-sm bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />
            {/* Sidebar */}
            <aside
                aria-hidden={!isOpen}
                className={`font-semiBold fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <Cart items={cartItems} toggleSidebar={toggleSidebar} />
            </aside>
        </>
    );
};

export default CartSidebar;
