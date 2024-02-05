import { useDispatch, useSelector } from "react-redux";
import { addToCart, removedFromCart } from "../../store/slices/cart-slice";

export default function Product({ product }) {
  const dispach = useDispatch();
  const { cart } = useSelector((state) => state);

  function handlAddToCart() {
    dispach(addToCart(product));
  }
  function handleRemoveFromCart() {
    dispach(removedFromCart(product.id));
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-orange-600 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-600 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handlAddToCart
            }
            className="bg-orange-600 text-white border-2 rounded-lg font-bold p-4 "
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
