"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Sparkles, 
  Building2, 
  Car, 
  Shield, 
  Home,
  Clock, 
  Users,
  CheckCircle,
  Quote
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Curățenie Rezidențială",
    description: "Servicii complete de curățenie pentru casa ta, de la curățenie generală la mentenanță regulată.",
    features: ["Curățenie generală", "Curățenie după renovare", "Mentenanță regulată", "Curățenie ferestre"]
  },
  {
    icon: Building2,
    title: "Curățenie Comercială",
    description: "Soluții profesionale pentru birouri, magazine și spații comerciale pentru o imagine impecabilă.",
    features: ["Curățenie birouri", "Dezinfecție spații", "Întreținere zilnică", "Curățenie după program"]
  },
  {
    icon: Car,
    title: "Curățenie Auto",
    description: "Servicii complete de curățenie pentru autoturisme, de la interior la exterior.",
    features: ["Curățenie interior", "Spălare exterior", "Ceruire carroserie", "Curățenie tapițerie"]
  }
];

const testimonials = [
  {
    name: "Maria Popescu",
    role: "Proprietar locuință",
    content: "Servicii excelente! Echipa este foarte profesională și atentă la detalii. Casa mea nu a fost niciodată mai curată.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    name: "Alexandru Ionescu",
    role: "Manager birou",
    content: "Colaborez cu ei de 2 ani pentru curățenia biroului nostru. Întotdeauna punctuali și eficienți. Recomand cu încredere!",
    rating: 5,
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg"
  },
  {
    name: "Elena Dumitrescu",
    role: "Proprietar restaurant",
    content: "Profesionalismul lor este impresionant. Respectă toate standardele de igienă necesare pentru industria alimentară.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  }
];

const pricingPlans = [
  {
    name: "Pachet Esențial",
    price: "150",
    period: "serviciu",
    description: "Perfect pentru apartamentele mici",
    features: [
      "Curățenie generală 2 camere",
      "Aspirare și ștergere praf",
      "Curățenie baie și bucătărie",
      "Până la 3 ore de lucru"
    ]
  },
  {
    name: "Pachet Standard",
    price: "250",
    period: "serviciu",
    description: "Ideal pentru case medii",
    features: [
      "Curățenie generală 4 camere",
      "Curățenie ferestre interior",
      "Dezinfecție suprafețe",
      "Până la 5 ore de lucru"
    ],
    popular: true
  },
  {
    name: "Pachet Premium",
    price: "350",
    period: "serviciu",
    description: "Pentru case mari și cerințe speciale",
    features: [
      "Curățenie completă 6+ camere",
      "Curățenie ferestre interior/exterior",
      "Curățenie după renovare",
      "Până la 8 ore de lucru"
    ]
  }
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Formularul a fost trimis cu succes! Vă vom contacta în curând.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                CurățeniePro
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicii" className="text-gray-700 hover:text-blue-600 transition-colors">Servicii</a>
              <a href="#preturi" className="text-gray-700 hover:text-blue-600 transition-colors">Prețuri</a>
              <a href="#testimoniale" className="text-gray-700 hover:text-blue-600 transition-colors">Testimoniale</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>0721 234 567</span>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Solicită Ofertă</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  #1 Servicii de Curățenie în București
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Curățenie
                  <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Profesională
                  </span>
                  pentru Casa Ta
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transformăm spațiul tău într-un mediu curat și sănătos cu servicii de curățenie de înaltă calitate. 
                  Echipa noastră profesională folosește doar produse eco-friendly.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" onClick={() => window.location.href = 'tel:0721234567'}>
                  <Phone className="mr-2 h-5 w-5" />
                  Sună Acum
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Vezi Serviciile
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Clienți Mulțumiți</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5 ani</div>
                  <div className="text-sm text-gray-600">Experiență</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Disponibilitate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg"
                  alt="Servicii de curățenie profesională"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">100% Garanție</div>
                    <div className="text-sm text-gray-600">Satisfacție garantată</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Serviciile Noastre</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Soluții Complete de Curățenie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim o gamă completă de servicii de curățenie adaptate nevoilor tale specifice, 
              de la curățenie rezidențială la soluții comerciale avansate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Solicită Ofertă
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">De Ce Să Ne Alegi</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Expertiză și Încredere în Fiecare Serviciu
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Cu peste 5 ani de experiență în domeniul curățeniei profesionale, 
                ne-am construit o reputație solidă bazată pe calitate și încredere.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Personal Verificat și Asigurat</h3>
                    <p className="text-gray-600">Toți angajații noștri sunt verificați și avem asigurare completă pentru protecția ta.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Punctualitate Garantată</h3>
                    <p className="text-gray-600">Respectăm întotdeauna programările și ajungem la timp pentru fiecare serviciu.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Echipă Profesională</h3>
                    <p className="text-gray-600">Echipa noastră este antrenată în cele mai noi tehnici și folosește echipamente moderne.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6195900/pexels-photo-6195900.jpeg"
                alt="Echipa profesională de curățenie"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preturi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Prețuri Transparente</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pachete Adaptate Nevoilor Tale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alege pachetul care se potrivește cel mai bine nevoilor tale. 
              Prețuri fixe, fără costuri ascunse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Cel Mai Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">RON/{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Comandă Acum
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoniale" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Testimoniale</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mândria noastră sunt clienții mulțumiți care ne recomandă cu încredere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-blue-600 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">Contactează-ne</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Hai să Discutăm Despre Nevoile Tale
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Suntem aici pentru a răspunde la toate întrebările tale și pentru a-ți oferi 
                o ofertă personalizată pentru serviciile de curățenie.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefon</div>
                    <div className="text-gray-600">0721 234 567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@curateniepro.ro</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adresă</div>
                    <div className="text-gray-600">Str. Exemplu Nr. 123, București</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Solicită o Ofertă Gratuită</CardTitle>
                <CardDescription>
                  Completează formularul și te vom contacta în cel mai scurt timp.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Nume</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Numele tău"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Telefon</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0721 234 567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@exemplu.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Serviciu Dorit</label>
                    <Input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      placeholder="ex: Curățenie rezidențială"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Mesaj</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descrie-ne nevoile tale..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Trimite Cererea
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">CurățeniePro</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Servicii profesionale de curățenie pentru casa și afacerea ta. 
                Calitate și încredere de peste 5 ani.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div className="bg-gray-800 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <div className="bg-gray-800 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-orange-400" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicii</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Curățenie Rezidențială</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Curățenie Comercială</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Curățenie Auto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Curățenie După Renovare</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>0721 234 567</li>
                <li>contact@curateniepro.ro</li>
                <li>Str. Exemplu Nr. 123<br />București</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CurățeniePro. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}