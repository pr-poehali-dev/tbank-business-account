import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const benefits = [
    {
      icon: "Landmark",
      title: "Быстрое открытие счёта",
      description: "Откройте расчётный счёт онлайн за 10 минут без визита в офис"
    },
    {
      icon: "FileCheck",
      title: "Удобная бухгалтерия",
      description: "Автоматическое формирование отчётности и интеграция с 1С"
    },
    {
      icon: "Shield",
      title: "Надёжная защита",
      description: "Многоуровневая система безопасности и страхование вкладов"
    },
    {
      icon: "Percent",
      title: "Выгодные тарифы",
      description: "Низкие комиссии и кэшбэк на остаток по счёту до 8% годовых"
    }
  ];

  const tariffs = [
    {
      name: "Старт",
      price: "0 ₽",
      period: "Бесплатно навсегда",
      features: [
        "Открытие и ведение счёта — 0 ₽",
        "Платежи — 0 ₽ (до 20 в месяц)",
        "Выпуск карты — бесплатно",
        "Интернет-банк и мобильное приложение"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      price: "490 ₽",
      period: "В месяц",
      features: [
        "Все возможности тарифа «Старт»",
        "Безлимитные платежи — 0 ₽",
        "Кэшбэк 8% на остаток",
        "Персональный менеджер",
        "Бухгалтерия и ЭДО в подарок"
      ],
      popular: true
    },
    {
      name: "Корпорация",
      price: "Индивидуально",
      period: "По запросу",
      features: [
        "Все возможности тарифа «Бизнес»",
        "Валютный контроль",
        "Зарплатный проект",
        "Эквайринг и торговый эквайринг",
        "Индивидуальные условия"
      ],
      popular: false
    }
  ];

  const reviews = [
    {
      company: "ООО «ТехноПром»",
      author: "Алексей Иванов, Генеральный директор",
      text: "Открыли счёт за 15 минут, все документы оформили онлайн. Очень удобный интернет-банк и отличная поддержка.",
      rating: 5
    },
    {
      company: "ИП Смирнова А.В.",
      author: "Анна Смирнова, Предприниматель",
      text: "Перешла в Т-банк год назад и очень довольна. Кэшбэк на остаток — реально работает, бухгалтерия встроенная экономит кучу времени.",
      rating: 5
    },
    {
      company: "ООО «Логистика+»",
      author: "Дмитрий Петров, Финансовый директор",
      text: "Работаем с Т-банком 3 года. Ни разу не подвели, платежи проходят моментально, комиссии минимальные.",
      rating: 5
    }
  ];

  const stats = [
    { value: "1 000 000+", label: "Довольных клиентов" },
    { value: "15 лет", label: "На рынке банковских услуг" },
    { value: "99.9%", label: "Время бесперебойной работы" },
    { value: "24/7", label: "Техподдержка" }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Расчётный счёт для бизнеса
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Откройте счёт онлайн за 10 минут и получите кэшбэк до 8% на остаток
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold px-8 py-6 text-lg">
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={32} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выберите оптимальный тариф для вашего бизнеса</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative ${tariff.popular ? 'border-primary border-4 shadow-2xl scale-105' : 'border-2'} hover:shadow-xl transition-all animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-secondary px-4 py-1">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-primary">{tariff.price}</div>
                    <CardDescription className="text-base mt-2">{tariff.period}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${tariff.popular ? 'bg-primary hover:bg-primary/90 text-secondary' : 'bg-secondary hover:bg-secondary/90 text-white'}`}
                    size="lg"
                  >
                    Подключить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.company}</CardTitle>
                  <CardDescription>{review.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Показатели надёжности</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Готовы начать?</h2>
          <p className="text-xl mb-8 text-secondary/80 max-w-2xl mx-auto">
            Откройте расчётный счёт в Т-банке прямо сейчас и получите бесплатное ведение счёта на 3 месяца
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-12 py-6 text-lg">
            Открыть счёт бесплатно
          </Button>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Landmark" size={24} />
                Т-Банк
              </h3>
              <p className="text-white/70">Надёжный партнёр для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-white/70">8 (800) 555-35-35</p>
              <p className="text-white/70">support@tbank.ru</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-white/70">Техподдержка: 24/7</p>
              <p className="text-white/70">Менеджеры: пн-пт 9:00-21:00</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 Т-Банк. Все права защищены. Лицензия ЦБ РФ № 2673</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
