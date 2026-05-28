import { Link } from 'react-router-dom';

export default function MeeGoreng() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mee Goreng: Malaysia's Spicy Fried Noodles</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Mee goreng translates simply to "fried noodles," but that plain name doesn't capture the explosion of flavors in this Malaysian-Indian dish. Sweet, spicy, savory, and tangy all at once—it's organized chaos on a plate.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Indian-Malaysian Fusion</h2>
        <p className="mb-4">Mee goreng belongs to Malaysian-Indian Muslim (mamak) cuisine, representing that unique fusion of Indian cooking techniques with local ingredients and Chinese-style noodles. It's one of those dishes that could only exist in Malaysia's multicultural environment.</p>
        <p className="mb-6">The base is yellow egg noodles, stir-fried with a sweet and spicy sauce that typically includes tomato sauce, soy sauce, and chili paste. Vegetables like cabbage, tomatoes, and bean sprouts add freshness and crunch.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Sauce Makes It</h2>
        <p className="mb-4">What sets mee goreng apart from other fried noodles is the sauce. It's sweeter than you'd expect, with tomato sauce and sometimes sweet soy sauce contributing sugar alongside the savory elements. Chili paste brings heat, while the combination of different sauces creates complexity.</p>
        <p className="mb-6">Every mamak has their own ratio of sweet to spicy to savory. Some make it quite sweet, almost ketchup-forward. Others amp up the chili. Finding your preferred balance is part of the fun.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Variations</h2>
        <p className="mb-4">Mee goreng mamak is the standard version with chicken, beef, or mutton. Mee goreng seafood features prawns and sometimes squid. Vegetarian versions exist but are less common. Some places add potato chunks or fried tofu for extra substance.</p>
        <p className="mb-6">The protein is usually seasoned and sometimes partially fried before being tossed with the noodles. Eggs are often added—scrambled into the noodles or fried sunny-side up on top.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mamak Stall Essential</h2>
        <p className="mb-4">Along with roti canai and teh tarik, mee goreng forms the holy trinity of mamak stall food. It's available all day and all night, satisfying cravings at any hour. The portions tend to be generous—one plate can easily satisfy two people if you're not extremely hungry.</p>
        <p className="mb-6">Watching mamak cooks work is entertaining. They manage multiple woks simultaneously, tossing noodles with practiced ease while juggling orders. The kitchen is usually visible, which adds to the experience.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accompaniments</h2>
        <p className="mb-4">Mee goreng often comes with lime wedges on the side—squeeze them over the noodles for brightness that cuts through the richness. Some places provide extra chili paste for those who want more heat. Pickled green chilies are sometimes offered too.</p>
        <p className="mb-6">The noodles should be slightly wet with sauce but not swimming in it. Each strand should be coated, with little pools of sauce collecting around the vegetables and protein.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Not to Be Confused With...</h2>
        <p className="mb-4">Mee goreng is different from char kway teow (which uses flat rice noodles and is Chinese in origin) and different from Malay-style mee goreng, which tends to be less sweet and uses different seasonings. The mamak version is distinct and sits in its own category.</p>
        <p className="mb-6">Maggi goreng is related—it's the same concept but uses instant noodles instead of fresh yellow noodles. It's another mamak favorite with its own devoted following.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Mee Goreng</h2>
        <p className="mb-4">The noodles should have some char from the wok but not be burnt. They should be firm, not mushy—overcooked mee goreng is disappointing. The sauce should coat everything evenly, with good distribution of vegetables and protein.</p>
        <p className="mb-6">Busy mamak stalls that do high volume tend to make better mee goreng because they're constantly cooking fresh batches. If the noodles look like they've been sitting around under a warmer, choose something else.</p>
        
        <p className="mb-6">Mee goreng might not win any sophisticated food awards, but it doesn't need to. It's honest, flavorful, filling food that tastes good at 2 PM and at 2 AM. That kind of versatility and consistency is its own form of excellence.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/char-kway-teow" className="text-blue-600 hover:underline">→ Char Kway Teow</Link>
          <Link to="/foods/roti-canai" className="text-blue-600 hover:underline">→ Roti Canai</Link>
          <Link to="/foods/teh-tarik" className="text-blue-600 hover:underline">→ Teh Tarik</Link>
          <Link to="/foods/laksa" className="text-blue-600 hover:underline">→ Laksa</Link>
        </div>
      </div>
    </article>
  );
}