export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-stack developer passionate about creating beautiful and functional web applications
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View Projects
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500">Profile Image</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello, I&apos;m John Doe</h3>
              <p className="text-gray-600 mb-4">
                I&apos;m a passionate full-stack developer with 5+ years of experience building web applications.
                I specialize in React, Next.js, Node.js, and modern web technologies.
              </p>
              <p className="text-gray-600 mb-6">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical blog posts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project {project} Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">MongoDB</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-600 hover:underline text-sm">View Demo</a>
                    <a href="#" className="text-blue-600 hover:underline text-sm">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <div className="text-4xl mb-2">🎨</div>
              </div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-gray-600">React, Next.js, Vue.js, Tailwind CSS</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-6 mb-4">
                <div className="text-4xl mb-2">⚙️</div>
              </div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Node.js, Express, Python, Django</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-6 mb-4">
                <div className="text-4xl mb-2">💾</div>
              </div>
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-sm text-gray-600">PostgreSQL, MongoDB, Redis, MySQL</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-6 mb-4">
                <div className="text-4xl mb-2">🛠️</div>
              </div>
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="text-sm text-gray-600">Git, Docker, AWS, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
