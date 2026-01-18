// app/not-found.tsx
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl">Page not found</p>

      <Link
        href="/"
        className="mt-6 text-blue-600 underline"
      >
        Go back home
      </Link>
    </div>
  )
}
