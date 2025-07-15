import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led frontend development for multiple client projects, implementing modern React applications with focus on performance and user experience.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      description:
        "Developed and maintained web applications using modern JavaScript frameworks and backend technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Frontend Developer",
      company: "Startup Co.",
      period: "2020 - 2021",
      description:
        "Built responsive web applications and collaborated with design teams to create intuitive user interfaces.",
      technologies: ["JavaScript", "React", "CSS", "HTML"],
    },
    {
      title: "UI Engineer",
      company: "Creative Studio",
      period: "2019 - 2020",
      description:
        "Designed and implemented user interfaces for e-commerce platforms and marketing websites.",
      technologies: ["Vue.js", "Sass", "WebGL", "Figma"],
    },
    {
      title: "Web Developer",
      company: "Tech Startup",
      period: "2018 - 2019",
      description:
        "Contributed to building the company's core product and marketing website with responsive design.",
      technologies: ["JavaScript", "PHP", "WordPress", "Bootstrap"],
    },
    {
      title: "Junior Developer",
      company: "Digital Solutions",
      period: "2017 - 2018",
      description:
        "Assisted senior developers in building and maintaining client websites and applications.",
      technologies: ["HTML", "CSS", "jQuery", "Laravel"],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      {exp.title}
                    </CardTitle>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 sm:mt-0 bg-indigo-100 text-indigo-800">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4 ">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-gray-100 text-gray-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}