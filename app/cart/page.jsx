"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { IoTrashBin } from "react-icons/io5";
import { useEffect, useState } from "react";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartTotal,
  selectCartCount,
} from "../../redux/cartSlice";

const Page = () => {
  const cartItems = useSelector((state) => state.cart);
  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="text-6xl">🛒</div>
        <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-400 text-sm">
          Looks like you haven't added anything yet.
        </p>
        <Link
          href="/products"
          className="mt-2 px-6 py-2.5 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Your Cart
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              {itemCount} item{itemCount !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="text-xs text-red-400 border border-red-300 px-4 py-1.5 rounded-full hover:bg-red-50 transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1 flex flex-col gap-4 w-full">
            {cartItems.map((item) => (
              <CartProductCard key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>

          <div className="w-full lg:w-[320px] bg-white rounded-2xl shadow-md p-6 sticky top-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="flex flex-col gap-3 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Subtotal ({itemCount} items)</span>
                <span className="font-medium text-gray-800">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>
            </div>

            <div className="border-t pt-4 flex justify-between items-center mb-6">
              <span className="font-bold text-gray-800">Total</span>
              <span className="text-2xl font-bold text-red-500">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white font-semibold py-3 rounded-xl text-sm">
              Proceed to Checkout
            </button>

            <Link
              href="/products"
              className="block text-center mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CartProductCard = ({ item, dispatch }) => {
  const { id, thumbnail, title, price, category, quantity } = item;

  const handleQuantity = (value) => {
    const next = quantity + value;
    if (next <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: next }));
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow">
      <div className="w-full sm:w-[140px] h-[160px] sm:h-[120px] rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          width={140}
          height={120}
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link href={`/details/${id}`}>
              <h2 className="text-base font-bold text-gray-900 hover:text-red-500 transition-colors line-clamp-2 leading-snug">
                {title}
              </h2>
            </Link>
            <span className="inline-block mt-1.5 text-xs font-medium text-white bg-red-400 px-3 py-0.5 rounded-full capitalize">
              {category}
            </span>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(id))}
            className="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0 p-1"
            aria-label="Remove item"
          >
            <IoTrashBin size={18} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <p className="text-lg font-bold text-red-500">
            ${(price * quantity).toFixed(2)}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantity(-1)}
              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:border-red-300 transition-colors font-bold text-sm"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-semibold text-gray-800">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantity(1)}
              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:border-red-300 transition-colors font-bold text-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
