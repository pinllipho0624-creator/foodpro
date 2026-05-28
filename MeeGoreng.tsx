import { Link } from 'react-router-dom';

export default function KuihLapis() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kuih Lapis: The Art of Layered Steamed Cake</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Kuih lapis is one of the most labor-intensive traditional Malaysian desserts. Multiple thin layers of batter, each steamed individually, creating a beautiful striped pattern when sliced. Making it properly requires patience, skill, and quite a bit of time.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Kuih Lapis?</h2>
        <p className="mb-4">Kuih lapis, also called kueh lapis or kue lapis, is a steamed layer cake made from rice flour, tapioca flour, coconut milk, sugar, and food coloring. The name "lapis" means layers in Malay and Indonesian, which perfectly describes this multi-layered treat.</p>
        <p className="mb-6">Traditional versions have nine layers, though some ambitious makers create even more. Each layer is thin—about 2-3mm thick—and must be steamed until set before the next layer is added. The entire process can take several hours.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Traditional Method</h2>
        <p className="mb-4">Making kuih lapis requires dividing the batter into different colored portions, usually alternating between two colors. The first layer is poured into a steaming pan and steamed until just set. Then the second color is carefully poured on top and steamed. This repeats until all layers are complete.</p>
        <p className="mb-6">Timing is crucial. Steam too long and the layers won't bond properly. Too short and the next layer will mix with the previous one, ruining the clean lines. Experienced makers can judge doneness by look and touch.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Colors and Flavors</h2>
        <p className="mb-4">Traditionall colors come from natural sources—green from pandan, brown from palm sugar or chocolate, pink from rose water or food coloring. Modern versions might use any combination of colors, creating rainbow effects or subtle gradients.</p>
        <p className="mb-6">Pandan is the most common flavoring, giving the cake its characteristic aromatic quality. Some versions add coconut directly to the batter for extra richness. The flavor is subtle—not overly sweet, with the coconut milk providing most of the taste.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Texture</h2>
        <p className="mb-4">Good kuih lapis should be smooth and slightly springy, with a delicate chewiness from the rice flour and tapioca starch. It shouldn't be rubbery or tough, nor should it be mushy or fall apart. The texture should be uniform throughout all the layers.</p>
        <p className="mb-6">When you bite into it, the layers should stay intact rather than separating. This indicates proper preparation where each layer bonded correctly with the next.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">A Labor of Love</h2>
        <p className="mb-4">The time and effort required to make kuih lapis makes it special-occasion food rather than everyday snacks. It's traditional for celebrations, particularly Hari Raya, weddings, and important gatherings where you want to impress guests.</p>
        <p className="mb-6">Giving someone homemade kuih lapis signals respect and care—you've spent hours making something beautiful for them. This cultural significance elevates it beyond just being a tasty dessert.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Variations</h2>
        <p className="mb-4">Besides the traditional steamed version, there's also kuih lapis baked, which is entirely different—a rich, buttery layered cake that's more similar to Dutch spekkoek. The name might be the same, but the preparation and taste are completely distinct.</p>
        <p className="mb-6">Some modern interpretations play with flavors, adding chocolate, coffee, or fruit extracts to different layers. While purists might object, these innovations keep the tradition relevant for younger generations.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Where to Find It</h2>
        <p className="mb-4">Kuih lapis can be found at traditional cake shops, pasar pagi (morning markets), and some specialized kuih vendors. During Hari Raya season, availability increases as more people make it for celebrations.</p>
        <p className="mb-6">The price reflects the labor involved—it's more expensive than simpler kuih. Quality varies significantly, with homemade or small-batch versions usually superior to mass-produced ones.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Enjoy It</h2>
        <p className="mb-4">Kuih lapis is typically eaten at room temperature as a snack with tea or coffee. The subtle sweetness pairs well with unsweetened beverages. Cut it into small squares or diamonds—a little goes a long way as it's quite rich.</p>
        <p className="mb-6">Appreciate the visual appeal before eating. The clean, distinct layers represent hours of patient work. It's edible art as much as it is dessert.</p>
        
        <p className="mb-6">Kuih lapis embodies the dedication and artistry in traditional Malaysian dessert-making. In a world of instant gratification, something that requires hours of careful, patient work stands out. That's what makes it special—not just the taste, but everything it represents about craftsmanship and tradition.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/kuih-melayu" className="text-blue-600 hover:underline">→ Kuih Melayu</Link>
          <Link to="/foods/apam-balik" className="text-blue-600 hover:underline">→ Apam Balik</Link>
          <Link to="/foods/cendol" className="text-blue-600 hover:underline">→ Cendol</Link>
          <Link to="/foods" className="text-blue-600 hover:underline">→ All Malaysian Foods</Link>
        </div>
      </div>
    </article>
  );
}