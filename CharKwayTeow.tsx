import { Link } from 'react-router-dom';

export default function BakKutTeh() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bak Kut Teh: Herbal Pork Rib Soup</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Bak kut teh translates to "meat bone tea," though there's no actual tea in it. This herbal pork rib soup is a Malaysian-Chinese favorite that warms you up and allegedly provides numerous health benefits from its complex blend of Chinese medicinal herbs.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Bak Kut Teh?</h2>
        <p className="mb-4">At its core, bak kut teh is pork ribs simmered for hours in a broth infused with garlic, white pepper, and a mixture of Chinese herbs and spices. The exact herb blend varies by region and shop, but commonly includes angelica root, Solomon's seal, cinnamon, star anise, and various others.</p>
        <p className="mb-6">The result is a deeply flavorful, aromatic soup that's both comforting and restorative. The pork should be fall-off-the-bone tender, and the broth should have layers of flavor from all those herbs.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Two Main Styles</h2>
        <p className="mb-4">Klang-style bak kut teh features a darker, more peppery broth with stronger herbal notes. This is considered the original style, developed in the port town of Klang. Teochew-style (also called Singapore-style) is lighter, clearer, and more pepper-forward with milder herb flavor.</p>
        <p className="mb-6">Malaysians have strong opinions about which style is superior. Klang devotees find Teochew-style too light and lacking depth. Teochew fans think Klang-style is too heavy and medicinal. Try both and decide for yourself.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Eat It</h2>
        <p className="mb-4">Bak kut teh is typically eaten with plain white rice, which absorbs the flavorful broth. Youtiao (Chinese dough fritters) are traditional accompaniments—dip them in the soup to soak up all that herby goodness.</p>
        <p className="mb-6">Side dishes often include braised peanuts, salted vegetables, fried tofu, and century egg. Chinese tea, usually oolong or pu-erh, is served alongside to cut through the richness (this is where the "teh" in the name comes from).</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Health Benefits</h2>
        <p className="mb-4">Many of the herbs used in bak kut teh are believed to have medicinal properties in traditional Chinese medicine. The soup is said to boost immunity, improve circulation, and provide warming energy. Whether these claims hold up scientifically is debatable, but the soup certainly feels restorative.</p>
        <p className="mb-6">Older Chinese Malaysians often swear by bak kut teh as a cure for various ailments. At minimum, the garlic and pepper have known health benefits, and the hot broth is soothing when you're feeling under the weather.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Origins</h2>
        <p className="mb-4">Bak kut teh was allegedly created by Chinese immigrant laborers working in Klang's port. They needed affordable, nutritious food that would give them energy for hard physical work. Pork bones were cheap, and adding medicinal herbs made the dish more nourishing.</p>
        <p className="mb-6">Over time, it evolved from workers' sustenance to a beloved dish enjoyed across social classes. Today's bak kut teh restaurants range from simple shophouses to upscale establishments.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When to Eat Bak Kut Teh</h2>
        <p className="mb-4">Traditionally a breakfast dish, bak kut teh is now eaten any time. Some shops open early morning to catch the breakfast crowd, while others operate during lunch and dinner. The soup's warming properties make it especially popular on rainy days.</p>
        <p className="mb-6">Many Malaysian Chinese families eat bak kut teh regularly, considering it both comfort food and health food rolled into one steaming bowl.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Bak Kut Teh</h2>
        <p className="mb-4">The broth should be clear, not cloudy (unless you're having the Klang style, which tends to be darker). The pork should be tender but not mushy. The herbal aroma should be pronounced but not overwhelming. Good bak kut teh requires hours of simmering—rushed versions lack depth.</p>
        <p className="mb-6">Klang remains the pilgrimage site for serious bak kut teh enthusiasts. Several famous shops there have been operating for decades, each claiming to have the authentic recipe.</p>
        
        <p className="mb-6">Bak kut teh represents Malaysian-Chinese food culture—taking something humble (pork bones), elevating it with skill and tradition, and creating a dish that nourishes both body and soul. It's one of those foods that proves simple concepts, executed with care and good ingredients, can be extraordinary.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/hainanese-chicken-rice" className="text-blue-600 hover:underline">→ Hainanese Chicken Rice</Link>
          <Link to="/foods/char-kway-teow" className="text-blue-600 hover:underline">→ Char Kway Teow</Link>
          <Link to="/foods/laksa" className="text-blue-600 hover:underline">→ Laksa</Link>
          <Link to="/foods" className="text-blue-600 hover:underline">→ All Malaysian Foods</Link>
        </div>
      </div>
    </article>
  );
}