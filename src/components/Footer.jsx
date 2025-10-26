import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-secondary">
      <div className="md:px-30">
        <div className="grid grid-rows-1 text-center md:grid-cols-2 pt-4">
          <div className="col-span-1">
            <h1>Subscribe to Our Newsletter</h1>
            <p>Get weekly recipes straight to your inbox.</p>
            <form action="" className="flex flex-row justify-center gap-2 p-4">
              <input
                type="email"
                name="email"
                placeholder="user@gmail.com"
                className="border rounded-md p-2 focus:outline-none"
              />
              <button className="cursor-pointer border rounded-md p-2 hover:bg-white hover:text-primary transition">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-span-1">
            <h2 className="">
              Follow {` `}
              <span className="">Chef Claude</span>
            </h2>
            <div className="flex flex-row gap-8 justify-center p-4">
              <a href="#">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#">
                <FaXTwitter className="text-xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p>© 2025 Chef Claude. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
