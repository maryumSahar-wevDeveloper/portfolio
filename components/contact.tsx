"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {"I'm always open to discussing new opportunities and interesting projects"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{"Let's Connect"}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-xl">
              Whether you have a project in mind, want to collaborate, or just want to say hello,
              {"I'd"} love to hear from you. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gray-200 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 site-main-color" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold">Email</h4>
                  <p className="text-gray-600">contact@maryumsahar.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-200 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 site-main-color" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold">Phone</h4>
                  <p className="text-gray-600">+92 (315) 148-2835</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-200 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 site-main-color" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold">Location</h4>
                  <p className="text-gray-600">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full site-bg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
