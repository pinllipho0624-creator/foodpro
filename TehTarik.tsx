import { Link } from 'react-router-dom';

export default function Rendang() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Rendang: The Slow-Cooked Pride of Malaysian Cuisine
      </h1>
      
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>

      <img 
        src="https://images.pexels.com/photos/37279765/pexels-photo-37279765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Traditional rendang with ketupat rice"
        className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
      />

      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">
          Rendang is what happens when you take your time with food. This isn't something you throw together 
          on a weeknight. It's a labor of love that requires patience, good ingredients, and respect for 
          tradition.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Rendang?</h2>
        <p className="mb-4">
          At its core, rendang is beef braised in coconut milk with a complex spice paste until the liquid 
          evaporates and the meat becomes incredibly tender. But that simple description doesn't do justice 
          to the depth of flavor involved.
        </p>
        <p className="mb-6">
          The spice paste typically includes lemongrass, galangal, garlic, shallots, ginger, chilies, and 
          turmeric. These aromatics are pounded together to create a paste that forms the foundation of the 
          dish. The exact blend varies by family and region, with each cook having their own secret touches.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Cooking Process</h2>
        <p className="mb-4">
          Making rendang properly takes hours—typically four to six, sometimes longer. The meat simmers 
          in coconut milk with the spice paste over low heat. As the liquid reduces, you need to stir 
          constantly towards the end to prevent burning.
        </p>
        <p className="mb-6">
          You'll know it's getting close when the coconut milk completely evaporates and the oil separates. 
          The meat should be dark brown, almost black, with the spices coating each piece. Every strand of 
          beef should be infused with flavor, tender enough to pull apart but not falling to shreds.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">A Celebratory Dish</h2>
        <p className="mb-4">
          Rendang isn't everyday food. Traditionally, it was made for special occasions—weddings, Hari Raya, 
          important gatherings. The amount of effort involved meant it was reserved for times when you wanted 
          to show respect to your guests.
        </p>
        <p className="mb-6">
          During Hari Raya (Eid celebration), many Malay households prepare rendang in large quantities. 
          The beauty of rendang is that it keeps well and actually tastes better after a day or two as the 
          flavors continue to develop.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Variations</h2>
        <p className="mb-4">
          While beef is most common, you'll also find chicken rendang, which cooks faster but requires 
          careful attention to avoid drying out the meat. Some regions make rendang with duck, mutton, or 
          even liver. In Negeri Sembilan, they make rendang with water buffalo meat.
        </p>
        <p className="mb-6">
          The Minangkabau people from West Sumatra, Indonesia claim rendang as their own, and there's 
          legitimate historical basis for this. But over generations, Malaysian cooks have made it their 
          own, creating regional variations that are distinctly Malaysian.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Dry vs. Wet Rendang</h2>
        <p className="mb-4">
          There's ongoing debate about "proper" rendang. Traditional rendang is dry—the liquid has 
          completely evaporated, leaving the meat coated in thick, dark spice paste. This version can 
          last for days without refrigeration, which was important before modern cooling.
        </p>
        <p className="mb-6">
          Wetter versions, where some gravy remains, are more common in restaurants and home cooking today. 
          They're easier to prepare and some people prefer the saucier texture. Both have their merits, 
          though purists insist on the dry version.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Eat Rendang</h2>
        <p className="mb-4">
          Rendang is rich and intense, so a little goes a long way. It's typically served with steamed 
          white rice or ketupat (compressed rice cakes) that provide a neutral base to balance the 
          powerful flavors.
        </p>
        <p className="mb-6">
          The meat should be so tender it practically melts, but with enough structure that you can pick 
          up a piece without it disintegrating. Each bite should deliver layers of flavor—the sweetness 
          from coconut, heat from chilies, earthiness from the spices, and the deep, rich taste of slow-
          cooked beef.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Rendang</h2>
        <p className="mb-4">
          Authentic rendang takes time, which means not everyone who makes it does it properly. Avoid 
          versions that look too wet or too pale—those have been rushed. Good rendang should be dark, 
          almost mahogany colored, with visible spice paste coating the meat.
        </p>
        <p className="mb-6">
          If you're buying rendang, Malay restaurants and nasi campur stalls during Ramadan or around 
          Hari Raya are your best bets. Many families also make extra to sell during this period, and 
          homemade rendang is often exceptional.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Rendang Matters</h2>
        <p className="mb-4">
          In 2011, CNN named rendang the world's most delicious food in their reader's poll. While these 
          rankings are subjective, it highlighted what many Southeast Asians already knew—rendang is 
          something special.
        </p>
        <p className="mb-6">
          More than just being delicious, rendang represents the Malaysian approach to cooking: patient, 
          complex, and deeply respectful of tradition. It's a dish that can't be rushed, can't be cut 
          corners on, and rewards those willing to put in the time and effort. That alone makes it worth 
          experiencing.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak: Malaysia's National Dish</Link>
          <Link to="/foods/satay" className="text-blue-600 hover:underline">→ Satay: Grilled Skewers</Link>
          <Link to="/foods/laksa" className="text-blue-600 hover:underline">→ Laksa: Spicy Noodle Soup</Link>
          <Link to="/foods/banana-leaf-rice" className="text-blue-600 hover:underline">→ Banana Leaf Rice</Link>
        </div>
      </div>
    </article>
  );
}