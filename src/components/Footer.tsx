export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CreativeHub</h3>
            <p className="text-gray-600">
              Connecting talent with opportunities in the Web3 space.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Post a Job</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">How it Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Documentation</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} CreativeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};