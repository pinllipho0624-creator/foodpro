import { Link } from 'react-router-dom';

export default function OtakOtak() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Otak-Otak: Grilled Spiced Fish Cake</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Otak-otak literally means "brains" in Malay, referring to the soft, paste-like texture of this fish cake. Don't let the name put you off—there are no actual brains involved, just fish, spices, and coconut cream wrapped in leaves and grilled to perfection.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Otak-Otak?</h2>
        <p className="mb-4">Otak-otak is a mixture of fish paste blended with spices, coconut milk, and sometimes coconut cream, then wrapped in banana leaves or coconut leaves before being grilled. The result is a soft, custardy fish cake with a beautiful orange-red color from the spices.</p>
        <p className="mb-6">The spice blend typically includes lemongrass, turmeric, galangal, chilies, and belacan (shrimp paste). Each vendor has their own ratio, creating variations in heat level, sweetness, and aromatic complexity.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Regional Differences</h2>
        <p className="mb-4">Malaysian otak-otak tends to be softer and creamier than the Indonesian or Singaporean versions. Muar in Johor is particularly famous for its otak-otak, which is sweeter and has a distinctive yellowish color.</p>
        <p className="mb-6">Penang otak-otak is spicier and often uses mackerel, giving it a stronger fish flavor. Some regions add grated coconut for texture, while others prefer a smooth paste.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Fish</h2>
        <p className="mb-4">Mackerel is the most common fish used, though tenggiri (Spanish mackerel) creates a more premium version. The fish is deboned and ground into a paste, often with a mortar and pestle for traditional preparations, though modern makers use food processors.</p>
        <p className="mb-6">The quality and freshness of the fish directly affects the final product. Good otak-otak should taste distinctly of fish without being overly fishy—a delicate balance achieved through fresh ingredients and proper seasoning.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Wrapping</h2>
        <p className="mb-4">Banana leaves or coconut fronds serve as natural wrappers that hold the mixture during grilling. As they char over the coals, they impart subtle aromatic notes to the otak-otak. The leaves also make convenient, biodegradable packaging.</p>
        <p className="mb-6">Unwrapping grilled otak-otak releases a wonderful aroma of charred leaves, coconut, and spices. It's part of the sensory experience.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Eat It</h2>
        <p className="mb-4">Otak-otak can be eaten on its own as a snack, or as part of a meal with rice. Some people eat it straight from the leaf, while others unwrap it first. There's no wrong method.</p>
        <p className="mb-6">It pairs well with simple white rice and cucumber slices, which provide cooling contrast to the spicy fish cake. Lime juice squeezed over adds brightness that cuts through the richness.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Street Food Classic</h2>
        <p className="mb-4">You'll find otak-otak at pasar malam (night markets), street food stalls, and specialized shops. It's typically sold by the piece, making it an affordable snack. The smell of otak-otak grilling is distinctive—you'll likely smell it before you see the stall.</p>
        <p className="mb-6">Some vendors grill otak-otak to order, while others sell pre-grilled pieces. Fresh off the grill is always better, still warm and aromatic from the charcoal.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Making It at Home</h2>
        <p className="mb-4">Making otak-otak at home is labor-intensive but possible. The fish needs to be carefully deboned and ground. The spice paste requires multiple ingredients pounded together. Wrapping each portion in leaves takes time and practice.</p>
        <p className="mb-6">Many Malaysian families have a favorite shop or vendor rather than making it themselves. The convenience and consistency of buying from experts who make it daily is hard to beat.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Makes Great Otak-Otak</h2>
        <p className="mb-4">The texture should be soft and custardy but still hold together when you bite into it. It shouldn't be rubbery or dry. The spice level should provide warmth without overwhelming the fish flavor. The color should be vibrant, indicating fresh spices.</p>
        <p className="mb-6">Good otak-otak has a pleasant aroma of coconut, lemongrass, and mild spice. If it smells overly fishy or sour, that's a warning sign of old fish or improper preparation.</p>
        
        <p className="mb-6">Otak-otak represents the Malaysian talent for transforming simple ingredients—fish, spices, coconut—into something special through technique and tradition. It's humble food elevated to comfort food status through generations of refinement.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/ikan-bakar" className="text-blue-600 hover:underline">→ Ikan Bakar</Link>
          <Link to="/foods/satay" className="text-blue-600 hover:underline">→ Satay</Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
          <Link to="/foods" className="text-blue-600 hover:underline">→ All Malaysian Foods</Link>
        </div>
      </div>
    </article>
  );
}