import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-40 pb-40 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="site-main-color">Maryum Sahar</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate developer creating innovative solutions and beautiful user experiences. I specialize in
              modern web technologies and love bringing ideas to life through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="site-bg hover:bg-black">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/maryum-sahar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:site-bg transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:site-bg transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:site-bg transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <div className="text-9xl font-bold text-black">MS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
