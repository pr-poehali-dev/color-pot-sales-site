import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Керамическая кастрюля",
      price: "3 990 ₽",
      color: "Яркий оранжевый",
      material: "Керамика",
      image: "/img/2a2c2a0b-f535-426d-ad2a-fde9ce298654.jpg",
      description: "Идеальна для тушения и варки"
    },
    {
      id: 2,
      name: "Сковорода из нержавейки",
      price: "2 590 ₽", 
      color: "Бирюзовый",
      material: "Нержавеющая сталь",
      image: "/img/eacfd0f9-56e8-4a71-975f-9ec8e345f780.jpg",
      description: "Равномерное распределение тепла"
    },
    {
      id: 3,
      name: "Чугунная кастрюля",
      price: "4 890 ₽",
      color: "Коралловый",
      material: "Чугун",
      image: "/img/8015fa9f-c443-49c7-bc79-9a21d10f1588.jpg",
      description: "Долговечность и отличное качество"
    }
  ];

  const materials = [
    {
      name: "Нержавеющая сталь",
      icon: "Shield",
      description: "Прочность и устойчивость к коррозии",
      color: "text-turquoise"
    },
    {
      name: "Керамика",
      icon: "Flame",
      description: "Равномерный нагрев и экологичность",
      color: "text-vibrant-orange"
    },
    {
      name: "Чугун",
      icon: "Crown",
      description: "Превосходное удержание тепла",
      color: "text-coral-pink"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-vibrant-orange to-turquoise rounded-full flex items-center justify-center">
                <Icon name="ChefHat" size={18} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-vibrant-orange to-turquoise bg-clip-text text-transparent">
                КастрюлиМаркет
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-vibrant-orange transition-colors font-medium">Главная</a>
              <a href="#catalog" className="text-gray-700 hover:text-vibrant-orange transition-colors font-medium">Каталог</a>
              <a href="#delivery" className="text-gray-700 hover:text-vibrant-orange transition-colors font-medium">Доставка</a>
              <a href="#contacts" className="text-gray-700 hover:text-vibrant-orange transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-vibrant-orange to-coral-pink hover:from-coral-pink hover:to-vibrant-orange text-white border-0">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-vibrant-orange via-turquoise to-bright-yellow bg-clip-text text-transparent">
                    Цветные кастрюли
                  </span>
                  <br />
                  для яркой кухни
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Превратите свою кухню в радужное пространство с нашими яркими кастрюлями из премиальных материалов
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-vibrant-orange to-coral-pink hover:from-coral-pink hover:to-vibrant-orange text-white border-0 text-lg px-8 py-6">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-white text-lg px-8 py-6">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как выбрать
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant-orange/20 to-turquoise/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/8015fa9f-c443-49c7-bc79-9a21d10f1588.jpg" 
                alt="Набор цветных кастрюль" 
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Премиальные материалы</h2>
            <p className="text-xl text-gray-600">Качество, которое служит годами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={material.icon as any} size={32} className={material.color} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{material.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-base">
                    {material.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные модели</h2>
            <p className="text-xl text-gray-600">Выберите идеальную кастрюлю для вашей кухни</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-vibrant-orange to-coral-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.material}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
                      <CardDescription className="text-base mt-2">{product.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-vibrant-orange to-turquoise"></div>
                    <span className="text-sm text-gray-600">{product.color}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-vibrant-orange">{product.price}</span>
                    <Button className="bg-gradient-to-r from-turquoise to-bright-yellow hover:from-bright-yellow hover:to-turquoise text-white border-0">
                      <Icon name="Plus" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-gradient-to-r from-turquoise/10 to-bright-yellow/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Доставка и оплата</h2>
            <p className="text-xl text-gray-600">Быстро, надежно, удобно</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm">
              <Icon name="Truck" size={48} className="mx-auto mb-4 text-vibrant-orange" />
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-gray-600">1-3 дня по России</p>
            </Card>
            <Card className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm">
              <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-turquoise" />
              <h3 className="font-semibold mb-2">Удобная оплата</h3>
              <p className="text-sm text-gray-600">Карта, наличные, переводы</p>
            </Card>
            <Card className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm">
              <Icon name="RotateCcw" size={48} className="mx-auto mb-4 text-coral-pink" />
              <h3 className="font-semibold mb-2">Обмен и возврат</h3>
              <p className="text-sm text-gray-600">14 дней без вопросов</p>
            </Card>
            <Card className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-bright-yellow" />
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-sm text-gray-600">2 года на всю продукцию</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-vibrant-orange to-coral-pink rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Телефон</h3>
                  <p className="text-gray-600">+7 (800) 123-45-67</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-turquoise to-bright-yellow rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@kastruli.ru</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-coral-pink to-vibrant-orange rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Адрес</h3>
                  <p className="text-gray-600">Москва, ул. Кулинарная, 25</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-vibrant-orange to-turquoise rounded-full flex items-center justify-center">
                  <Icon name="ChefHat" size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">КастрюлиМаркет</h3>
              </div>
              <p className="text-gray-400">Яркие кастрюли для яркой жизни</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Керамические кастрюли</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Нержавеющая сталь</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Чугунные изделия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Гарантии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-vibrant-orange to-turquoise rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="Instagram" size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-turquoise to-bright-yellow rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="Facebook" size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-bright-yellow to-coral-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="Twitter" size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 КастрюлиМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}