import { Link } from 'react-router-dom';

export default function CharKwayTeow() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Char Kway Teow: The Ultimate Wok Hei Experience</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <img src="https://images.pexels.com/photos/37252485/pexels-photo-37252485.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Char kway teow stir frying" className="w-full h-96 object-cover rounded-lg shadow-md mb-8"/>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">If there's one dish that represents the soul of Malaysian Chinese cooking, it's char kway teow. Those flat rice noodles stir-fried over roaring flames until slightly charred—it's simple ingredients transformed into something extraordinary through technique and fire.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Char Kway Teow?</h2>
        <p className="mb-6">Char kway teow means "stir-fried flat rice noodles" in Hokkien. The dish combines wide, flat rice noodles with prawns, Chinese sausage, cockles, bean sprouts, chives, and eggs, all stir-fried in a blazing hot wok. The key is something called wok hei—the breath of the wok—that smoky, slightly charred flavor you can only get from extreme heat.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Importance of Fire</h2>
        <p className="mb-4">You can't make proper char kway teow on a home stove. The heat just isn't high enough. Street hawkers use modified gas burners that produce flames hot enough to make the wok smoke. When ingredients hit that surface, they sear instantly, developing complex flavors in seconds.</p>
        <p className="mb-6">Watching a skilled hawker make char kway teow is mesmerizing. They work fast, tossing ingredients in a specific order, flames shooting up around the wok. Everything happens quickly—if you go too slow, the noodles turn mushy. Too fast, and they don't develop that characteristic char.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Controversial Ingredient</h2>
        <p className="mb-4">Traditionally, char kway teow was fried in pork lard, which gave it a rich, savory depth that's hard to replicate with other fats. These days, many hawkers use vegetable oil to make it halal for Muslim customers. The debate over which is "better" can get heated.</p>
        <p className="mb-6">If you eat pork, try both versions and judge for yourself. The lard version does have a certain richness, but a skilled cook can make an excellent char kway teow with regular oil. What matters more is the technique and the quality of other ingredients.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Components</h2>
        <p className="mb-4">Fresh flat rice noodles are essential—they should be soft but still hold their shape. Bean sprouts add crunch and freshness. Chinese sausage (lap cheong) provides sweetness. Prawns should be fresh and sweet. Cockles add a briny element, though not everyone likes them.</p>
        <p className="mb-6">Dark soy sauce gives the noodles their distinctive color and adds depth, while light soy provides saltiness. Fish sauce brings umami, and chili paste adds heat. The egg gets scrambled right in the wok, coating the noodles and tying everything together.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Penang vs. Kuala Lumpur Style</h2>
        <p className="mb-4">Penang char kway teow tends to be darker, with more generous amounts of dark soy sauce and often includes cockles. KL versions are sometimes lighter and might skip the cockles. Regional pride runs deep on this subject.</p>
        <p className="mb-6">Penang hawkers take their char kway teow very seriously. The best stalls there have queues that can stretch for half an hour or more. People will wait because they know the difference between good and exceptional.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Great Char Kway Teow</h2>
        <p className="mb-4">Look for places with powerful burners and lots of smoke. The hawker should be working fast, with flames leaping up around the wok. If they're cooking multiple portions at once, that's usually a bad sign—proper char kway teow needs to be made one plate at a time.</p>
        <p className="mb-6">The noodles should have some char marks but not be burnt. Each strand should be coated in sauce with a nice sheen. The ingredients should be distinct, not all mushed together. And most importantly, it should smell incredible—smoky, savory, with hints of garlic and chili.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Not the Healthiest Choice</h2>
        <p className="mb-4">Let's be honest—char kway teow isn't health food. It's oily, high in calories, and probably not something you should eat every day. Malaysian locals joke that it's "die die must eat" food—so good it's worth the health risks.</p>
        <p className="mb-6">But that's part of why it's special. It's an indulgence, a treat, something you savor rather than mindlessly consume. When you find truly excellent char kway teow made by someone who's mastered the craft, it's worth every calorie.</p>
        
        <p className="mb-6">Char kway teow represents everything that makes Malaysian Chinese food special—bold flavors, expert technique, and ingredients that come together in perfect harmony. It's the kind of dish that seems simple until you try to make it yourself, then you realize just how much skill is involved.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/hokkien-mee" className="text-blue-600 hover:underline">→ Hokkien Mee</Link>
          <Link to="/foods/mee-goreng" className="text-blue-600 hover:underline">→ Mee Goreng</Link>
          <Link to="/foods/laksa" className="text-blue-600 hover:underline">→ Laksa</Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
        </div>
      </div>
    </article>
  );
}