export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none text-gray-700">
        <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mb-6">
          This Privacy Policy describes how Malaysian Food Guide ("we", "us", or "our") collects, uses, 
          and shares information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect certain information automatically when you visit our website, including:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Pages you visit on our site</li>
          <li>Time and date of your visit</li>
          <li>Time spent on pages</li>
          <li>Referring website addresses</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to track activity on our website and hold 
          certain information. Cookies are files with small amounts of data that are sent to your browser 
          from a website and stored on your device.
        </p>
        <p className="mb-6">
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
          However, if you do not accept cookies, you may not be able to use some portions of our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Google AdSense</h2>
        <p className="mb-4">
          We use Google AdSense to display advertisements on our website. Google uses cookies to serve 
          ads based on your prior visits to our website or other websites. Google's use of advertising 
          cookies enables it and its partners to serve ads based on your visit to our site and/or other 
          sites on the Internet.
        </p>
        <p className="mb-6">
          You may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">
            Google Ads Settings
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Analytics</h2>
        <p className="mb-6">
          We may use third-party analytics services to monitor and analyze the use of our website. 
          These services collect information about your use of the website to help us improve our 
          content and user experience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
        <p className="mb-6">
          Our website may contain links to third-party websites that are not operated by us. We have 
          no control over and assume no responsibility for the content, privacy policies, or practices 
          of any third-party sites or services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
        <p className="mb-6">
          We value your trust in providing us your information, and we strive to use commercially 
          acceptable means of protecting it. However, no method of transmission over the internet 
          or method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
        <p className="mb-6">
          Our website does not address anyone under the age of 13. We do not knowingly collect 
          personally identifiable information from children under 13.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by 
          posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <p className="mb-6">
          Email:{' '}
          <a href="mailto:hellomalaysianfoodguide@gmail.com" className="text-blue-600 hover:underline">
            hellomalaysianfoodguide@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}