import Link from "next/link"

export default function Navbars(){
    return(
    <div className="flex justify-between items-center px-8 py-4">
  <h1 className="text-lg font-bold">Khan`s Collection</h1>
  <nav className="flex space-x-4 text-[#737373] text-[14px]">
  <Link href="/" className="hover:text-blue-700">
          home
        </Link>
        <Link href="/productlist" >
         product
        </Link>
        <Link href="/pricing" >
          pricing
        </Link>
        <Link href="/contact">
          contact
          </Link>
  </nav>
  <div className="flex gap-[21px]">
    <a href="#" className="text-[#23A6F0]">Login</a>
    <button className="bg-[#23A6F0] text-[#FFFFFF] px-4 py-2 rounded">Become a member</button>
  </div>
  </div>
)

}
