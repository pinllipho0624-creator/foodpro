export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Malaysian Food Guide</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome! I'm glad you found this little corner of the internet dedicated to Malaysian food.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">My Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I grew up in Malaysia, surrounded by incredible food from morning till night. My earliest memories 
          are of my grandmother's kitchen, filled with the aroma of spices being ground, coconut milk simmering, 
          and the sound of her mortar and pestle working its magic.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          After spending years living abroad, I realized how much I missed the food from home. Not just the 
          taste, but the whole experience—the hawker stalls, the night markets, the friendly aunties and uncles 
          who remember your usual order. That's when I decided to start this blog.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What This Blog Is About</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Malaysian Food Guide is my personal project to document and share the dishes that make Malaysian 
          cuisine so special. I write about traditional recipes, street food favorites, and the cultural 
          stories behind each dish.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          This isn't a professional food blog with fancy photography equipment or a team of writers. It's 
          just me, sharing what I know and love about Malaysian food. I do my best to provide accurate 
          information based on my experiences and research.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">My Approach</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I focus on authenticity and storytelling. Each article explores not just how a dish tastes, but 
          where it comes from, how it's traditionally made, and why it matters to Malaysian culture. I try 
          to include practical tips for travelers and food enthusiasts who want to experience these dishes 
          themselves.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Get in Touch</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I love hearing from readers! If you have questions, suggestions, or just want to share your own 
          Malaysian food experiences, please reach out. You can contact me at{' '}
          <a href="mailto:hellomalaysianfoodguide@gmail.com" className="text-blue-600 hover:underline">
            hellomalaysianfoodguide@gmail.com
          </a>
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <p className="text-gray-700 italic">
            "Food is not just sustenance; it's culture, memory, and identity all rolled into one delicious package. 
            That's especially true for Malaysian cuisine, which brings together so many different traditions 
            into something uniquely Malaysian."
          </p>
        </div>
      </div>
    </div>
  );
}