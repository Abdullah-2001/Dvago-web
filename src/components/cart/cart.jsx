import { useDispatch, useSelector } from "react-redux";
import SvgIcon from "../../assets/icons/svg/icons";
import CartItems from "../cartItems/cartItems";
import { decQty, getSubTotal, incQty, removeFromCart } from "../../store/cart/cartSlice";
import { useEffect, useMemo } from "react";
import Button from "../ui/button";
import { colors } from "../../utils/colors";

const Cart = ({ items, toggleSidebar }) => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    const subTotal = useSelector((state) => state.subTotal)

    const handleIncQty = (item) => {
        dispatch(incQty(item))
    }

    const handleDecQty = (item) => {
        dispatch(decQty(item))
    }

    const handleRemoveItem = (item) => {
        dispatch(removeFromCart(item))
    }

    useEffect(() => {
        dispatch(getSubTotal())
    }, [cartItems])

    return (
        <div>
            {/* Header */}
            <header className="flex items-center justify-between px-5 py-4 border-b">
                <div>
                    <h3 className="text-lg font-semibold">Your Cart</h3>
                    <p className="text-sm text-gray-500">{items.length} items</p>
                </div>
                {/* <div className="flex items-center gap-2"> */}
                {/* <p className="cursor-pointer text-sm text-red-600 hover:underline px-2 py-1 rounded" onClick={handleClearCart}>
                        Clear
                    </p> */}
                <SvgIcon name="cross" className="w-4 h-4 text-gray-700 cursor-pointer" onClick={toggleSidebar} />
                {/* </div> */}
            </header>

            {/* Items */}
            <div className="p-4 overflow-y-auto h-[calc(100%-16rem)] space-y-4">
                {items.length === 0 ? (
                    <div className="text-center text-gray-600 py-8">
                        <p className="text-xl">Your cart is empty</p>
                    </div>
                ) : items.map((item) => <CartItems item={item} handleRemoveItem={handleRemoveItem} handleIncQty={handleIncQty} handleDecQty={handleDecQty} />)}
            </div>

            {/* Footer / Summary */}
            <div className="border-t p-4 bg-gradient-to-t from-white to-gray-50">
                <div className="space-y-3">

                    <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-lg font-bold">{subTotal}</span>
                    </div>

                    <div className="pt-3 flex flex-col gap-2">
                        <Button className="font-semiBold py-[15px] px-[15px] h-10 rounded-full text-[14px] w-full">Checkout</Button>
                        <Button
                            className="font-semiBold py-[15px] px-[15px] h-10 rounded-full text-[14px] w-full"
                            variant="outline"
                            onClick={toggleSidebar}
                        >Continue shopping</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;