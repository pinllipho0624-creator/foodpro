import { Link } from 'react-router-dom';

export default function ApamBalik() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Apam Balik: Malaysia's Sweet Turnover Pancake</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">The smell of apam balik cooking is instantly recognizable—sweet, slightly caramelized, with hints of coconut. This thick pancake filled with peanuts, sugar, and creamed corn is street food comfort at its best.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Apam Balik?</h2>
        <p className="mb-4">Apam balik is a thick, fluffy pancake made from a batter of flour, eggs, sugar, coconut milk, and baking soda. The batter is poured onto a hot griddle, where it forms bubbles and puffs up. Before it's fully cooked, sugar, ground peanuts, and sometimes creamed corn are sprinkled on top.</p>
        <p className="mb-6">Once the bottom is golden and the top has set, it's folded in half (that's the "balik" part—it means turned or folded). The result is crispy on the outside with a soft, slightly sweet interior studded with crunchy peanuts.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Many Names</h2>
        <p className="mb-4">Depending on where you are in Malaysia, you might hear it called different names. Apam balik, terang bulan, martabak manis, ban jian kuih, and min jiang kueh all refer to basically the same thing, with minor regional variations.</p>
        <p className="mb-6">The name confusion reflects its spread across different communities—each adopted it and gave it their own local name.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Traditional vs. Modern Fillings</h2>
        <p className="mb-4">The classic filling is ground peanuts and sugar, sometimes with creamed corn for extra sweetness and moisture. This simple combination has been satisfying people for generations.</p>
        <p className="mb-6">Modern variations have gotten creative: chocolate, cheese, red bean paste, oreo cookies, even durian. Some places do combination fillings like peanut-chocolate or cheese-corn. Purists stick to the original, but the innovations can be surprisingly good.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Cooking Technique</h2>
        <p className="mb-4">Making good apam balik requires skill. The batter must be the right consistency—too thick and it won't spread properly, too thin and it won't have that fluffy texture. The griddle temperature needs to be precise—too hot burns the bottom before the top cooks, too cool results in dense, heavy pancakes.</p>
        <p className="mb-6">Watch the surface as it cooks. Those bubbles forming and popping are crucial—they create the characteristic spongy texture. Good vendors know exactly when to add the filling and when to fold.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Best Time to Eat It</h2>
        <p className="mb-4">Apam balik is afternoon and evening street food—you'll find vendors setting up as the day cools down. It makes a good tea-time snack or after-dinner treat. The sweet, comforting nature makes it perfect for satisfying cravings.</p>
        <p className="mb-6">It's best eaten fresh and warm, when the outside is still crispy and the inside is soft. If it sits too long, it loses that textural contrast.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Thin vs. Thick</h2>
        <p className="mb-4">Some regions make a thinner, crisper version, while others go for thick and fluffy. The thin version (sometimes called ban chang kuih) is more like a crepe, while the thick version is more like a soufflé pancake. Both have their fans.</p>
        <p className="mb-6">The thick version seems more common in Malaysia, with its soft, almost cake-like interior providing nice contrast to the crunchy peanuts.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Apam Balik</h2>
        <p className="mb-4">Look for vendors with steady business—apam balik is best fresh. The pancake should puff up nicely as it cooks, forming lots of small bubbles on the surface. The bottom should be golden brown, not pale or burnt.</p>
        <p className="mb-6">Don't be shy about watching the cooking process. Part of the fun is seeing the transformation from liquid batter to puffy pancake. Plus, the aroma while it's cooking is almost as good as eating it.</p>
        
        <p className="mb-6">Apam balik represents Malaysian street food culture—affordable, delicious, and bringing back childhood memories for many locals. It's not fancy, it's not trying to be anything other than what it is. Sometimes that's exactly what you want.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/kuih-melayu" className="text-blue-600 hover:underline">→ Kuih Melayu</Link>
          <Link to="/foods/cendol" className="text-blue-600 hover:underline">→ Cendol</Link>
          <Link to="/foods/kuih-lapis" className="text-blue-600 hover:underline">→ Kuih Lapis</Link>
          <Link to="/foods" className="text-blue-600 hover:underline">→ All Malaysian Foods</Link>
        </div>
      </div>
    </article>
  );
}