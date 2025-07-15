import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl sm:text-4xl font-bold site-main-color mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, interests, and what drives me as a developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">My Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-xl">
              I'm a dedicated developer with a passion for creating meaningful digital experiences. My journey in
              technology began with curiosity and has evolved into a career focused on building innovative solutions
              that make a difference.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-xl">
              I believe in continuous learning and staying up-to-date with the latest technologies. When I'm not coding,
              you can find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold site-main-color mb-1">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold site-main-color mb-1">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="About me"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
