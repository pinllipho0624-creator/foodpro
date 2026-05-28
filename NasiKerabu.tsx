import { Link } from 'react-router-dom';

export default function KuihMelayu() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kuih Melayu: Traditional Malay Sweet Treats</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <img src="https://images.pexels.com/photos/33090946/pexels-photo-33090946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Colorful traditional kuih" className="w-full h-96 object-cover rounded-lg shadow-md mb-8"/>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Kuih melayu isn't one specific item—it's a category of traditional Malay snacks and desserts that come in an incredible variety of colors, textures, and flavors. These small treats are an essential part of Malaysian food culture.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Kuih?</h2>
        <p className="mb-4">Kuih (or kueh) refers to bite-sized snacks, usually sweet but sometimes savory. They're made from ingredients like rice flour, glutinous rice, coconut, palm sugar, and pandan. Each type has its own unique preparation method passed down through generations.</p>
        <p className="mb-6">You'll find kuih at morning markets, pasar malam (night markets), and traditional cake shops. They're what people bring when visiting friends or family, serve at celebrations, or enjoy with afternoon tea.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Popular Varieties</h2>
        <p className="mb-4">Kuih lapis features colorful layers created by steaming thin layers of batter one at a time. It's tedious to make but beautiful and delicious. Ondeh-ondeh are pandan-flavored glutinous rice balls filled with palm sugar that melts in your mouth. Kuih ketayap are green pandan crepes rolled around sweet coconut filling.</p>
        <p className="mb-6">Seri muka has a sticky rice bottom layer with green pandan custard on top. Pulut inti combines blue glutinous rice with sweet coconut topping. Kuih dadar are larger pandan crepes with coconut filling, similar to ketayap but different proportions.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Role of Pandan</h2>
        <p className="mb-4">Pandan leaves appear in many kuih recipes, providing their distinctive green color and subtle, almost vanilla-like aroma. Fresh pandan makes a huge difference compared to artificial flavoring or coloring.</p>
        <p className="mb-6">The leaves are usually blended with water to extract the juice and color, then strained before use. Some kuih use pandan leaves as wrappers, imparting flavor as they steam.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Traditional Techniques</h2>
        <p className="mb-4">Many kuih require specific traditional techniques. Steaming is common, often in multiple layers or stages. Some are wrapped in banana leaves before cooking. Others require precise timing and temperature control that comes from experience rather than written recipes.</p>
        <p className="mb-6">Older generations often make kuih by feel rather than measurement, which makes replicating traditional flavors challenging for younger cooks who've grown up with precise recipes.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When to Eat Kuih</h2>
        <p className="mb-4">Kuih is traditionally breakfast food or afternoon snack with tea or coffee. During Ramadan, kuih becomes especially popular for breaking fast—the sweet treats provide quick energy after a day of fasting.</p>
        <p className="mb-6">Different kuih appear during specific celebrations. Certain types are traditional for weddings, others for Hari Raya. This seasonal and ceremonial aspect gives kuih cultural significance beyond just being snacks.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Where to Find Good Kuih</h2>
        <p className="mb-4">Pasar pagi (morning markets) often have vendors specializing in kuih, offering fresh batches made that morning. Traditional cake shops in Malay neighborhoods usually stock various types. During Ramadan, many people make kuih at home to sell, often advertising through social media.</p>
        <p className="mb-6">The best kuih is usually homemade or from small operations where someone's following a family recipe. Commercial production can cut corners that affect texture and flavor.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">A Fading Tradition?</h2>
        <p className="mb-4">Fewer young Malaysians are learning to make traditional kuih—it's time-consuming and the techniques can be tricky. However, there's been recent interest in preserving these recipes, with cooking classes and social media helping spread knowledge.</p>
        <p className="mb-6">Some innovative bakers are creating modern interpretations while respecting traditional flavors, which might help keep kuih culture alive for future generations.</p>
        
        <p className="mb-6">Kuih melayu represents Malaysian heritage in edible form. Each piece is a connection to tradition, family recipes, and the skill of generations of Malay cooks. Whether you're trying one type or sampling many, you're experiencing an important part of Malaysian culinary culture.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/kuih-lapis" className="text-blue-600 hover:underline">→ Kuih Lapis</Link>
          <Link to="/foods/apam-balik" className="text-blue-600 hover:underline">→ Apam Balik</Link>
          <Link to="/foods/cendol" className="text-blue-600 hover:underline">→ Cendol</Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
        </div>
      </div>
    </article>
  );
}