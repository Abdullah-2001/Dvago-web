import { useDispatch, useSelector } from "react-redux";
import SvgIcon from "../../assets/icons/svg/icons";
import CartItems from "../cartItems/cartItems";
import { decQty, getSubTotal, incQty, removeFromCart } from "../../store/cart/cartSlice";
import { useEffect, useMemo } from "react";
import Button from "../ui/button";
import { colors } from "../../utils/colors";
import { size } from "../../utils/responsiveFonts";

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
        <div className="overflow-y-auto h-[500px]">
            {/* Header */}
            <header className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: colors.lightGrey3 }}>
                <div>
                    <h3 className="font-semibold" style={{ fontSize: size.paragraphMedium }}>Your Cart</h3>
                    <p className="text-sm text-gray-500" style={{ fontSize: size.paragraphSmall }}>{items.length} items</p>
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
                        <p style={{ fontSize: size.paragraphMedium }}>Your cart is empty</p>
                    </div>
                ) : items.map((item) => <CartItems key={item.id} item={item} handleRemoveItem={handleRemoveItem} handleIncQty={handleIncQty} handleDecQty={handleDecQty} />)}
            </div>
            {/* Footer / Summary */}
            <div className="p-4">
                <div className="space-y-3">

                    <div className="flex justify-between items-center pt-2 border-t" style={{ borderColor: colors.lightGrey3 }}>
                        <span className="font-semibold" style={{ fontSize: size.paragraphMedium }}>Total</span>
                        <span className="font-bold" style={{ fontSize: size.paragraphMedium }}>${subTotal}</span>
                    </div>

                    <div className="pt-3 flex flex-col gap-2">
                        <Button className={`font-semiBold py-[15px] px-[15px] h-10 rounded-full w-full`} style={{fontSize: size.paragraphMedium}}>Checkout</Button>
                        <Button
                            className={`font-semiBold py-[15px] px-[15px] h-10 rounded-full w-full`}
                            variant="outline"
                            onClick={toggleSidebar}
                            style={{fontSize: size.paragraphMedium}}
                        >Continue shopping</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;