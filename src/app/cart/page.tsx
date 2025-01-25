"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Define the type for a cart item
interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

const CartItem = ({ item, removeItem }: { item: CartItemProps; removeItem: (id: number) => void }) => (
  <div className="flex items-center p-4 border rounded-lg mb-4 border-gray-300 dark:border-gray-700">
    <Image
      src={item.image || "/placeholder.svg"}
      alt={item.name}
      width={200}
      height={200}
      className="rounded-lg mr-4"
    />
    <div className="flex-1">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="text-sm my-2">Quantity: {item.quantity}</p>
      <p className="text-red-500 font-bold">${item.price.toFixed(2)}</p>
    </div>
    <button
      onClick={() => removeItem(item.id)}
      className="text-gray-600 dark:text-gray-400 hover:text-red-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    </button>
  </div>
);

const OrderSummary = ({ subtotal, shipping, total }: OrderSummaryProps) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
    <div className="flex justify-between mb-2">
      <span>Subtotal</span>
      <span>${subtotal.toFixed(2)}</span>
    </div>
    <div className="flex justify-between mb-2">
      <span>Shipping</span>
      <span>${shipping.toFixed(2)}</span>
    </div>
    <div className="flex justify-between font-bold mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
      <span>Total</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <Link href="/checkout">
      <button className="w-full p-5 mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
        Proceed to Checkout
      </button>
    </Link>
  </div>
);

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
    <div className="max-w-5xl mx-auto p-8 font-sans">
      <div className="mb-8">
        <Link href="/productlist" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Continue Shopping
        </Link>
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeItem={removeItem} />
          ))}
        </div>

        <OrderSummary subtotal={subtotal} shipping={shipping} total={total} />
      </div>
    </div>
  );
}
