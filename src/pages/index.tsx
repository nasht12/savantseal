import Image from 'next/image'
import { Inter } from 'next/font/google'
import Typewriter from '@/components/Typewriter/Typewriter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <code className="font-mono font-bold">Savant Seal</code>
      </div>
<div>
<Typewriter text="saavant seal. An AI assistant for college applications" speed={50} />
</div>
    </main>
  )
}
