import { Link } from 'react-router-dom';

export default function NasiKerabu() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nasi Kerabu: The Blue Rice from Kelantan</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Nasi kerabu is one of those dishes that makes people do a double-take—the rice is blue. Actually blue. It's a specialty from Kelantan, the northeastern state of Malaysia, where they do things a bit differently from the rest of the country.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why is the Rice Blue?</h2>
        <p className="mb-4">The blue color comes from bunga telang (butterfly pea flowers). These flowers are steeped in water to create a natural blue dye, which is then used to cook the rice. It's completely natural, not food coloring, though the exact shade varies depending on the flowers and cooking method.</p>
        <p className="mb-6">Some versions are lighter, almost sky blue. Others are deep indigo. White rice nasi kerabu also exists, but the blue version is more iconic and photogenic.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Complete Package</h2>
        <p className="mb-4">Nasi kerabu isn't just about the rice—it's a complete meal with numerous components. Fresh herbs are essential: ulam (raw vegetables and herbs), kesum leaves, basil, long beans, and bean sprouts. The herb plate is huge, sometimes bigger than the rice portion.</p>
        <p className="mb-6">Accompaniments typically include ikan bakar (grilled fish), solok lada (chili stuffed with fish paste), budu (fermented fish sauce), kerisik (toasted coconut), fried chicken, salted egg, and fish crackers. It's a feast of flavors and textures.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Herb Experience</h2>
        <p className="mb-4">The abundance of fresh, raw herbs sets nasi kerabu apart from other Malaysian rice dishes. These aren't just garnishes—they're integral to the meal. Each herb brings different flavors: peppery, bitter, aromatic, or slightly sour.</p>
        <p className="mb-6">Eating all those raw vegetables and herbs is believed to have health benefits, providing vitamins and aiding digestion. Whether you believe in the health claims or not, the freshness and variety add a unique dimension to the dish.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Budu: The Acquired Taste</h2>
        <p className="mb-4">Budu is fermented fish sauce specific to Kelantan and Terengganu. It's pungent, salty, and definitely an acquired taste. Mixed with lime juice, chilies, and shallots, it becomes the condiment that ties nasi kerabu together.</p>
        <p className="mb-6">If you're new to budu, start with a small amount. Its strong umami flavor might be overwhelming initially, but it grows on you. Kelantanese people love it and use it generously.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Regional Pride</h2>
        <p className="mb-4">Nasi kerabu is deeply associated with Kelantan identity. While you can find it elsewhere in Malaysia, Kelantanese insist the best versions are back home. It's part of regional pride and cultural identity.</p>
        <p className="mb-6">The Kelantanese dialect, customs, and food differ noticeably from the rest of Malaysia, with nasi kerabu being one of the most distinctive food markers of this difference.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Breakfast Tradition</h2>
        <p className="mb-4">In Kelantan, nasi kerabu is commonly eaten for breakfast—yes, all those components first thing in the morning. The meal provides substantial energy and nutrition to start the day.</p>
        <p className="mb-6">Outside Kelantan, it's eaten any time of day. The rise of nasi kerabu restaurants in other states has introduced more Malaysians to this distinctive dish.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Nasi Kerabu</h2>
        <p className="mb-4">The herbs should be fresh and crisp, not wilted. The rice should be evenly colored and fragrant. The accompaniments should be varied—a bare-bones version doesn't do the dish justice.</p>
        <p className="mb-6">If you're in Kuala Lumpur or other major cities, look for restaurants specifically advertising Kelantanese food. Morning markets in Kelantan have vendors selling nasi kerabu wrapped in banana leaves—the most authentic experience.</p>
        
        <p className="mb-6">Nasi kerabu demonstrates how Malaysian cuisine varies regionally. What's normal in Kelantan—blue rice, lots of raw herbs, fermented fish sauce—seems exotic elsewhere in the country. That diversity within a relatively small nation is part of what makes Malaysian food culture so interesting.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
          <Link to="/foods/nasi-dagang" className="text-blue-600 hover:underline">→ Nasi Dagang</Link>
          <Link to="/foods/ikan-bakar" className="text-blue-600 hover:underline">→ Ikan Bakar</Link>
          <Link to="/foods" className="text-blue-600 hover:underline">→ All Malaysian Foods</Link>
        </div>
      </div>
    </article>
  );
}