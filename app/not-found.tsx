import Image from 'next/image';
import Link from 'next/link';
import BlackHole from "@/public/blackhole.svg"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <Image src={BlackHole} alt="Sad Duolingo" width={150} height={150} />
      <h1 className="text-3xl font-bold mt-4">Error 404</h1>
      <p className="text-gray-600 text-center mt-2 max-w-md">
        Sorry, the page you were looking for doesn’t exist. Try going to{' '}
        <Link href="/" className="text-blue-600 hover:underline">
          home
        </Link>
        .
      </p>
    </div>
  );
}
