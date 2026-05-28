export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose max-w-none text-gray-700">
        <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mb-6">
          Welcome to Malaysian Food Guide. By accessing and using this website, you accept and agree 
          to be bound by the terms and provisions of this agreement.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use of Website</h2>
        <p className="mb-4">
          This website is provided for informational and educational purposes about Malaysian food 
          and culture. You may use this website for personal, non-commercial purposes only.
        </p>
        <p className="mb-6">
          You agree not to use this website for any unlawful purpose or in any way that could damage, 
          disable, or impair the website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Content Disclaimer</h2>
        <p className="mb-4">
          The information provided on this website is for general informational purposes only. While 
          we strive to provide accurate and up-to-date information about Malaysian food and culture, 
          we make no representations or warranties of any kind about the completeness, accuracy, or 
          reliability of any information on the website.
        </p>
        <p className="mb-6">
          Food preferences, dietary restrictions, and cooking methods can vary. Always use your best 
          judgment when trying new foods or recipes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
        <p className="mb-6">
          The content on this website, including text, graphics, logos, and images, is the property 
          of Malaysian Food Guide or its content suppliers and is protected by copyright laws. You 
          may not reproduce, distribute, or create derivative works from our content without express 
          written permission.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">External Links</h2>
        <p className="mb-6">
          This website may contain links to third-party websites. These links are provided for your 
          convenience only. We do not endorse or assume responsibility for the content of any linked 
          websites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Advertising</h2>
        <p className="mb-6">
          We use third-party advertising companies to serve ads when you visit our website. These 
          companies may use information about your visits to this and other websites to provide 
          advertisements about goods and services of interest to you.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          Malaysian Food Guide and its owner shall not be liable for any indirect, incidental, 
          special, consequential, or punitive damages resulting from your use of or inability to 
          use the website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to modify these terms at any time. Changes will be effective 
          immediately upon posting to the website. Your continued use of the website following 
          any changes constitutes acceptance of those changes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <p className="mb-6">
          Email:{' '}
          <a href="mailto:hellomalaysianfoodguide@gmail.com" className="text-blue-600 hover:underline">
            hellomalaysianfoodguide@gmail.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
        <p className="mb-6">
          These terms shall be governed by and construed in accordance with applicable laws, 
          without regard to conflict of law provisions.
        </p>
      </div>
    </div>
  );
}