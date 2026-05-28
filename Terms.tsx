import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover Malaysian Food
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Welcome to our Malaysian food blog. I started this site to share my love for the incredible flavors 
          and stories behind Malaysian cuisine. From street hawker stalls to family recipes passed down through 
          generations, there's so much to explore.
        </p>
      </div>

      <div className="mb-12">
        <img 
          src="https://images.pexels.com/photos/37239961/pexels-photo-37239961.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
          alt="Malaysian night market food stall"
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="prose max-w-none mb-12">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Malaysian food is more than just recipes. It's a reflection of the country's diverse cultural heritage, 
          blending Malay, Chinese, Indian, and indigenous influences into something truly unique. Each dish tells 
          a story of trade routes, migration, and the blending of traditions over centuries.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          If you've ever walked through a Malaysian hawker center, you know what I'm talking about. The mix of 
          aromas, the sizzle of woks over high heat, the chatter of vendors and customers—it's an experience 
          that stays with you. And the food? It's something you'll crave long after you've left.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Malaysian Dishes</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Link to="/foods/nasi-lemak" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/37113558/pexels-photo-37113558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Nasi Lemak"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Nasi Lemak - Malaysia's National Dish
                </h3>
                <p className="text-gray-600">
                  Fragrant coconut rice served with sambal, crispy anchovies, peanuts, and a boiled egg. 
                  This is the breakfast that defines Malaysian mornings.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/foods/satay" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/37211348/pexels-photo-37211348.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Satay skewers"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Satay - Grilled to Perfection
                </h3>
                <p className="text-gray-600">
                  Tender marinated meat grilled over charcoal and served with sweet peanut sauce. 
                  A street food favorite you can find everywhere.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/foods/laksa" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/28907751/pexels-photo-28907751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Laksa noodle soup"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Laksa - Spicy Noodle Soup
                </h3>
                <p className="text-gray-600">
                  Rich coconut curry broth with noodles, tofu puffs, and aromatic spices. 
                  Comfort food that packs a flavorful punch.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/foods/roti-canai" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/35447713/pexels-photo-35447713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Roti Canai"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Roti Canai - Flaky Flatbread
                </h3>
                <p className="text-gray-600">
                  Crispy on the outside, soft and layered inside. Best enjoyed with dhal curry or sugar.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link 
            to="/foods" 
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Browse All Malaysian Foods
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 -mx-4 px-4 py-12 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why I Started This Blog</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Growing up, I spent countless hours watching my grandmother cook in her small kitchen. She never 
            used measuring cups or written recipes—everything was done by feel, taste, and years of experience. 
            Those memories inspired me to document and share the stories behind Malaysian food.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This blog is my way of preserving those traditions and introducing others to the incredible diversity 
            of Malaysian cuisine. Whether you're planning a trip to Malaysia or just curious about the food, 
            I hope you find something here that inspires you.
          </p>
        </div>
      </section>
    </div>
  );
}