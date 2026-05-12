import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import chefRobot from "../assets/images/chef-robot.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src={chefRobot} alt="Chef Claude" className="w-10" />
              <span className="font-press-start text-white text-xs tracking-tight">
                Chef Claude
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your AI-powered recipe assistant. Discover delicious meals from
              the ingredients you already have.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-press-start text-white mb-4 text-[0.6rem] uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "Claude Recipe", path: "/claude-recipe" },
                { name: "My Picks", path: "/my-picks" },
                { name: "About", path: "/about" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-press-start text-white mb-4 text-[0.6rem] uppercase tracking-widest">
              Newsletter
            </h3>
            <p className="text-sm text-white/80 mb-3">
              Get weekly recipes straight to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/20 border border-white/20 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-semibold text-xs px-3 py-2 rounded-xl cursor-pointer transition-all duration-[180ms] bg-white text-primary hover:bg-white/90 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © 2025 Chef Claude. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="X / Twitter" className="text-white/70 hover:text-white transition-colors">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
