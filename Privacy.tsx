import { Link } from 'react-router-dom';

export default function FoodArticles() {
  const articles = [
    { title: 'Nasi Lemak', path: '/foods/nasi-lemak', description: 'Malaysia\'s beloved national dish with coconut rice and sambal' },
    { title: 'Laksa', path: '/foods/laksa', description: 'Rich and spicy coconut curry noodle soup' },
    { title: 'Satay', path: '/foods/satay', description: 'Grilled meat skewers with peanut sauce' },
    { title: 'Rendang', path: '/foods/rendang', description: 'Slow-cooked beef in aromatic spices' },
    { title: 'Roti Canai', path: '/foods/roti-canai', description: 'Flaky flatbread served with curry' },
    { title: 'Char Kway Teow', path: '/foods/char-kway-teow', description: 'Stir-fried flat rice noodles' },
    { title: 'Teh Tarik', path: '/foods/teh-tarik', description: 'Pulled milk tea, Malaysia\'s national drink' },
    { title: 'Cendol', path: '/foods/cendol', description: 'Sweet iced dessert with pandan jelly' },
    { title: 'Mee Goreng', path: '/foods/mee-goreng', description: 'Spicy fried noodles' },
    { title: 'Asam Laksa', path: '/foods/asam-laksa', description: 'Tangy tamarind fish soup from Penang' },
    { title: 'Banana Leaf Rice', path: '/foods/banana-leaf-rice', description: 'South Indian meal served on banana leaf' },
    { title: 'Hainanese Chicken Rice', path: '/foods/hainanese-chicken-rice', description: 'Poached chicken with fragrant rice' },
    { title: 'Apam Balik', path: '/foods/apam-balik', description: 'Thick pancake with peanut filling' },
    { title: 'Kuih Melayu', path: '/foods/kuih-melayu', description: 'Traditional Malay sweet treats' },
    { title: 'Durian', path: '/foods/durian', description: 'The king of fruits' },
    { title: 'Nasi Kerabu', path: '/foods/nasi-kerabu', description: 'Blue rice with herbs from Kelantan' },
    { title: 'Bak Kut Teh', path: '/foods/bak-kut-teh', description: 'Herbal pork rib soup' },
    { title: 'Ikan Bakar', path: '/foods/ikan-bakar', description: 'Grilled fish with spicy sambal' },
    { title: 'Otak-Otak', path: '/foods/otak-otak', description: 'Grilled fish cake in banana leaf' },
    { title: 'Kuih Lapis', path: '/foods/kuih-lapis', description: 'Colorful layered steamed cake' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Malaysian Food Articles</h1>
      <p className="text-xl text-gray-600 mb-12">
        Explore our collection of articles about authentic Malaysian dishes, from street food favorites 
        to traditional specialties.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link 
            key={article.path}
            to={article.path}
            className="block border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
              {article.title}
            </h2>
            <p className="text-gray-600">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}