

function Header() {
    return (
      <>
       <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <span className="text-white text-2xl font-bold">Library App</span>
          </div>
          {/* Menu items */}
          <div className="flex-1 flex justify-center sm:items-stretch sm:justify-end">
            <div className="flex space-x-4">
              {/* Dummy menu items */}
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Home
              </span>
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Books
              </span>
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Authors
              </span>
              {/* Add more menu items as needed */}
            </div>
          </div>
        </div>
      </div>
    </nav>
      </>
    );
  }
  
  export default Header;
  