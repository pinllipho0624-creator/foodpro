import { Link } from 'react-router-dom';

export default function AsamLaksa() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Asam Laksa: Penang's Tangy Fish Soup</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Asam laksa divides people sharply. The tangy, fish-based soup with its assertive flavors either becomes an obsession or something you'll politely decline. There's rarely middle ground with this Penang specialty.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Makes It Different</h2>
        <p className="mb-4">Unlike curry laksa with its rich coconut milk broth, asam laksa is sour and savory. The base is fish stock made by boiling mackerel or sardines, then breaking the fish into flakes. Tamarind provides the signature sourness, balanced by torch ginger flower, lemongrass, and Vietnamese mint.</p>
        <p className="mb-6">The combination is complex—sour from tamarind, pungent from shrimp paste, aromatic from the herbs, with the fish providing umami depth. It's bold in a way that doesn't apologize for itself.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">A Penang Icon</h2>
        <p className="mb-4">While you can find asam laksa elsewhere in Malaysia, Penang owns this dish. CNN named it one of the world's 50 most delicious foods. Penangites have strong opinions about which stall makes the best version, arguments that can get surprisingly heated.</p>
        <p className="mb-6">The thick rice noodles are essential—they need to hold up to the intensely flavored broth. Toppings include cucumber, pineapple, onions, fresh mint, and lettuce. Many places add a dollop of hae ko (thick shrimp paste) on the side for those who want extra pungency.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Broth is Everything</h2>
        <p className="mb-4">Making good asam laksa broth requires time. The fish needs to be boiled until it breaks down, releasing all its flavor into the stock. The balance of sour, salty, and savory must be perfect—too much tamarind and it's mouth-puckeringly sour, too little and it loses its character.</p>
        <p className="mb-6">Fresh herbs make a huge difference. Dried substitutes don't provide the same aromatic punch that fresh torch ginger flower and Vietnamese mint deliver.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Eat It</h2>
        <p className="mb-4">Mix in the hae ko if you're feeling adventurous—it amplifies the shrimp flavor significantly. Squeeze lime over everything. Make sure you get noodles, fish flakes, and all the toppings in each spoonful for the complete experience.</p>
        <p className="mb-6">First-timers should start with a small bowl. The flavors are intense, and it's rich despite being non-creamy. If you love it, you'll finish and want more. If you don't, well, at least you tried something authentic.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Some People Don't Like It</h2>
        <p className="mb-4">The sourness can be off-putting if you're not expecting it or accustomed to it. The fishiness is prominent—this isn't subtle seafood flavor, it's front and center. The shrimp paste adds another layer of pungency that some find overwhelming.</p>
        <p className="mb-6">That's okay. Not every Malaysian food needs to be universally loved. Asam laksa is unapologetically itself, and those who appreciate it do so intensely.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Asam Laksa</h2>
        <p className="mb-4">In Penang, ask locals for recommendations. Tourist-focused places can be hit or miss, while neighborhood stalls often deliver exceptional versions. Look for places with strong fish aroma—it should smell distinctly of mackerel and tamarind.</p>
        <p className="mb-6">The broth should be slightly thick, not watery. There should be visible fish flakes throughout. The herbs should look fresh, not wilted. And there should always be that addictive balance of sour, savory, and aromatic.</p>
        
        <p className="mb-6">Asam laksa represents Penang's food culture—bold, distinctive, and confident in its identity. It doesn't try to be approachable or mild. If you appreciate assertive flavors and aren't afraid of fish, give it a chance. You might discover your new obsession.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/laksa" className="text-blue-600 hover:underline">→ Curry Laksa</Link>
          <Link to="/foods/char-kway-teow" className="text-blue-600 hover:underline">→ Char Kway Teow</Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
          <Link to="/foods/satay" className="text-blue-600 hover:underline">→ Satay</Link>
        </div>
      </div>
    </article>
  );
}