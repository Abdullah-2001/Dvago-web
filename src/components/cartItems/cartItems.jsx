import SvgIcon from "../../assets/icons/svg/icons";
import { colors } from "../../utils/colors";
import { size } from "../../utils/responsiveFonts";
import Button from "../ui/button";

const CartItems = ({ handleRemoveItem, handleIncQty, handleDecQty, item }) => {
    return (
        <div
            key={item.id}
            className="flex gap-4 items-start bg-white rounded-lg p-3 shadow-sm"
        >
            <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
            />

            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-medium truncate" style={{ fontSize: size.paragraphSmall }}>
                            {item.name}
                        </h4>
                        <p className="mt-1" style={{ color: colors.grey, fontSize: size.paragraphSmall }}>{item.description}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-semibold">
                            ${item.discountedPrice}
                        </div>
                        <div className="mt-2 cursor-pointer" onClick={() => handleRemoveItem(item)}>
                            <SvgIcon name="cross" className="w-4 h-4 text-gray-700 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Qty control */}
                <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center rounded-md overflow-hidden" style={{ borderColor: colors.lightGrey3 }}>
                        <Button
                            onClick={() => handleDecQty(item)}
                            variant="secondary"
                            className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                        >
                            <SvgIcon name="minus" className="w-4 h-4 text-gray-700 cursor-pointer" />
                        </Button>
                        <div className="min-w-[36px] text-center text-sm">
                            {item.qty}
                        </div>
                        <Button
                            onClick={() => handleIncQty(item)}
                            variant="secondary"
                            className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                        >
                            <SvgIcon name="plus" className="w-4 h-4 text-gray-700 cursor-pointer" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;