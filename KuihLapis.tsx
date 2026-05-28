import { Link } from 'react-router-dom';

export default function Durian() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Durian: The King of Fruits</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <img src="https://images.pexels.com/photos/34997023/pexels-photo-34997023.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Fresh durian fruit" className="w-full h-96 object-cover rounded-lg shadow-md mb-8"/>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">No fruit polarizes opinion quite like durian. Its smell has been compared to everything from sweet custard to rotting garbage. People either love it passionately or can't stand being in the same room. There's rarely middle ground.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Infamous Smell</h2>
        <p className="mb-4">Durian's smell is legendary. It's so pungent that it's banned in many hotels, airports, and public transportation. The aroma comes from sulfur compounds that some people find sweet and custardy, while others detect notes of sweaty socks and onions.</p>
        <p className="mb-6">For durian lovers, the smell is part of the appeal—it signals ripe, quality fruit. For haters, it's an unbearable stench. Interestingly, genetics might play a role in how you perceive durian's aroma, similar to how some people taste soap in cilantro.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Taste</h2>
        <p className="mb-4">If you can get past the smell, durian's flesh is creamy, almost custard-like in texture. The flavor is complex—sweet with hints of almond, caramel, and something savory that's hard to describe. Good durian should be rich without being cloying, sweet without being sugary.</p>
        <p className="mb-6">The texture varies depending on the variety and ripeness. Some types are firmer, others almost liquid. Some are sweeter, some more bitter. Experienced durian eaters have strong preferences for specific varieties.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Different Varieties</h2>
        <p className="mb-4">Malaysia grows numerous durian varieties, each with distinct characteristics. Musang King is famous for its creamy, bittersweet flesh and golden color. D24 is more affordable and has a milder, sweeter taste. Red Prawn (Udang Merah) is known for its vibrant orange flesh.</p>
        <p className="mb-6">Serious durian enthusiasts can identify varieties by sight, smell, and taste. They'll argue passionately about which is superior, though preference often comes down to whether you prefer sweet, bitter, or balanced flavors.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Durian Season</h2>
        <p className="mb-4">Peak durian season typically runs from May to August, though different regions and varieties have slightly different timing. During this period, roadside stalls selling durian pop up everywhere, and durian buffs make special trips to farms or known sellers.</p>
        <p className="mb-6">Prices fluctuate wildly based on availability, quality, and variety. Musang King can be expensive, especially early or late in the season. Budget varieties are more affordable but still deliver that distinctive durian experience.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Choose</h2>
        <p className="mb-4">Choosing durian is an art. Look for stems that are still fresh, not dried out. The fruit should feel heavy for its size. When shaken gently, you might hear the seeds moving inside—this can indicate ripeness, though interpretations vary.</p>
        <p className="mb-6">Many vendors will open the durian for you and let you inspect (and smell) before committing. Don't be shy about asking—buying durian is a significant investment, and you want to be sure.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Eating Durian</h2>
        <p className="mb-4">Eat durian with your hands, taking out the flesh seed by seed. The creamy flesh should slide out easily from ripe fruit. Traditionalists eat it plain, savoring the pure flavor. Some people like drinking water from the empty shell afterward, supposedly to reduce "heatiness."</p>
        <p className="mb-6">Don't mix durian with alcohol—there's a persistent belief (though scientifically questionable) that this combination is dangerous. Many Malaysians follow this advice anyway, better safe than sorry.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cultural Significance</h2>
        <p className="mb-4">Durian holds special status in Malaysian culture. It's called the King of Fruits for a reason—it's expensive, sought after, and inspires intense loyalty. Durian season is an event, with people planning trips specifically to indulge.</p>
        <p className="mb-6">The fruit appears in desserts, pastries, ice cream, and even savory dishes. Durian cendol, durian puffs, and durian ice cream are popular among enthusiasts, though purists prefer fresh fruit.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Should You Try It?</h2>
        <p className="mb-4">If you're in Malaysia, trying durian at least once is practically mandatory. Start with a small amount of a sweeter variety like D24. Give your palate time to adjust—many people who initially dislike durian eventually develop a taste for it.</p>
        <p className="mb-6">If you hate it, at least you've had the authentic experience. If you love it, welcome to the club—you'll understand why Malaysians get so passionate about this unusual fruit.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/cendol" className="text-blue-600 hover:underline">→ Cendol</Link>
          <Link to="/foods/tropical-fruits" className="text-blue-600 hover:underline">→ Other Tropical Fruits</Link>
          <Link to="/foods/kuih-melayu" className="text-blue-600 hover:underline">→ Kuih Melayu</Link>
          <Link to="/foods" className="text-blue-600 hover:underline">→ All Malaysian Foods</Link>
        </div>
      </div>
    </article>
  );
}