export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">GoodGalRiyak</h1>
      <ul className="flex space-x-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Articles</li>
        <li className="hover:underline cursor-pointer">About</li>
      </ul>
    </nav>
  );
}
