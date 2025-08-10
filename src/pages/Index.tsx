import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const routes = [
    {
      title: "Золотое Кольцо России",
      description: "Классический маршрут по древним городам",
      duration: "7-10 дней",
      difficulty: "Легкий",
      image: "/img/9b013db6-651f-4fc9-b4d7-128237c0c3dd.jpg"
    },
    {
      title: "Кавказские горы",
      description: "Треккинг в самом сердце Кавказа",
      duration: "14 дней",
      difficulty: "Сложный",
      image: "/img/9b013db6-651f-4fc9-b4d7-128237c0c3dd.jpg"
    },
    {
      title: "Байкальский круг",
      description: "Вокруг священного озера",
      duration: "12 дней",
      difficulty: "Средний",
      image: "/img/9b013db6-651f-4fc9-b4d7-128237c0c3dd.jpg"
    }
  ];

  const galleryImages = [
    "/img/b69142a6-620b-4a8c-a265-914e986f7768.jpg",
    "/img/9b013db6-651f-4fc9-b4d7-128237c0c3dd.jpg",
    "/img/b69142a6-620b-4a8c-a265-914e986f7768.jpg",
    "/img/9b013db6-651f-4fc9-b4d7-128237c0c3dd.jpg",
    "/img/b69142a6-620b-4a8c-a265-914e986f7768.jpg",
    "/img/9b013db6-651f-4fc9-b4d7-128237c0c3dd.jpg"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Compass" size={28} className="text-blue-600" />
              <span className="font-bold text-xl text-gray-900">TRAVEL BLOG</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#routes" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Маршруты</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Галерея</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/img/9b013db6-651f-4fc9-b4d7-128237c0c3dd.jpg')" }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Исследуй Мир
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light animate-fade-in">
            Лучшие маршруты, секретные места и незабываемые приключения
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold animate-scale-in">
            <Icon name="Map" size={20} className="mr-2" />
            Смотреть маршруты
          </Button>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Популярные Маршруты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Откройте для себя самые захватывающие места России и мира
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${route.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {route.difficulty}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{route.title}</h3>
                  <p className="text-gray-600 mb-4">{route.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {route.duration}
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      На карте
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Интерактивная Карта</h2>
            <p className="text-xl text-gray-600">
              Исследуйте маршруты на интерактивной карте
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden cursor-pointer group">
            {/* Interactive map overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500 rounded-2xl"></div>
            
            {/* Route paths */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <path 
                d="M50 150 Q150 100 250 120 T350 150" 
                stroke="#2563eb" 
                strokeWidth="3" 
                fill="none" 
                strokeDasharray="8,4"
                className="animate-pulse"
              />
              <path 
                d="M80 200 Q180 160 280 180 T380 200" 
                stroke="#7c3aed" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="6,3"
                className="animate-pulse"
              />
            </svg>
            
            <div className="text-center z-10">
              <Icon name="Map" size={64} className="text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Интерактивная карта маршрутов</h3>
              <p className="text-gray-600 mb-6">Детальные маршруты с GPS-координатами и точками интереса</p>
              <Button className="bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform duration-300">
                <Icon name="Navigation" size={18} className="mr-2" />
                Открыть карту
              </Button>
            </div>
            
            {/* Interactive location pins */}
            <div className="absolute top-8 left-8 group">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Москва
              </div>
            </div>
            <div className="absolute bottom-12 right-12 group">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Сочи
              </div>
            </div>
            <div className="absolute top-1/3 right-1/4 group">
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Казань
              </div>
            </div>
            <div className="absolute top-1/2 left-1/3 group">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Байкал
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Галерея Путешествий</h2>
            <p className="text-xl text-gray-600">
              Вдохновляющие фотографии из наших путешествий
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square bg-cover bg-center rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
                style={{ backgroundImage: `url('${image}')` }}
              >
                <div className="w-full h-full bg-black/0 hover:bg-black/20 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Icon name="Eye" size={24} className="text-white opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с Нами</h2>
              <p className="text-xl text-gray-600">
                Готовы к новому приключению? Напишите нам!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Email</label>
                  <Input placeholder="your@email.com" type="email" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о ваших планах путешествий..." className="min-h-32" />
                </div>
                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@travel-blog.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Офис</h4>
                    <p className="text-gray-600">Москва, Красная площадь, 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Compass" size={28} className="text-blue-400" />
              <span className="font-bold text-xl">TRAVEL BLOG</span>
            </div>
            <div className="flex space-x-6">
              <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Travel Blog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;