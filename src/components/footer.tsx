// components/Footer.js

const Footer = () => {
    return (
      <footer className=" text-gray-800 py-8  bottom-0 w-full border-t-2">
        <div className="container mx-auto px-6">
          {/* Top Footer Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <img src="/images/logo.png" alt="Company Logo" className="mb-4" />
              <p className="text-sm text-gray-600 mb-4">
                Providing high-quality services to our customers, ensuring top-notch satisfaction.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-600">Home</a></li>
                <li><a href="#" className="hover:text-gray-600">Shop</a></li>
                <li><a href="#" className="hover:text-gray-600">About Us</a></li>
                <li><a href="#" className="hover:text-gray-600">Contact</a></li>
              </ul>
            </div>
  
            {/* Address & Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <p className="text-sm text-gray-600 mb-2">123 Main Street, City, State</p>
              <p className="text-sm text-gray-600 mb-2">Phone: (123) 456-7890</p>
              <p className="text-sm text-gray-600 mb-2">Email: info@company.com</p>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-2xl hover:text-gray-600"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-2xl hover:text-gray-600"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-2xl hover:text-gray-600"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-2xl hover:text-gray-600"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
  
          {/* Bottom Footer Section */}
          <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  