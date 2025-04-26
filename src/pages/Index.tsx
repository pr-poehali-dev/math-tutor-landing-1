import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-spacegray">
      {/* Шапка */}
      <header className="py-6 sticky top-0 bg-spacegray/95 backdrop-blur-sm z-10 border-b border-spacegray-100/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-creamy-100 font-medium text-lg">Учитель математики</div>
          
          {/* Навигационное меню */}
          <div className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-creamy-300 hover:text-creamy-100 hover:bg-spacegray-300"
              onClick={() => scrollToSection('home')}
            >
              Главная
            </Button>
            <Button 
              variant="ghost" 
              className="text-creamy-300 hover:text-creamy-100 hover:bg-spacegray-300"
              onClick={() => scrollToSection('services')}
            >
              Услуги
            </Button>
            <Button 
              variant="ghost" 
              className="text-creamy-300 hover:text-creamy-100 hover:bg-spacegray-300"
              onClick={() => scrollToSection('about')}
            >
              Обо мне
            </Button>
            <Button 
              variant="ghost" 
              className="text-creamy-300 hover:text-creamy-100 hover:bg-spacegray-300"
              onClick={() => scrollToSection('testimonials')}
            >
              Отзывы
            </Button>
            <Button 
              className="bg-creamy-100 text-spacegray-400 hover:bg-creamy-300"
              onClick={() => scrollToSection('contact')}
            >
              Записаться
            </Button>
          </div>
          
          {/* Мобильная кнопка записи */}
          <Button 
            className="md:hidden bg-creamy-100 text-spacegray-400 hover:bg-creamy-300"
            onClick={() => scrollToSection('contact')}
          >
            Записаться
          </Button>
        </div>
      </header>

      {/* Главный экран */}
      <section id="home" className="section pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Понятная математика с персональным подходом
              </h1>
              <p className="text-lg text-creamy-300/80 mb-8 max-w-lg">
                Превращаю сложные математические концепции в понятные и логичные шаги. 
                Индивидуальный подход к каждому ученику.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-creamy-100 text-spacegray-400 hover:bg-creamy-300 px-8 py-6 text-lg"
                  onClick={() => scrollToSection('services')}
                >
                  Узнать о занятиях
                </Button>
                <Button 
                  variant="outline" 
                  className="border-creamy-300 text-creamy-100 hover:bg-spacegray-300 px-8 py-6 text-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Записаться на занятие
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-creamy-400">
                  <img 
                    src="https://cdn.poehali.dev/files/ecd19386-860f-4961-82fd-9287a2f8d845.jpg" 
                    alt="Учитель математики" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-spacegray-300 p-4 rounded-2xl border border-spacegray-100">
                  <p className="text-creamy-400 font-medium">5+ лет опыта преподавания</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="section bg-spacegray-400">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Услуги и цены</h2>
            <p className="text-creamy-300/80 max-w-xl mx-auto">
              Выберите формат занятий, который подходит именно вам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Индивидуальные занятия" 
              description="Персональный подход с учетом особенностей ученика. Разбор непонятных тем, закрепление материала."
              price="1200 руб./час"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              }
            />
            
            <ServiceCard 
              title="Подготовка к экзаменам" 
              description="Целенаправленная подготовка к ОГЭ и ЕГЭ. Разбор типовых заданий, стратегия решения."
              price="1500 руб./час"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              }
            />
            
            <ServiceCard 
              title="Консультации" 
              description="Помощь с домашними заданиями, подготовка к контрольным работам, разбор сложных задач."
              price="800 руб./час"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* С кем работаю */}
      <section id="about" className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">С кем я работаю</h2>
              <div className="space-y-6">
                <Card className="bg-spacegray-300 border-spacegray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creamy-400">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      Ученики
                    </h3>
                    <ul className="space-y-2 text-creamy-300/80">
                      <li className="flex items-start gap-2">
                        <span className="text-creamy-400 mt-1">•</span>
                        <span>Школьники 5-11 классов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-creamy-400 mt-1">•</span>
                        <span>Абитуриенты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-creamy-400 mt-1">•</span>
                        <span>Студенты младших курсов</span>
                      </li>
                    </ul>
                  </div>
                </Card>
                
                <Card className="bg-spacegray-300 border-spacegray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creamy-400">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      Темы
                    </h3>
                    <ul className="space-y-2 text-creamy-300/80">
                      <li className="flex items-start gap-2">
                        <span className="text-creamy-400 mt-1">•</span>
                        <span>Школьная программа</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-creamy-400 mt-1">•</span>
                        <span>Алгебра и геометрия</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-creamy-400 mt-1">•</span>
                        <span>Подготовка к ОГЭ и ЕГЭ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-creamy-400 mt-1">•</span>
                        <span>Олимпиадная математика</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-40 bg-spacegray-300 rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/1425f826-45a0-4c6c-a9e9-8e4df7c665a9.jpg" 
                    alt="Математика" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-56 bg-spacegray-300 rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/ea23df8f-c4e1-4d8f-be7d-24de9a3ccaa5.jpg" 
                    alt="Обучение" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-10">
                <div className="h-56 bg-spacegray-300 rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/3ef2162a-6245-4d2a-8fc9-1dea99ec94d9.jpg" 
                    alt="Занятие" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 bg-spacegray-300 rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/734bbc7f-4667-4b42-89cf-2a5921ef2401.jpg" 
                    alt="Экзамен" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="testimonials" className="section bg-spacegray-400">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы учеников</h2>
            <p className="text-creamy-300/80 max-w-xl mx-auto">
              Что говорят мои ученики о занятиях
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Благодаря занятиям я смог поднять оценку с тройки до пятерки за полгода. Очень понятно объясняет даже сложные темы."
              author="Александр"
              age={15}
            />
            
            <TestimonialCard 
              quote="Сдала ЕГЭ на 92 балла! Без наших занятий это было бы невозможно. Разбирали сложные задания и тренировались на реальных вариантах."
              author="Мария"
              age={17}
            />
            
            <TestimonialCard 
              quote="Преподаватель всегда находит индивидуальный подход. Моему сыну наконец-то стала понятна и интересна математика."
              author="Елена"
              age={38}
            />
          </div>
        </div>
      </section>

      {/* Форма записи */}
      <section id="contact" className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Записаться на занятие</h2>
              <p className="text-creamy-300/80 mb-8">
                Заполните форму, и я свяжусь с вами для обсуждения деталей и планирования первого занятия.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="bg-spacegray-300 rounded-2xl p-8 border border-spacegray-100">
              <h3 className="text-2xl font-medium mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-creamy-100 text-spacegray-400 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-creamy-100">Телефон</h4>
                    <p className="text-creamy-300/80">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-creamy-100 text-spacegray-400 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-creamy-100">Email</h4>
                    <p className="text-creamy-300/80">math-tutor@example.com</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-creamy-100 text-spacegray-400 hover:bg-creamy-300 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.65 2.24a1.9 1.9 0 0 0-1.4-.58c-.41.03-1.97.21-4.17 1.5C11.8 5.46 6.21 10.39 3.1 16A2 2 0 0 0 4 18.9l1.3.9c1.17.8 2.74.56 3.58-.57l.92-1.56a1.98 1.98 0 0 0-.57-2.71l-.7-.5c1.03-3.09 5.78-9.3 7.26-9.3h1.77c.94.47 1.3 1.33 1.3 1.33l1.28-1.32c.54-.56.85-1.35.85-2.17a1.5 1.5 0 0 0-.45-1.07l.01.01z"/>
                    <path d="M8.5 8.5 15 15"/>
                  </svg>
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 border-t border-spacegray-100/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-creamy-300/60 mb-4 md:mb-0">
              © 2025 Учитель математики. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-creamy-300/80 hover:text-creamy-100 hover:bg-spacegray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="ghost" className="text-creamy-300/80 hover:text-creamy-100 hover:bg-spacegray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Button>
              <Button variant="ghost" className="text-creamy-300/80 hover:text-creamy-100 hover:bg-spacegray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
