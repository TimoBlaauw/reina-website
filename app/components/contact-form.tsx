"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Mail, Phone, User, Music, Clock, Send } from "lucide-react"

interface ContactFormProps {
  triggerText?: string
  className?: string
}

export default function ContactForm({ triggerText = "Plan een Kennismaking", className }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    genre: "",
    lessonType: "",
    availability: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        genre: "",
        lessonType: "",
        availability: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className={`bg-gradient-to-r p-2 text-xl from-bronze-500 to-bronze-600 hover:from-bronze-600 hover:to-bronze-700 text-white rounded-lg px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide ${className}`}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-bronze-200 text-burgundy-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center font-serif text-burgundy-900">
            Kennismakingsformulier
          </DialogTitle>
          <p className="text-center text-burgundy-700 mt-4 font-light">
            Vertel mij iets over uw achtergrond en muzikale ambities. Ik neem persoonlijk contact met u op om een
            kennismakingsgesprek in te plannen.
          </p>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-16">
            <div className="bg-bronze-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-bronze-200">
              <Send className="h-12 w-12 text-bronze-600" />
            </div>
            <h3 className="text-2xl font-bold text-burgundy-900 mb-6 font-serif">Dank u voor uw aanmelding</h3>
            <p className="text-burgundy-700 font-light">
              Ik neem binnen 24 uur persoonlijk contact met u op om uw kennismakingsgesprek in te plannen.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-burgundy-800 flex items-center font-medium">
                  <User className="h-4 w-4 mr-2 text-bronze-600" />
                  Volledige Naam *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="bg-cream-50 border-bronze-200 text-burgundy-900 placeholder:text-burgundy-400 focus:border-bronze-400 rounded-lg"
                  placeholder="Uw voor- en achternaam"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-burgundy-800 flex items-center font-medium">
                  <Mail className="h-4 w-4 mr-2 text-bronze-600" />
                  Email Adres *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-cream-50 border-bronze-200 text-burgundy-900 placeholder:text-burgundy-400 focus:border-bronze-400 rounded-lg"
                  placeholder="uw.email@voorbeeld.nl"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-burgundy-800 flex items-center font-medium">
                <Phone className="h-4 w-4 mr-2 text-bronze-600" />
                Telefoonnummer
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-cream-50 border-bronze-200 text-burgundy-900 placeholder:text-burgundy-400 focus:border-bronze-400 rounded-lg"
                placeholder="06 12 34 56 78"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-burgundy-800 flex items-center font-medium">
                  <Music className="h-4 w-4 mr-2 text-bronze-600" />
                  Zangervaring
                </Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger className="bg-cream-50 border-bronze-200 text-burgundy-900 focus:border-bronze-400 rounded-lg">
                    <SelectValue placeholder="Selecteer uw niveau" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-bronze-200 text-burgundy-900">
                    <SelectItem value="beginner">Beginner - geen ervaring</SelectItem>
                    <SelectItem value="some">Enige ervaring</SelectItem>
                    <SelectItem value="intermediate">Gevorderd amateur</SelectItem>
                    <SelectItem value="advanced">Ervaren zanger</SelectItem>
                    <SelectItem value="professional">Professionele voorbereiding</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-burgundy-800 flex items-center font-medium">
                  <Music className="h-4 w-4 mr-2 text-bronze-600" />
                  Muzikale Voorkeur
                </Label>
                <Select value={formData.genre} onValueChange={(value) => handleInputChange("genre", value)}>
                  <SelectTrigger className="bg-cream-50 border-bronze-200 text-burgundy-900 focus:border-bronze-400 rounded-lg">
                    <SelectValue placeholder="Selecteer genre" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-bronze-200 text-burgundy-900">
                    <SelectItem value="classical">Klassieke muziek/Opera</SelectItem>
                    <SelectItem value="musical">Musical Theater</SelectItem>
                    <SelectItem value="pop">Populaire muziek</SelectItem>
                    <SelectItem value="jazz">Jazz</SelectItem>
                    <SelectItem value="cabaret">Cabaret</SelectItem>
                    <SelectItem value="mixed">Diverse genres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-burgundy-800 flex items-center font-medium">
                <Calendar className="h-4 w-4 mr-2 text-bronze-600" />
                Type Zangonderwijs
              </Label>
              <Select value={formData.lessonType} onValueChange={(value) => handleInputChange("lessonType", value)}>
                <SelectTrigger className="bg-cream-50 border-bronze-200 text-burgundy-900 focus:border-bronze-400 rounded-lg">
                  <SelectValue placeholder="Selecteer lestype" />
                </SelectTrigger>
                <SelectContent className="bg-white border-bronze-200 text-burgundy-900">
                  <SelectItem value="trial">Kennismakingspakket (3×30 min - €48)</SelectItem>
                  <SelectItem value="individual">Individuele lessen</SelectItem>
                  <SelectItem value="masterclass">Masterclass</SelectItem>
                  <SelectItem value="consultation">Adviesgesprek</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-burgundy-800 flex items-center font-medium">
                <Clock className="h-4 w-4 mr-2 text-bronze-600" />
                Beschikbaarheid
              </Label>
              <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                <SelectTrigger className="bg-cream-50 border-bronze-200 text-burgundy-900 focus:border-bronze-400 rounded-lg">
                  <SelectValue placeholder="Wanneer kunt u?" />
                </SelectTrigger>
                <SelectContent className="bg-white border-bronze-200 text-burgundy-900">
                  <SelectItem value="monday">Maandag</SelectItem>
                  <SelectItem value="wednesday">Woensdag</SelectItem>
                  <SelectItem value="thursday">Donderdag</SelectItem>
                  <SelectItem value="flexible">Flexibel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-burgundy-800 font-medium">
                Aanvullende Informatie
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-cream-50 border-bronze-200 text-burgundy-900 placeholder:text-burgundy-400 focus:border-bronze-400 rounded-lg min-h-[120px]"
                placeholder="Vertel iets over uw muzikale doelstellingen, ervaring of specifieke wensen..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-bronze-500 to-bronze-600 hover:from-bronze-600 hover:to-bronze-700 text-white rounded-lg py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Versturen...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="h-5 w-5 mr-3" />
                  Verstuur Aanmelding
                </div>
              )}
            </Button>

            <p className="text-xs text-burgundy-600 text-center font-light">
              Uw gegevens worden vertrouwelijk behandeld en uitsluitend gebruikt voor contactdoeleinden.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
