import { Link } from 'react-router-dom';

export default function IkanBakar() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ikan Bakar: Grilled Fish Malaysian Style</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Ikan bakar translates simply to "grilled fish," but that plain name doesn't capture the smoky, spicy, aromatic experience. Fish marinated in sambal and wrapped in banana leaves, grilled over charcoal until the skin is crispy and the flesh is tender—that's ikan bakar.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Concept</h2>
        <p className="mb-4">The basic idea is straightforward: fresh fish, rubbed with a spice paste or sambal, grilled over hot coals. What makes it special is the technique, the freshness of the fish, and the complexity of the sambal used.</p>
        <p className="mb-6">Many vendors wrap the fish in banana leaves before grilling. This serves multiple purposes—it keeps the fish moist, prevents it from sticking to the grill, and adds a subtle aromatic quality. As the leaves char, they impart a smoky note to the fish.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Choice of Fish</h2>
        <p className="mb-4">Different fish work better for different preparations. Stingray (ikan pari) is extremely popular, especially when grilled with sambal and lime. Seabass (siakap), red snapper, pomfret, and mackerel are common choices, each with distinct flavors and textures.</p>
        <p className="mb-6">Coastal areas obviously have better access to fresh seafood, so ikan bakar tends to be particularly good in places like Langkawi, Port Dickson, or any fishing village. Freshness makes a huge difference—stale fish can't be rescued by even the best sambal.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Sambal</h2>
        <p className="mb-4">The sambal used for ikan bakar varies by vendor and region. Some make it quite spicy, others balance heat with sweetness and sourness. Common ingredients include chilies, belacan (shrimp paste), tamarind, garlic, shallots, and lemongrass.</p>
        <p className="mb-6">The sambal should complement the fish without overwhelming it. You want to taste both the smoky, charred fish and the complex, spicy sambal working together.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How It's Served</h2>
        <p className="mb-4">Ikan bakar typically comes with white rice, sambal belacan for extra heat, and lime wedges. Some places include a simple salad of cucumber, tomatoes, and onions. The presentation is usually rustic—the fish might arrive still in its charred banana leaf wrapper.</p>
        <p className="mb-6">Eating ikan bakar gets messy. Use your hands or chopsticks to pick apart the fish, watching out for bones. Squeeze lime over everything, add extra sambal if you dare, and enjoy the combination of smoky, spicy, tangy flavors.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Waterfront Dining</h2>
        <p className="mb-4">Many ikan bakar restaurants are located near water—rivers, lakes, or the ocean. There's something special about eating grilled seafood while looking at the water, especially as the sun sets. These places often have a relaxed, casual atmosphere perfect for lingering over your meal.</p>
        <p className="mb-6">Some establishments let you choose your fish from a display, then specify how you want it prepared. This interactive element adds to the experience.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Beyond Fish</h2>
        <p className="mb-4">While fish is the star, many ikan bakar restaurants also grill squid, prawns, shellfish, and even chicken using similar techniques. The sambal and charcoal cooking method work well with various proteins.</p>
        <p className="mb-6">Grilled stingray (pari bakar) deserves special mention—it's often served on the wing itself, which makes for dramatic presentation. The cartilage becomes tender and almost melts in your mouth.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Ikan Bakar</h2>
        <p className="mb-4">The smell of charcoal and grilling fish should be prominent. If you can see the grilling area, watch for proper technique—fish should be grilled over hot coals, not gas burners pretending to be charcoal. The fish should look fresh, with clear eyes and no strong fishy smell before cooking.</p>
        <p className="mb-6">Busy places with high turnover are usually safer bets. Fish sitting around waiting to be cooked is a warning sign.</p>
        
        <p className="mb-6">Ikan bakar embodies Malaysian cooking at its best—taking fresh, quality ingredients, enhancing them with bold flavors, and using simple techniques perfected over time. It's food that connects you to Malaysia's coastal heritage and multicultural spice traditions.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/otak-otak" className="text-blue-600 hover:underline">→ Otak-Otak</Link>
          <Link to="/foods/satay" className="text-blue-600 hover:underline">→ Satay</Link>
          <Link to="/foods/sambal" className="text-blue-600 hover:underline">→ Sambal</Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
        </div>
      </div>
    </article>
  );
}