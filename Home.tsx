export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          I'd love to hear from you! Whether you have questions about Malaysian food, suggestions for 
          articles, corrections, or just want to share your own food experiences, feel free to reach out.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email</h2>
          <p className="text-gray-700 mb-2">
            The best way to reach me is via email:
          </p>
          <a 
            href="mailto:hellomalaysianfoodguide@gmail.com" 
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            hellomalaysianfoodguide@gmail.com
          </a>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You Can Contact Me About</h2>
        <ul className="space-y-3 text-gray-700 mb-8">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Questions about specific Malaysian dishes or ingredients</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Suggestions for new articles or topics to cover</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Corrections or additional information about articles</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Sharing your own Malaysian food experiences</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Travel tips and recommendations</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>General inquiries about the blog</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response Time</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          I run this blog in my spare time, so please allow a few days for me to respond. I do read 
          every email and try to reply to everyone who reaches out.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">A Note on Recipes</h3>
          <p className="text-gray-700 text-sm">
            While I share information about Malaysian dishes, I don't currently provide detailed recipes. 
            My focus is on the cultural context, history, and experience of Malaysian food. If you're 
            looking for recipes, I'm happy to point you toward good resources!
          </p>
        </div>
      </div>
    </div>
  );
}
