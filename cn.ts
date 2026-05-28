import { Link } from 'react-router-dom';

export default function RotiCanai() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Roti Canai: Malaysia's Favorite Flatbread
      </h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <img src="https://images.pexels.com/photos/35447713/pexels-photo-35447713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Roti canai flatbread" className="w-full h-96 object-cover rounded-lg shadow-md mb-8"/>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">There's something magical about watching a mamak uncle stretch and flip roti canai dough. The rhythmic slapping sound, the paper-thin disc flying through the air, the perfect golden-brown finish—it's performance and breakfast combined.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Roti Canai?</h2>
        <p className="mb-4">Roti canai is a flatbread made from wheat flour, water, eggs, and ghee. The magic happens in how it's prepared—the dough is repeatedly folded and stretched until it becomes almost translucent thin, then cooked on a flat griddle until crispy on the outside while remaining soft and flaky on the inside.</p>
        <p className="mb-6">The name might come from "Chennai" (formerly Madras), pointing to its South Indian origins. Indian Muslim immigrants brought the technique to Malaysia, where it became deeply embedded in local food culture. Today, it's as Malaysian as anything else.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Art of Making It</h2>
        <p className="mb-4">Making roti canai properly requires skill that takes years to develop. The dough needs to rest to develop gluten, making it stretchy without tearing. Experienced cooks can stretch a ball of dough into a paper-thin sheet big enough to cover the entire griddle.</p>
        <p className="mb-6">The stretching and folding creates layers, similar to puff pastry. When it hits the hot griddle with a generous amount of ghee, these layers crisp up individually, creating that characteristic flaky texture. The best roti canai is crispy and golden on the outside, with soft, stretchy layers inside.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Eat It</h2>
        <p className="mb-4">Roti canai is typically eaten with dhal (lentil curry), fish curry, or chicken curry for dipping. Some people prefer it with sugar, which might sound odd but works surprisingly well—the sweetness contrasts nicely with the buttery, slightly savory bread.</p>
        <p className="mb-6">The traditional way is to tear off pieces with your hands and use them to scoop up curry. The flaky layers are perfect for catching all that sauce. Don't worry about making a mess—enthusiasm is expected.</p>
        
        <img src="https://images.pexels.com/photos/33428723/pexels-photo-33428723.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Roti canai with curry" className="w-full h-80 object-cover rounded-lg shadow-md my-8"/>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Endless Variations</h2>
        <p className="mb-4">Plain roti canai is just the beginning. Roti telur adds an egg, either beaten into the dough or cooked inside like a crispy omelet pocket. Roti bawang includes onions for extra flavor. Roti pisang wraps bananas inside for a sweet version.</p>
        <p className="mb-6">Modern variations have gotten creative: roti tisu (tissue bread) is stretched extra thin and shaped like a cone, more dessert than breakfast. Roti boom is thicker and fluffier. Some places now offer roti with cheese, chocolate, or even durian. Purists have opinions about these innovations.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mamak Culture</h2>
        <p className="mb-4">Roti canai is synonymous with mamak restaurants—24-hour eateries run by Indian Muslim Malaysians. These spots are more than just places to eat; they're social hubs where people gather for meals, conversation, and football matches at all hours.</p>
        <p className="mb-6">There's something comforting about a mamak at 2 AM—the clang of spatulas on griddles, the smell of curry and coffee, the mix of languages and laughter. Roti canai tastes better in that environment somehow, maybe because of the atmosphere or maybe just because you're usually quite hungry.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Roti Canai</h2>
        <p className="mb-4">Look for places where they make it fresh to order. If the roti is pre-made and sitting under a heat lamp, go elsewhere. You want to see the uncle stretching and flipping the dough right in front of you.</p>
        <p className="mb-6">Good roti canai should be crispy when it first arrives but still have soft, flaky layers inside. If it's too tough or too greasy, that's a sign of poor technique or low-quality ingredients. The best versions have a beautiful golden color with darker crispy spots.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">More Than Just Food</h2>
        <p className="mb-6">Roti canai has become part of Malaysian identity. It's what you eat when you're studying late at night, when you're catching up with old friends, or when you just want something warm and comforting. It crosses all ethnic and social boundaries—everyone eats roti canai.</p>
        <p className="mb-6">The fact that it's available 24/7 at affordable prices makes it accessible to everyone. Whether you're a student on a tight budget or just someone who wants a midnight snack, roti canai is there for you. That democratic quality is part of what makes it special.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
          <Link to="/foods/teh-tarik" className="text-blue-600 hover:underline">→ Teh Tarik: Pulled Tea</Link>
          <Link to="/foods/banana-leaf-rice" className="text-blue-600 hover:underline">→ Banana Leaf Rice</Link>
          <Link to="/foods/murtabak" className="text-blue-600 hover:underline">→ Murtabak: Stuffed Pancake</Link>
        </div>
      </div>
    </article>
  );
}