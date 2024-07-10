

function Footer() {
    return (
      <>
      <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Library App. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
      </>
    );
  }
  
  export default Footer;
  