import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Users, Award, MapPin, Phone, Mail, Clock, Star, Quote } from "lucide-react"
import ContactForm from "./components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 via-sage-50 to-burgundy-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-bronze-200/30 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Image
              src="/images/logo-zangstudio-reina.webp"
              alt="Reina Waagenaar Zangstudio"
              width={150}
              height={32}
            />
            <div className="hidden md:flex items-center space-x-10">

              <Link
                href="#about"
                className="text-burgundy-800 hover:text-bronze-600 transition-colors font-medium tracking-wide text-xl px-2 py-1"
              >
                Over Mij
              </Link>
              <Link
                href="#services"
                className="text-burgundy-800 hover:text-bronze-600 transition-colors font-medium tracking-wide text-xl px-2 py-1"
              >
                Zangonderwijs
              </Link>
              <Link
                href="#techniques"
                className="text-burgundy-800 hover:text-bronze-600 transition-colors font-medium tracking-wide text-xl px-2 py-1"
              >
                Methodiek
              </Link>
              <Link
                href="#contact"
                className="text-burgundy-800 hover:text-bronze-600 transition-colors font-medium tracking-wide text-xl px-2 py-1"
              >
                Contact
              </Link>

              <ContactForm />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Subtle Musical Notes Background */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 left-16 text-bronze-300 text-6xl font-light">♪</div>
          <div className="absolute top-40 right-24 text-sage-300 text-4xl font-light">♫</div>
          <div className="absolute bottom-32 left-1/4 text-burgundy-200 text-5xl font-light">♬</div>
          <div className="absolute top-1/2 right-1/3 text-bronze-200 text-3xl font-light">♩</div>
          <div className="absolute bottom-20 right-16 text-sage-200 text-4xl font-light">♭</div>
          <div className="absolute top-32 left-1/3 text-burgundy-300 text-3xl font-light">♯</div>
          <div className="absolute bottom-40 left-20 text-bronze-200 text-5xl font-light">𝄞</div>
          <div className="absolute top-60 right-12 text-sage-300 text-3xl font-light">𝄢</div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <Badge className="bg-bronze-100 text-bronze-800 border border-bronze-300 rounded-full px-6 py-3 text-sm font-medium tracking-wide">
                  Meer dan 20 jaar ervaring in klassieke zang
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold text-burgundy-900 leading-tight font-serif">
                  Ontdek de Diepte
                  <span className="text-bronze-600 block">van Uw Stem</span>
                </h1>
                <p className="text-xl text-burgundy-700 leading-relaxed font-light">
                  In mijn zangstudio in Tilburg begeleid ik u als ervaren operazangeres op uw muzikale ontwikkeling. Van
                  fundamentele techniek tot artistieke expressie - samen ontdekken we de unieke mogelijkheden van uw
                  stem.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <ContactForm triggerText="Plan een Kennismaking" />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-burgundy-300 text-burgundy-700 hover:bg-burgundy-50 bg-white rounded-lg px-8 py-4 font-medium tracking-wide"
                >
                  Lees Meer Over Mijn Aanpak
                </Button>
              </div>

              <div className="flex items-center space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-bronze-600 font-serif">20+</div>
                  <div className="text-sm text-burgundy-600 font-medium tracking-wider uppercase">Jaar Ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-bronze-600 font-serif">500+</div>
                  <div className="text-sm text-burgundy-600 font-medium tracking-wider uppercase">Leerlingen</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-bronze-600 font-serif">5</div>
                  <div className="text-sm text-burgundy-600 font-medium tracking-wider uppercase">Disciplines</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-bronze-200/40 to-burgundy-200/40 rounded-2xl transform rotate-1 blur-sm"></div>
              <Image
                src="/images/reina-performance.webp"
                alt="Reina Waagenaar tijdens een klassiek optreden"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] border border-cream-200"
              />
              <div className="absolute -bottom-6 -left-6 bg-white border border-bronze-200 text-burgundy-800 p-6 rounded-xl shadow-xl">
                <Quote className="h-6 w-6 mb-3 text-bronze-600" />
                <div className="font-medium text-sm italic">"De stem is het meest persoonlijke instrument"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        {/* Subtle Musical Notes */}
        <div className="absolute inset-0 opacity-6">
          <div className="absolute top-24 right-32 text-bronze-200 text-4xl font-light">♪</div>
          <div className="absolute bottom-32 left-24 text-sage-200 text-5xl font-light">♫</div>
          <div className="absolute top-1/2 left-16 text-burgundy-200 text-3xl font-light">♬</div>
          <div className="absolute top-40 right-16 text-bronze-300 text-3xl font-light">♩</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/reina-studio.jpg"
                alt="Reina Waagenaar in haar zangstudio"
                width={600}
                height={700}
                className="rounded-2xl shadow-xl object-cover w-full h-[600px] border border-cream-200"
              />
              <div className="absolute -bottom-8 -right-8 bg-bronze-100 text-burgundy-800 p-8 rounded-xl shadow-xl border border-bronze-200">
                <Music className="h-10 w-10 mb-4 text-bronze-600" />
                <div className="font-bold text-xl font-serif">Zangstudio</div>
                <div className="text-bronze-700 font-medium">Tilburg</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-burgundy-900 mb-8 font-serif leading-tight">
                  Een Persoonlijke Benadering van Zangonderwijs
                </h2>
                <p className="text-lg text-burgundy-700 leading-relaxed mb-6 font-light">
                  Als operazangeres met meer dan twee decennia ervaring, combineer ik klassieke zangtradities met
                  moderne pedagogische inzichten. In mijn studio creëer ik een omgeving waarin elke leerling zich kan
                  ontwikkelen volgens zijn of haar unieke mogelijkheden.
                </p>
                <p className="text-lg text-burgundy-700 leading-relaxed font-light">
                  Of u nu aspiraties heeft in de klassieke muziek, musical theater, of hedendaagse genres - mijn
                  benadering is altijd gebaseerd op solide technische fundamenten en artistieke integriteit.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-cream-50 border-cream-200 rounded-xl shadow-sm">
                  <CardContent className="p-8 text-center">
                    <Users className="h-10 w-10 text-bronze-600 mx-auto mb-4" />
                    <div className="font-semibold text-burgundy-800 text-lg font-serif">Alle Niveaus</div>
                    <div className="text-sm text-burgundy-600 font-medium">Beginner tot Professioneel</div>
                  </CardContent>
                </Card>
                <Card className="bg-sage-50 border-sage-200 rounded-xl shadow-sm">
                  <CardContent className="p-8 text-center">
                    <Award className="h-10 w-10 text-bronze-600 mx-auto mb-4" />
                    <div className="font-semibold text-burgundy-800 text-lg font-serif">Diverse Genres</div>
                    <div className="text-sm text-burgundy-600 font-medium">Klassiek, Musical, Hedendaags</div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-burgundy-50 to-bronze-50 p-8 rounded-xl border border-burgundy-200">
                <h3 className="font-bold text-burgundy-800 mb-4 text-xl font-serif">Mijn Filosofie</h3>
                <p className="text-burgundy-700 leading-relaxed font-light">
                  Elke stem heeft zijn eigen karakter en potentieel. Door verschillende klassieke en hedendaagse
                  technieken te integreren, help ik u uw authentieke zangstem te ontwikkelen en uw artistieke expressie
                  te verdiepen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-sage-50 to-burgundy-50 relative">
        {/* Musical Notes Background */}
        <div className="absolute inset-0 opacity-6">
          <div className="absolute top-32 left-20 text-bronze-200 text-4xl font-light">♪</div>
          <div className="absolute top-60 right-32 text-sage-200 text-5xl font-light">♫</div>
          <div className="absolute bottom-40 left-1/3 text-burgundy-200 text-3xl font-light">♬</div>
          <div className="absolute bottom-20 right-20 text-bronze-300 text-4xl font-light">♩</div>
          <div className="absolute top-1/2 left-12 text-sage-300 text-3xl font-light">♭</div>
          <div className="absolute top-20 right-1/4 text-burgundy-200 text-3xl font-light">♯</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-burgundy-900 mb-6 font-serif">Zangonderwijs op Maat</h2>
            <p className="text-xl text-burgundy-700 max-w-4xl mx-auto leading-relaxed font-light">
              Van individuele begeleiding tot groepsworkshops - ik bied verschillende vormen van zangonderwijs die
              aansluiten bij uw persoonlijke doelstellingen en niveau.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-white border-bronze-200 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-bronze-100 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <Music className="h-10 w-10 text-bronze-600" />
                </div>
                <h3 className="text-2xl font-bold text-burgundy-900 mb-6 font-serif">Individuele Lessen</h3>
                <p className="text-burgundy-700 mb-8 leading-relaxed font-light">
                  Persoonlijke begeleiding waarbij we werken aan techniek, interpretatie en repertoire-ontwikkeling.
                  Elke les wordt afgestemd op uw specifieke behoeften en doelstellingen.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-burgundy-600">
                    <Clock className="h-4 w-4 mr-3 text-bronze-600" />
                    <span className="font-medium">30-60 minuten per sessie</span>
                  </div>
                  <div className="flex items-center text-sm text-burgundy-600">
                    <Star className="h-4 w-4 mr-3 text-bronze-600" />
                    <span className="font-medium">Flexibele planning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-bronze-200 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-sage-100 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <Users className="h-10 w-10 text-sage-600" />
                </div>
                <h3 className="text-2xl font-bold text-burgundy-900 mb-6 font-serif">Masterclasses</h3>
                <p className="text-burgundy-700 mb-8 leading-relaxed font-light">
                  Intensieve groepsworkshops voor gevorderde zangers die hun techniek willen verfijnen en nieuwe
                  dimensies van muzikale expressie willen verkennen.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-burgundy-600">
                    <Users className="h-4 w-4 mr-3 text-sage-600" />
                    <span className="font-medium">Maximaal 8 deelnemers</span>
                  </div>
                  <div className="flex items-center text-sm text-burgundy-600">
                    <Award className="h-4 w-4 mr-3 text-sage-600" />
                    <span className="font-medium">Gevorderd niveau</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-bronze-200 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-burgundy-100 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <Award className="h-10 w-10 text-burgundy-600" />
                </div>
                <h3 className="text-2xl font-bold text-burgundy-900 mb-6 font-serif">Kennismakingspakket</h3>
                <p className="text-burgundy-700 mb-8 leading-relaxed font-light">
                  Drie introductielesssen waarin we uw stem analyseren, doelstellingen bespreken en een gepersonaliseerd
                  leertraject ontwikkelen.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-burgundy-600">
                    <Clock className="h-4 w-4 mr-3 text-burgundy-600" />
                    <span className="font-medium">3 × 30 minuten</span>
                  </div>
                  <div className="text-3xl font-bold text-bronze-600 font-serif">€48,-</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section id="techniques" className="py-20 bg-white relative">
        {/* Musical Notes Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 text-bronze-200 text-8xl font-light">𝄞</div>
          <div className="absolute bottom-1/4 right-1/4 text-sage-200 text-6xl font-light">𝄢</div>
          <div className="absolute top-20 right-20 text-burgundy-200 text-4xl font-light">♪</div>
          <div className="absolute bottom-32 left-20 text-bronze-300 text-5xl font-light">♫</div>
          <div className="absolute top-1/2 right-12 text-sage-300 text-3xl font-light">♬</div>
          <div className="absolute bottom-1/2 left-16 text-burgundy-300 text-4xl font-light">♩</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-burgundy-900 mb-6 font-serif">Methodiek & Technieken</h2>
            <p className="text-xl text-burgundy-700 max-w-4xl mx-auto leading-relaxed font-light">
              Mijn onderwijsmethodiek is gebaseerd op bewezen klassieke zangtechnieken, gecombineerd met hedendaagse
              wetenschappelijke inzichten in stemfysiologie en pedagogiek.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-bronze-100 to-bronze-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Music className="h-16 w-16 text-bronze-700" />
              </div>
              <h3 className="text-2xl font-bold text-burgundy-900 mb-6 font-serif">Pahn Methode</h3>
              <p className="text-burgundy-700 leading-relaxed font-light">
                Een verfijnde nasaleermethode die de natuurlijke resonantie van de stem optimaliseert. Deze benadering
                vormt de basis voor een gezonde en krachtige stemproductie.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-sage-100 to-sage-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Award className="h-16 w-16 text-sage-700" />
              </div>
              <h3 className="text-2xl font-bold text-burgundy-900 mb-6 font-serif">Estill Voice Training</h3>
              <p className="text-burgundy-700 leading-relaxed font-light">
                Wetenschappelijk gefundeerde technieken voor bewuste controle over verschillende stemkwaliteiten. Deze
                methode biedt precisie en flexibiliteit in vocale expressie.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-burgundy-100 to-burgundy-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Users className="h-16 w-16 text-burgundy-700" />
              </div>
              <h3 className="text-2xl font-bold text-burgundy-900 mb-6 font-serif">Lichtenberg Methode</h3>
              <p className="text-burgundy-700 leading-relaxed font-light">
                Een holistische benadering die lichaamsbewustzijn, ademtechniek en emotionele expressie integreert voor
                authentieke en overtuigende zangtechniek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-cream-50 to-sage-50 relative">
        {/* Musical Notes Background */}
        <div className="absolute inset-0 opacity-6">
          <div className="absolute top-20 right-24 text-bronze-200 text-4xl font-light">♪</div>
          <div className="absolute bottom-32 left-32 text-sage-200 text-5xl font-light">♫</div>
          <div className="absolute top-1/2 right-16 text-burgundy-200 text-3xl font-light">♬</div>
          <div className="absolute bottom-20 left-20 text-bronze-300 text-4xl font-light">♩</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-burgundy-900 mb-6 font-serif">Contact & Informatie</h2>
            <p className="text-xl text-burgundy-700 max-w-3xl mx-auto font-light">
              Voor vragen over zangonderwijs of het plannen van een kennismakingsgesprek kunt u contact met mij opnemen.
              Ik bespreek graag uw muzikale ambities en mogelijkheden.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="bg-white border-bronze-200 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-burgundy-900 mb-8 font-serif">Contactgegevens</h3>

                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="bg-bronze-100 p-4 rounded-xl">
                      <Phone className="h-8 w-8 text-bronze-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-burgundy-800 text-lg">Telefoon</div>
                      <div className="text-burgundy-600 text-xl font-light">06 36 10 70 27</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="bg-sage-100 p-4 rounded-xl">
                      <Mail className="h-8 w-8 text-sage-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-burgundy-800 text-lg">Email</div>
                      <div className="text-burgundy-600 text-xl font-light">reinawaagenaar@hotmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="bg-burgundy-100 p-4 rounded-xl">
                      <MapPin className="h-8 w-8 text-burgundy-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-burgundy-800 text-lg">Studio Adres</div>
                      <div className="text-burgundy-600 text-lg font-light">
                        Carré 32, Atelier 97b
                        <br />
                        Tilburg
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="bg-bronze-100 p-4 rounded-xl">
                      <Clock className="h-8 w-8 text-bronze-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-burgundy-800 text-lg">Lesdagen</div>
                      <div className="text-burgundy-600 text-lg font-light">Maandag, Woensdag & Donderdag</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-bronze-100 to-bronze-200 border-bronze-300 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-10">
                  <h4 className="font-bold text-burgundy-900 mb-6 text-2xl font-serif">Kennismakingspakket</h4>
                  <p className="text-burgundy-800 mb-8 leading-relaxed font-light">
                    Drie persoonlijke zanglessen waarin we uw stem analyseren, uw doelstellingen bespreken en een
                    gepersonaliseerd ontwikkelingsplan opstellen.
                  </p>
                  <div className="flex items-baseline space-x-4 mb-8">
                    <div className="text-4xl font-bold text-burgundy-900 font-serif">€48,-</div>
                    <div className="text-burgundy-600 line-through text-lg">€60,-</div>
                  </div>
                  <ContactForm triggerText="Plan Kennismakingspakket" className="w-full" />
                </CardContent>
              </Card>

              <Card className="bg-white border-sage-200 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-10">
                  <h4 className="font-bold text-burgundy-900 mb-6 text-xl font-serif">Wat U Kunt Verwachten</h4>
                  <ul className="space-y-4 text-burgundy-700 font-light">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-bronze-500 rounded-full mr-4"></div>
                      Uitgebreide stemanalyse en persoonlijke doelstellingen
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-sage-500 rounded-full mr-4"></div>
                      Kennismaking met verschillende zangtechnieken
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-burgundy-500 rounded-full mr-4"></div>
                      Gepersonaliseerd ontwikkelingsplan en vervolgtraject
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-burgundy-900 pt-8 pb-16 relative">
        {/* Final Musical Notes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-burgundy-300 text-9xl font-light">
            𝄞
          </div>
          <div className="absolute top-8 left-16 text-burgundy-400 text-4xl font-light">♪</div>
          <div className="absolute bottom-8 right-16 text-burgundy-400 text-5xl font-light">♫</div>
        </div>

        {/* Made with love by TriviTurbo */}
        <div className="absolute bottom-4 right-6 z-20">
          <span className="flex items-center text-burgundy-300 text-sm font-light font-sans space-x-1">
            <span>made with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-4 w-4 text-bronze-400 mx-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            <span>by</span>
            <a
              href="https://www.triviturbo.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-bronze-400 transition-colors"
            >
              TriviTurbo
            </a>
          </span>
        </div>

        <div className="mx-auto px-6 relative z-10">
          <div className="text-center">
            <Image
              src="/images/logo-zangstudio-reina.webp"
              alt="Reina Waagenaar Zangstudio"
              width={160}
              height={52}
              className="mx-auto mb-10 brightness-0 invert"
            />
            <p className="text-burgundy-200 mb-8 text-lg font-light">
              Zangstudio Reina Waagenaar - Klassieke zangtradities voor de moderne tijd
            </p>
            <div className="flex justify-center space-x-8 text-burgundy-300 mb-8 text-sm">
              <span className="flex items-center font-medium">
                <MapPin className="h-4 w-4 mr-2" />
                Carré 32, Atelier 97b, Tilburg
              </span>
              <span className="flex items-center font-medium">
                <Phone className="h-4 w-4 mr-2" />
                06 36 10 70 27
              </span>
            </div>
            <div className="pt-8 border-t border-burgundy-800 text-burgundy-400 text-sm font-light">
              © 2024 Zangstudio Reina Waagenaar. Alle rechten voorbehouden.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
