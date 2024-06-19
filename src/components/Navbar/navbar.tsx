
const Navbar = () => {
  return <>

<nav className="border-gray-200" style={{backgroundColor:"#eee"}}>
  <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
    <div className="w-full md:block md:w-auto">
      <ul className="flex justify-center md:space-x-8 w-full ">
        <li>
          <a href="/posts" className="block py-2 px-3 text-gray-900 rounded   md:border-0 md:p-0 ">Home</a>
        </li>
        <li>
          <a href="/addpost" className="block py-2 px-3 text-gray-900 rounded  md:border-0 md:p-0 ">Create Post</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}
export default Navbar
