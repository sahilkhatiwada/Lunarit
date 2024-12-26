export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-20 flex items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Lunar I.T. Solution
          <br />
          For Better Business
        </h1>
        <p className="text-gray-600 mb-8">
          Transform your business with our cutting-edge IT solutions designed
          for modern enterprises
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            About Us
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
          alt="IT Solutions"
          className="w-full object-cover rounded-lg "
        />
      </div>
    </div>
  );
}
