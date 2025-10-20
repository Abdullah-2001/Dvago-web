import Logo from '../../assets/logo2.svg';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Linkedin from '../../assets/linkedin.svg';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-8">
                <img width={200} src={Logo} alt="" />
              </div>

              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 text-sm mb-1">Tel: +1 (800) 826-8018</p>
              <p className="text-gray-400 text-sm mb-6">Email: info@appicoders.com</p>

              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <img src={Facebook} />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <img src={Twitter} />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <img src={Linkedin} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Appicoders Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-red-600">»</span>
                <span>IPHONE APPLICATION DEVELOPMENT</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-red-600">»</span>
                <span>ANDROID APPLICATION DEVELOPMENT</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-red-600">»</span>
                <span>ENTERPRISE APP DEVELOPMENT</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 APPICODERS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;