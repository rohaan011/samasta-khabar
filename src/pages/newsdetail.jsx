import { useState } from "react";
import {
  Search,
  User,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function NewsArticlePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with Logo and top navigation */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Twitter size={18} className="text-gray-700" />
              <Instagram size={18} className="text-gray-700" />
              <Facebook size={18} className="text-gray-700" />
              <Youtube size={18} className="text-gray-700" />
            </div>

            {/* Logo */}
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
                Samasta Khabar
              </h1>
            </div>

            {/* Search and Sign in */}
            <div className="flex items-center space-x-4">
              <span className="hidden md:inline text-sm">11 March 2025</span>
              <div className="flex items-center">
                <span className="mr-1 text-sm">Search</span>
                <Search size={18} />
              </div>
              <div className="flex items-center">
                <span className="mr-1 text-sm">Sign in</span>
                <User size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-2">
          <ul className="flex justify-center space-x-6 md:space-x-8">
            <li className="text-gray-800 hover:text-gray-600">Home</li>
            <li className="text-gray-800 hover:text-gray-600">Politics</li>
            <li className="text-gray-800 hover:text-gray-600">Business</li>
            <li className="text-gray-800 hover:text-gray-600">Sports</li>
            <li className="text-gray-800 hover:text-gray-600">Health</li>
            <li className="text-gray-800 hover:text-gray-600">Technology</li>
            <li className="text-gray-800 hover:text-gray-600">World News</li>
            <li className="text-gray-800 hover:text-gray-600">Lifestyle</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm">
            Politics
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">
          National ID Card Not Mandatory For Citizens Above 90 To Access
          Services
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/api/placeholder/800/400"
            alt="Government official speaking at a podium"
            className="w-full h-auto rounded"
          />
          <div className="mt-2">
            <p className="text-sm">Rohan Prajapati</p>
            <p className="text-sm text-gray-600">10 March 2025</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose max-w-none">
          <p>
            In a move aimed at making public services more accessible to the
            country's oldest citizens, the Government of Nepal has officially
            announced that individuals aged 90 and above will no longer be
            required to present a National Identity Card to access government
            and administrative services. The exemption comes amid growing
            concerns regarding the difficulties faced by elderly citizens in
            completing the formal processes involved in obtaining the
            biometric-based National ID card.
          </p>
        </article>
      </main>
    </div>
  );
}
