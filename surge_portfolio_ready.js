import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

export default function Portfolio() {
  const projects = [
    { title: "Placeholder Project 1", description: "This is a placeholder for one of your showcased works.", image: "https://via.placeholder.com/400x250", link: "#" },
    { title: "Placeholder Project 2", description: "Another placeholder project with brief info.", image: "https://via.placeholder.com/400x250", link: "#" },
    { title: "Placeholder Project 3", description: "Highlight a cool project here.", image: "https://via.placeholder.com/400x250", link: "#" },
  ];

  const stats = [
    { label: "Views", value: "5M+" },
    { label: "Years Experience", value: "1+" },
    { label: "Projects", value: "400+" },
  ];

  const products = [
    { title: "Placeholder Pack 1", desc: "A sample product description.", price: "$9.99", link: "#" },
    { title: "Placeholder Pack 2", desc: "Another product placeholder.", price: "$14.99", link: "#" },
    { title: "Placeholder Pack 3", desc: "Your pack could go here.", price: "$19.99", link: "#" },
  ];

  const socials = [
    { icon: <FaTwitter />, link: process.env.NEXT_PUBLIC_TWITTER_URL },
    { icon: <FaInstagram />, link: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
    { icon: <FaYoutube />, link: process.env.NEXT_PUBLIC_YOUTUBE_URL },
    { icon: <FaDiscord />, link: process.env.NEXT_PUBLIC_DISCORD_URL },
  ];

  return (
    <div className="min-h-screen relative bg-black text-blue-300 p-8 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,0,255,0.15),_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40"></div>
      </div>

      <div className="relative z-10">
        <nav className="flex justify-between mb-12">
          <h1 className="text-xl font-bold text-cyan-400">{process.env.NEXT_PUBLIC_SITE_NAME}</h1>
          <div className="space-x-4">
            <a href="#work" className="hover:text-cyan-400">Work</a>
            <a href="#shop" className="hover:text-cyan-400">Shop</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
          </div>
        </nav>

        <header className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-extrabold mb-4">
            <span className="text-white">{process.env.NEXT_PUBLIC_HERO_TEXT} </span>
            <span className="text-cyan-400">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg">
            {process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
          </motion.p>
        </header>

        <section className="flex justify-center gap-12 mb-16">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 * i }} className="text-center">
              <div className="text-4xl font-bold text-cyan-400">{s.value}</div>
              <div>{s.label}</div>
            </motion.div>
          ))}
        </section>

        <section id="work" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-cyan-400 text-center">My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }}>
                <Card className="bg-black border border-blue-800 hover:border-cyan-400 transition">
                  <CardContent className="p-4">
                    <img src={project.image} alt={project.title} className="rounded-xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-black transition shadow-md">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="shop" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-cyan-400 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((prod, idx) => (
              <Card key={idx} className="bg-black border border-blue-800 hover:border-cyan-400 transition">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{prod.title}</h3>
                  <p className="mb-4">{prod.desc}</p>
                  <div className="font-bold mb-2">{prod.price}</div>
                  <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-black transition shadow-md">
                    <a href={prod.link} target="_blank" rel="noopener noreferrer">
                      Buy Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-cyan-400">About Me</h2>
          <p className="max-w-xl mx-auto">
            This is a placeholder for your biography or personal description. You can add details about your experience, style, and what sets you apart.
          </p>
        </section>

        <footer className="text-center text-blue-500 space-y-4">
          <div className="flex justify-center space-x-6 text-2xl">
            {socials.map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                {social.icon}
              </a>
            ))}
          </div>
          <div>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
