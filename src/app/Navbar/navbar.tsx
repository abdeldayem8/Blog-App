
const Navbar = () => {
  return <>

<nav className="border-gray-200 dark:bg-gray-900" style={{backgroundColor:"#eee"}}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
    <div className="w-full md:block md:w-auto">
      <ul className="flex justify-center  md:space-x-8 rtl:space-x-reverse w-full md:w-auto">
        <li>
          <a href="/posts" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="/post" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Post</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}
export default Navbar
