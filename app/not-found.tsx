import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <h1 className="font-serif text-8xl text-mocha mb-4">404</h1>
          <h2 className="font-serif text-3xl text-mocha mb-4">Page Not Found</h2>
          <p className="text-mocha-light text-lg">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-mocha text-cream rounded-full font-medium hover:bg-mocha-light transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/menu"
            className="px-6 py-3 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors"
          >
            View Menu
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
