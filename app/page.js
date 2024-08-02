export default function HomePage() {
  return (
    <div className="bg-purple-100 min-h-screen">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-3xl font-bold">Your Logo</div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Profile</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded">Sign in</button>
      </header>

      <main className="container mx-auto p-4">
        <section className="text-center my-20">
          <h1 className="text-6xl font-bold mb-4">Innovate ideas for your products & Business</h1>
          <p className="text-xl">Agency that builds many amazing products to boost your business to the next level.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-200 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">28%</h2>
            <p>INVENTING THE FUTURE OF DESIGN</p>
          </div>
          <div className="bg-purple-300 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">55%</h2>
            <p>Grow since last day</p>
            <div className="flex mt-4 space-x-2">
              {/* Profile images */}
              <img src="/path/to/profile1.jpg" alt="Profile 1" className="w-10 h-10 rounded-full"/>
              <img src="/path/to/profile2.jpg" alt="Profile 2" className="w-10 h-10 rounded-full"/>
              <img src="/path/to/profile3.jpg" alt="Profile 3" className="w-10 h-10 rounded-full"/>
              <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">+2</span>
            </div>
          </div>
        </section>

        <section className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="bg-black text-white p-4 rounded-full">Global partners</div>
            <div className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full">★</div>
          </div>
          <p className="mt-4">We are officially partners with the world’s best brands. Subscribe to our newsletter.</p>
        </section>
      </main>
    </div>
  );
}
