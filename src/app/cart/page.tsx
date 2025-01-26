"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([
    {
      id: 1,
      name: "Bright Space",
      price: 180,
      quantity: 1,
      image: "/images/cart.webp",
    },
    {
      id: 2,
      name: "Rustic Vase Set",
      price: 210,
      quantity: 1,
      image: "/images/cart2.webp",
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(9.99);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + shipping);
  }, [cartItems, shipping]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <header className="mb-8">
  <Link href="/productlist">
    <button
      type="button"
      className="flex items-center px-6 py-3 bg-red-500 text-white font-medium text-sm rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300"
    >
      Continue Shopping
    </button>
  </Link>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Shopping Cart
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <section className="flex-1">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 shadow-md rounded-lg mb-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1 ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-base font-semibold text-red-500 mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500 p-2 rounded-md transition-colors"
                >
                  <Image
               src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
              alt="Icon"
              width={50}
              height={50}
             className="w-5 h-5"
             />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              Your cart is empty.
            </p>
          )}
        </section>

        {/* Order Summary Section */}
        {cartItems.length > 0 && (
          <aside className="bg-gray-50 dark:bg-gray-900 shadow-md p-6 rounded-lg lg:w-1/3">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between text-gray-600 dark:text-gray-400 mb-3">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400 mb-3">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 dark:text-gray-100 mt-4 border-t pt-4 border-gray-300 dark:border-gray-700">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <button className="mt-6 w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition-all">
                Proceed to Checkout
              </button>
            </Link>
          </aside>
        )}
      </div>
    </div>
  );
}

