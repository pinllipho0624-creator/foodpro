import { Link } from 'react-router-dom';

export default function BananaLeafRice() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Banana Leaf Rice: A South Indian Feast in Malaysia</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Eating banana leaf rice isn't just about the food—it's an experience. Rice and curries served on a fresh banana leaf, with unlimited vegetable sides and the ritual of eating with your hands. It's messy, interactive, and absolutely delicious.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Concept</h2>
        <p className="mb-4">Banana leaf rice comes from South Indian tradition but has become thoroughly Malaysian. A banana leaf serves as your plate—eco-friendly and adding subtle aromatic notes to the food. White rice forms the base, surrounded by various curries, vegetables, papadum, and pickles.</p>
        <p className="mb-6">The standard setup includes three to four vegetable dishes (usually beans, cabbage, rasam, and dhal), papadum crackers, and your choice of meat curry—chicken, fish, mutton, or sometimes crab. Many places operate on an unlimited vegetable refill system.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Eat It</h2>
        <p className="mb-4">Traditionally, you eat with your right hand. Mix small amounts of rice with curry and vegetables, using your fingers to form a loose ball, then guide it into your mouth with your thumb. It takes practice, but food tastes different when eaten this way—more sensory, more engaging.</p>
        <p className="mb-6">If eating with hands isn't your thing, asking for utensils is perfectly acceptable. Don't feel pressured to conform if you're not comfortable. The important part is enjoying the food.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Banana Leaf Etiquette</h2>
        <p className="mb-4">When you're done eating, fold the banana leaf toward you—this signals you enjoyed the meal. Folding it away supposedly indicates you didn't like it, though most restaurants just appreciate any clear signal you're finished.</p>
        <p className="mb-6">Don't be shy about asking for more vegetables or rice. Most places pride themselves on generous servings and won't mind refilling. The curries and meat, however, aren't usually unlimited.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Components</h2>
        <p className="mb-4">Rasam, the thin, tangy soup, is meant to be mixed with rice—it aids digestion and adds a sour element that balances the rich curries. Dhal provides protein and creamy texture. The vegetable curries offer different flavors and textures.</p>
        <p className="mb-6">Papadum should be crispy and fresh. Break it into pieces and eat it with the curries. The pickles and chutneys on the side add bursts of flavor—mango pickle is particularly popular, though it can be quite spicy.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vegetarian Paradise</h2>
        <p className="mb-4">Banana leaf rice restaurants are excellent for vegetarians. The vegetable options are extensive and flavorful, not just afterthoughts. Many South Indians are vegetarian for religious reasons, so the meatless options have been perfected over generations.</p>
        <p className="mb-6">Even if you're not vegetarian, trying a full vegetarian banana leaf meal is worthwhile. You might be surprised by how satisfying it is.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Value for Money</h2>
        <p className="mb-4">Banana leaf rice offers excellent value. The unlimited vegetables mean you can eat until you're genuinely full. Prices are reasonable, usually ranging from affordable to mid-range depending on the protein you choose.</p>
        <p className="mb-6">Business lunch sets often provide the best deals—same food, lower prices during off-peak hours.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Banana Leaf Rice</h2>
        <p className="mb-4">Look for restaurants with high turnover—fresh food is crucial. The banana leaves should look vibrant green, not brown or dried out. The vegetables should appear freshly cooked, not sitting under heat lamps for hours.</p>
        <p className="mb-6">Brickfields in Kuala Lumpur, also known as Little India, has numerous excellent banana leaf restaurants. Busy lunch hours are actually a good time to visit because everything will be fresh.</p>
        
        <p className="mb-6">Banana leaf rice embodies Malaysian-Indian food culture—generous, flavorful, and communal. It's comfort food that happens to be relatively healthy, especially if you load up on vegetables. Whether you go vegetarian or add meat, it's a meal that satisfies on multiple levels.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/roti-canai" className="text-blue-600 hover:underline">→ Roti Canai</Link>
          <Link to="/foods/rendang" className="text-blue-600 hover:underline">→ Rendang</Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
          <Link to="/foods/teh-tarik" className="text-blue-600 hover:underline">→ Teh Tarik</Link>
        </div>
      </div>
    </article>
  );
}