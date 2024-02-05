import { useDispatch } from "react-redux";
import { removedFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function hanldeRemovedFromCart() {
    dispatch(removedFromCart(cartItem.id));
  }
  return (
    <>
      <div className="flex items-center p-5 justify-between bg-gray-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <p className="text-xl text-white font-bold">{cartItem?.title}</p>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
          <div>
            <button
              onClick={hanldeRemovedFromCart}
              className="bg-orange-600 text-white  border-2 rounded-lg font-bold p-4 "
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
