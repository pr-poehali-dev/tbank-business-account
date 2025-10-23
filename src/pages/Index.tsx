import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Моментальное открытие",
      description: "Регистрируйте счёт за 10 минут полностью онлайн из любой точки мира"
    },
    {
      icon: "Sparkles",
      title: "Умная автоматизация",
      description: "AI-powered бухгалтерия и автоматическая интеграция с вашими сервисами"
    },
    {
      icon: "ShieldCheck",
      title: "Банковская безопасность",
      description: "Биометрия, 2FA и мониторинг транзакций 24/7 в режиме реального времени"
    },
    {
      icon: "TrendingUp",
      title: "Кэшбэк и бонусы",
      description: "До 8% на остаток + кэшбэк с каждой операции по счёту"
    }
  ];

  const tariffs = [
    {
      name: "Старт",
      price: "0 ₽",
      period: "Навсегда бесплатно",
      features: [
        "Безлимитное ведение счёта",
        "20 платежей в месяц — бесплатно",
        "Виртуальная карта в подарок",
        "Мобильный и веб-банкинг"
      ],
      popular: false,
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      name: "Бизнес",
      price: "490 ₽",
      period: "В месяц",
      features: [
        "Всё из тарифа «Старт»",
        "Безлимитные платежи",
        "Кэшбэк 8% на остаток счёта",
        "Персональный менеджер",
        "Бухгалтерия + ЭДО бесплатно"
      ],
      popular: true,
      gradient: "from-primary/20 to-orange-500/20"
    },
    {
      name: "Корпорация",
      price: "По запросу",
      period: "Индивидуальные условия",
      features: [
        "Всё из тарифа «Бизнес»",
        "Валютные операции",
        "Зарплатный проект для команды",
        "Эквайринг и терминалы",
        "Выделенная поддержка 24/7"
      ],
      popular: false,
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  const reviews = [
    {
      company: "ООО «ТехноПром»",
      author: "Алексей Иванов",
      role: "CEO",
      text: "Перешли с другого банка — разница невероятная. Открыли счёт за 12 минут, интеграция с 1С работает автоматически. Команда в восторге.",
      rating: 5,
      avatar: "💼"
    },
    {
      company: "ИП Смирнова",
      author: "Анна Смирнова",
      role: "Founder",
      text: "Кэшбэк реально начисляется! За год накопила больше 50к на остатке. Плюс бухгалтерия встроена — экономлю кучу времени и денег.",
      rating: 5,
      avatar: "🎨"
    },
    {
      company: "ООО «Логистика+»",
      author: "Дмитрий Петров",
      role: "CFO",
      text: "3 года с Т-банком. Платежи проходят мгновенно, техподдержка отвечает за минуты. Лучший выбор для нашей компании.",
      rating: 5,
      avatar: "📦"
    }
  ];

  const stats = [
    { value: "1M+", label: "Активных клиентов", icon: "Users" },
    { value: "15", label: "Лет на рынке", icon: "Award" },
    { value: "99.9%", label: "Uptime сервиса", icon: "Activity" },
    { value: "24/7", label: "Поддержка", icon: "Headphones" }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,221,45,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,221,45,0.08),transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm font-medium animate-slide-up">
              🚀 Открытие за 10 минут
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '100ms' }}>
              Бизнес-счёт
              <span className="block bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                нового поколения
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/80 font-light max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
              Полностью онлайн. Кэшбэк до 8%. Встроенная бухгалтерия.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '300ms' }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold px-10 py-7 text-lg rounded-2xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105">
                Открыть счёт
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg rounded-2xl">
                Смотреть демо
                <Icon name="Play" className="ml-2" size={18} />
              </Button>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 text-white/60 text-sm animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={18} />
                <span>Без визита в офис</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={18} />
                <span>Страхование вкладов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={18} />
                <span>Лицензия ЦБ РФ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Преимущества</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Всё для вашего бизнеса
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные инструменты управления финансами в одном приложении
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 bg-gradient-to-br from-card to-muted/20 animate-slide-up overflow-hidden" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={benefit.icon} size={32} className="text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,221,45,0.03),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Тарифы</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Выберите свой план</h2>
            <p className="text-xl text-muted-foreground">Гибкие условия для любого бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative group ${tariff.popular ? 'border-primary/50 border-4 shadow-2xl shadow-primary/20 md:scale-110 z-10' : 'border-2 border-border/50'} hover:shadow-2xl transition-all duration-500 overflow-hidden animate-slide-up bg-gradient-to-br ${tariff.gradient}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-card/95 backdrop-blur-xl"></div>
                
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-primary to-yellow-400 text-secondary px-6 py-2 text-sm font-bold shadow-lg animate-float">
                      🔥 Популярный
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6 pt-8 relative z-10">
                  <CardTitle className="text-3xl font-black mb-4">{tariff.name}</CardTitle>
                  <div className="mt-6">
                    <div className={`text-5xl font-black mb-2 ${tariff.popular ? 'bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent' : ''}`}>
                      {tariff.price}
                    </div>
                    <CardDescription className="text-base font-medium">{tariff.period}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 px-6">
                  <ul className="space-y-4">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-1 ${tariff.popular ? 'bg-primary/20' : 'bg-muted'}`}>
                          <Icon name="Check" className={tariff.popular ? 'text-primary' : 'text-foreground'} size={16} />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-8 pb-8 relative z-10">
                  <Button 
                    className={`w-full ${tariff.popular ? 'bg-gradient-to-r from-primary to-yellow-400 hover:shadow-xl hover:shadow-primary/30 text-secondary font-bold' : 'bg-secondary hover:bg-secondary/90 text-white'} py-6 text-base rounded-xl transition-all hover:scale-105`}
                  >
                    {tariff.popular ? 'Начать сейчас' : 'Подключить'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Отзывы</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground">Реальные истории реальных людей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-2 bg-gradient-to-br from-card to-muted/10 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-yellow-400/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {review.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">{review.author}</CardTitle>
                      <CardDescription className="text-sm">{review.role} · {review.company}</CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-foreground/80 leading-relaxed">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-secondary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Надёжность</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Цифры говорят сами</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-yellow-400/20 group-hover:scale-110 transition-transform">
                  <Icon name={stat.icon} className="text-primary" size={28} />
                </div>
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,221,45,0.15),transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight">
            Готовы к переменам?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/70 max-w-3xl mx-auto font-light">
            Присоединяйтесь к миллиону предпринимателей, которые уже выбрали Т-банк
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold px-12 py-7 text-lg rounded-2xl shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105">
              Открыть счёт бесплатно
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-12 py-7 text-lg rounded-2xl border-2 border-white/20">
              Связаться с нами
            </Button>
          </div>

          <p className="mt-8 text-white/50 text-sm">Без скрытых платежей · Первые 3 месяца бесплатно</p>
        </div>
      </section>

      <footer className="bg-secondary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center">
                  <Icon name="Landmark" size={24} className="text-secondary" />
                </div>
                <span className="text-2xl font-black">Т-Банк</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Надёжный партнёр для развития вашего бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">Продукты</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="hover:text-primary transition-colors cursor-pointer">Расчётный счёт</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Бизнес-карты</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Эквайринг</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Зарплатный проект</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">Поддержка</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="hover:text-primary transition-colors cursor-pointer">8 (800) 555-35-35</li>
                <li className="hover:text-primary transition-colors cursor-pointer">support@tbank.ru</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Telegram-бот</li>
                <li className="hover:text-primary transition-colors cursor-pointer">База знаний</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">Компания</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="hover:text-primary transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Карьера</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Партнёрам</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Пресс-центр</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Т-Банк. Все права защищены. Лицензия ЦБ РФ № 2673
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
