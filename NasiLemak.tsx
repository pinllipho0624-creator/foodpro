import { Link } from 'react-router-dom';

export default function Laksa() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Laksa: Malaysia's Spicy Comfort Food
      </h1>
      
      <div className="text-gray-600 mb-8">
        <time>Last updated: December 2024</time>
      </div>

      <img 
        src="https://images.pexels.com/photos/28907751/pexels-photo-28907751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Bowl of laksa with noodles and toppings"
        className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
      />

      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">
          On a rainy afternoon or when you're feeling under the weather, nothing hits quite like a steaming 
          bowl of laksa. This spicy, coconut-based noodle soup is pure comfort food, Malaysian-style.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Two Main Types</h2>
        <p className="mb-4">
          When Malaysians talk about laksa, they're usually referring to one of two distinct varieties: 
          curry laksa (also called laksa lemak) and asam laksa. They're both called laksa, but that's 
          pretty much where the similarity ends.
        </p>
        <p className="mb-6">
          Curry laksa features a rich, creamy coconut milk broth infused with curry spices. It's warming, 
          slightly spicy, and incredibly satisfying. Asam laksa, on the other hand, is sour and tangy, 
          based on tamarind and fish. We'll focus on curry laksa here since it's more common across Malaysia.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Broth is Everything</h2>
        <p className="mb-4">
          A good laksa broth requires time and patience. The base typically includes coconut milk, curry 
          paste, lemongrass, galangal, and dried shrimp. Some cooks add candlenuts for body, tamarind for 
          a touch of sourness, and palm sugar for balance.
        </p>
        <p className="mb-6">
          The best laksa broths I've had were simmered for hours, allowing all those flavors to meld 
          together. You should taste the individual spices without any single element overpowering the 
          others. It's a delicate balance that takes practice to master.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Noodles and Toppings</h2>
        <p className="mb-4">
          Laksa usually features thick rice noodles (sometimes called laksa noodles), though yellow egg 
          noodles or rice vermicelli are also common. Some places give you a mix, which provides nice 
          textural variety.
        </p>
        <p className="mb-4">
          Standard toppings include fried tofu puffs (tau pok), which soak up the broth beautifully, 
          fish balls or fish cake, bean sprouts, and hard-boiled egg. The more generous vendors might 
          add prawns, chicken, or cockles.
        </p>
        <p className="mb-6">
          Fresh herbs and garnishes complete the bowl—Vietnamese coriander (daun kesum) adds a distinctive 
          peppery flavor, while laksa leaves provide an almost minty freshness. A spoonful of sambal on the 
          side lets you adjust the heat level to your liking.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Regional Variations</h2>
        <p className="mb-4">
          Different states have their own takes on laksa. Sarawak laksa, from East Malaysia, uses a unique 
          sambal-based paste that's quite different from curry laksa. Johor laksa features spaghetti noodles 
          instead of rice noodles—yes, really. It's one of those quirky adaptations that somehow works.
        </p>
        <p className="mb-6">
          Penang is famous for its asam laksa, which made it onto CNN's World's 50 Best Foods list. The 
          tangy, fish-based broth divides people—you either love its assertive sourness or you don't, 
          with little middle ground.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When and Where to Eat It</h2>
        <p className="mb-4">
          Unlike nasi lemak, which is primarily breakfast food, laksa works any time of day. I've had it for 
          breakfast, lunch, dinner, and even as a late-night supper. Each occasion feels appropriate.
        </p>
        <p className="mb-6">
          You'll find laksa at hawker centers, kopitiam (coffee shops), and dedicated laksa stalls. The best 
          ones tend to be small operations where they've been making the same recipe for decades. Look for 
          places with a steady stream of customers throughout the day—that's usually a good sign.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Slurping Sound</h2>
        <p className="mb-4">
          One thing about eating laksa—it's not a quiet meal. The combination of hot broth, long noodles, 
          and enthusiastic eaters creates a symphony of slurping. Don't be shy about it. Slurping is 
          perfectly acceptable and actually helps cool down the noodles.
        </p>
        <p className="mb-6">
          Use your spoon and chopsticks (or fork) to get a good mix of noodles, toppings, and broth in 
          each bite. The tofu puffs are especially good—they're like little broth sponges.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Makes Great Laksa</h2>
        <p className="mb-4">
          The broth should be rich but not overly heavy. You want to finish the whole bowl without feeling 
          weighed down. The coconut milk should add creaminess without making it taste like you're drinking 
          coconut soup.
        </p>
        <p className="mb-4">
          Spice level varies widely. Some vendors make it mild enough for kids, others will set your mouth 
          on fire. If you're unsure, ask for "medium spicy" and adjust from there with the sambal.
        </p>
        <p className="mb-6">
          The noodles should be cooked properly—not too soft, not too firm. They need to hold up to the 
          hot broth without turning to mush. Fresh noodles are always better than pre-packaged ones.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">A Bowl of History</h2>
        <p className="mb-4">
          Laksa represents the melting pot that is Malaysian cuisine. The coconut milk and spices show 
          Malay influence, the noodles point to Chinese heritage, and the complexity of flavors reflects 
          centuries of cultural exchange.
        </p>
        <p className="mb-6">
          Like many Malaysian dishes, laksa has evolved over time, with each generation and region adding 
          their own touches. The version you eat today might be quite different from what people ate fifty 
          years ago, but the essence remains—a comforting, flavorful bowl that brings people together.
        </p>

        <p className="mb-6">
          Whether you're seeking comfort, craving something spicy, or just want to experience a essential 
          part of Malaysian food culture, a good bowl of laksa delivers. It's one of those dishes that 
          reminds you why Malaysian cuisine deserves its reputation for bold, complex flavors.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/asam-laksa" className="text-blue-600 hover:underline">
            → Asam Laksa: The Tangy Version
          </Link>
          <Link to="/foods/curry-mee" className="text-blue-600 hover:underline">
            → Mee Goreng: Fried Noodles
          </Link>
          <Link to="/foods/char-kway-teow" className="text-blue-600 hover:underline">
            → Char Kway Teow: Wok-Fried Noodles
          </Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">
            → Nasi Lemak: Coconut Rice
          </Link>
        </div>
      </div>
    </article>
  );
}