import { Link } from 'react-router-dom';

export default function HainaneseChickenRice() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hainanese Chicken Rice: Perfection in Simplicity</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Tender poached chicken. Fragrant rice cooked in chicken fat. Three dipping sauces. Cucumber slices. That's Hainanese chicken rice—deceptively simple on paper, but requiring precision to execute properly.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Origins</h2>
        <p className="mb-6">Chinese immigrants from Hainan Island brought this dish to Southeast Asia, where it evolved into something distinctly local. The Malaysian and Singaporean versions are now quite different from what you'd find in Hainan itself, adapted to local tastes and ingredients.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Chicken</h2>
        <p className="mb-4">The chicken is poached in broth until just cooked—overcook it and it becomes tough and dry. The meat should be silky, almost slippery in texture, with a delicate flavor. Immediately after cooking, the chicken is plunged into ice water to stop the cooking process and keep the skin from separating from the meat.</p>
        <p className="mb-6">The best chicken rice uses quality birds, often kampung chicken (free-range) for better flavor and texture. The poaching liquid becomes the base for soup that's usually served alongside.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Rice is Crucial</h2>
        <p className="mb-4">Average chicken rice places sometimes overlook the rice, but it's equally important as the chicken. The rice should be cooked in chicken stock and chicken fat, with ginger and pandan leaves adding aromatic complexity. Each grain should be separate, slightly oily, and incredibly fragrant.</p>
        <p className="mb-6">When done right, you could eat the rice alone and be satisfied. It should smell amazing and taste richly of chicken without being greasy.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Holy Trinity of Sauces</h2>
        <p className="mb-4">Ginger sauce is the essential one—fresh ginger pounded with salt and chicken oil. It should be pungent and slightly oily. Dark soy sauce adds saltiness and color. Chili sauce provides heat and acidity, usually made with red chilies, garlic, lime juice, and sometimes a touch of fermented soybean paste.</p>
        <p className="mb-6">Mix and match these sauces as you like. Some people use all three, others focus on just the ginger. There's no wrong way, though locals have strong opinions about proper ratios.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Simplicity as Philosophy</h2>
        <p className="mb-4">What makes Hainanese chicken rice special is how it celebrates simplicity. There's nowhere to hide—every element must be perfect because there are so few elements. The chicken must be tender, the rice must be fragrant, the sauces must be balanced.</p>
        <p className="mb-6">It's the opposite of complex dishes with dozens of ingredients. Here, technique and quality ingredients are everything.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Roasted vs. Poached</h2>
        <p className="mb-4">While the traditional version uses poached chicken, many places also offer roasted chicken. The roasted version has crispier skin and a smokier flavor but loses some of the silky texture. Both have their merits and devoted followers.</p>
        <p className="mb-6">Some people order half poached, half roasted to get the best of both worlds.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Great Chicken Rice</h2>
        <p className="mb-4">The chicken should look glossy with smooth, intact skin. If the skin is torn or the chicken looks dry, that's a warning sign. The rice should be served hot with visible sheen from the chicken fat. The ginger sauce should smell powerfully of fresh ginger, not jarred paste.</p>
        <p className="mb-6">High turnover is crucial—chicken rice doesn't keep well, so places that sell lots of it throughout the day tend to be better. Morning through lunch is typically when you'll get the freshest preparations.</p>
        
        <p className="mb-6">Hainanese chicken rice demonstrates how Malaysian-Chinese cuisine takes something simple and perfects it through generations of refinement. It's comfort food at its finest—uncomplicated, satisfying, and impossible to tire of when done properly.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/char-siu" className="text-blue-600 hover:underline">→ Char Siu</Link>
          <Link to="/foods/roast-duck" className="text-blue-600 hover:underline">→ Roast Duck</Link>
          <Link to="/foods/wan-tan-mee" className="text-blue-600 hover:underline">→ Wantan Mee</Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
        </div>
      </div>
    </article>
  );
}