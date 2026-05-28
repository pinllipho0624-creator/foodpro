import { Link } from 'react-router-dom';

export default function Cendol() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cendol: Malaysia's Refreshing Shaved Ice Dessert</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">When the Malaysian heat becomes unbearable, there's one dessert that provides instant relief—cendol. This sweet iced dessert combines shaved ice, green rice flour jelly, coconut milk, and palm sugar into something that's both refreshing and indulgent.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Cendol?</h2>
        <p className="mb-4">Cendol features green, worm-like strands of rice flour jelly flavored with pandan leaves. These sit beneath a mountain of shaved ice, all drizzled with thick coconut milk and gula melaka (palm sugar syrup). The combination of textures and flavors—cold, sweet, creamy, and slightly floral—makes it uniquely Southeast Asian.</p>
        <p className="mb-6">The pandan gives the jelly its distinctive green color and subtle vanilla-like aroma. Palm sugar adds complex sweetness that's different from regular sugar, with caramel and molasses notes. Coconut milk brings richness that balances the ice.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Origins and Variations</h2>
        <p className="mb-4">Both Malaysia and Indonesia claim cendol, and honestly, it belongs to the whole region. Different areas have their own takes. Some add red beans, sweet corn, or attap chee (palm seeds). In Melaka, cendol is particularly famous, with specific streets dedicated to vendors selling their versions.</p>
        <p className="mb-6">The basic concept remains the same everywhere—shaved ice, pandan jelly, coconut milk, and sweet syrup. But the proportions, additional ingredients, and sweetness levels vary significantly.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Making Cendol Jelly</h2>
        <p className="mb-4">The green jelly noodles are made from rice flour mixed with pandan juice or extract. The mixture is cooked until it thickens, then pushed through a sieve with large holes into ice water. This creates those characteristic worm-like strands.</p>
        <p className="mb-6">Good cendol jelly should be soft and slightly chewy with a delicate texture. It shouldn't be too firm or too mushy. The pandan flavor should be noticeable but not overwhelming.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Perfect Cendol</h2>
        <p className="mb-4">Great cendol requires quality ingredients. The ice must be finely shaved, almost snow-like, not chunky. The coconut milk should be fresh and creamy. The gula melaka needs to be made from real palm sugar, not just brown sugar and water.</p>
        <p className="mb-6">Everything should be cold—really cold. On a hot day, that first spoonful of icy cendol is pure bliss. Mix everything together as you eat so you get the jelly, ice, coconut milk, and palm sugar in every bite.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When to Eat Cendol</h2>
        <p className="mb-4">Cendol works as a dessert, snack, or afternoon treat. There's no wrong time for it, really, though it's especially popular during hot afternoons. Street vendors often set up near busy shopping areas, markets, or tourist spots.</p>
        <p className="mb-6">Some people eat it after spicy food to cool down. Others have it as a pick-me-up between meals. The sugar and coconut provide quick energy, while the ice is refreshing.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cendol Durian</h2>
        <p className="mb-4">In recent years, cendol durian has become popular—regular cendol topped with fresh durian flesh. This is controversial. Durian lovers think it's genius. Durian haters think it's an abomination. If you fall into the first category and see it available, definitely try it.</p>
        <p className="mb-6">The creamy, pungent durian plays surprisingly well with the sweet coconut milk and palm sugar. But it's definitely not for everyone.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Cendol</h2>
        <p className="mb-4">Look for vendors with steady customer flow—cendol components can spoil in the heat, so you want places that make fresh batches regularly. The ice should be finely shaved, not crushed into chunks. The coconut milk should smell fresh, not sour.</p>
        <p className="mb-6">If you're in Melaka, trying the local cendol is almost mandatory. Several famous stalls there have been operating for decades, perfecting their recipes. The queues can be long, but Melakans insist their cendol is the best.</p>
        
        <p className="mb-6">Cendol represents the Malaysian approach to desserts—not overly refined or fancy, just simple ingredients combined in a way that makes perfect sense for the tropical climate. It's comfort food in frozen form, a sweet reminder that sometimes the best solutions are the simplest ones.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/ais-kacang" className="text-blue-600 hover:underline">→ Ais Kacang: Shaved Ice</Link>
          <Link to="/foods/apam-balik" className="text-blue-600 hover:underline">→ Apam Balik: Pancake</Link>
          <Link to="/foods/kuih-melayu" className="text-blue-600 hover:underline">→ Kuih Melayu: Traditional Sweets</Link>
          <Link to="/foods/durian" className="text-blue-600 hover:underline">→ Durian: King of Fruits</Link>
        </div>
      </div>
    </article>
  );
}