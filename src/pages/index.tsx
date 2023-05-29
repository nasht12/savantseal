import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Typewriter from "../components/Typewriter/Typewriter"
import TopHeader from "../components/TopHeader/TopHeader"
import NavBar from "../components/NavBar/NavBar"
import Chat from "../components/Chat/Chat"
import SearchBar from "../components/SearchBar/SearchBar"

const inter = Inter({ subsets: ['latin'] })

type DataType = {
  prompt: string;
  response: string;
};

export default function Home() {
  const [data, setData] = useState<DataType | null>(null);
  const [data2, setData2] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: 'Your prompt here',
        }),
      });

      const response2 = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: 'Your prompt here',
        }),
      });

      const data = await response.json();
      const data2 = await response2.json();
      setData(data);
      setData2(data2);
    };

    fetchData();
  }, []);

  const startMessages = [
    {
      sender: 'Obi-Wan Kenobi',
      time: '12:45',
      text: 'You were the Chosen One!',
      status: 'Delivered',
      avatarSrc:  '/favicon.ico',
      isStart: true,
    },
  ];

  const endMessages = [
    {
      sender: 'Anakin',
      time: '12:46',
      text: 'I hate you!',
      status: 'Seen at 12:46',
      avatarSrc:  '/favicon.ico',
      isStart: false,
    },
  ];

  if (!data) {
    return <div>Loading...</div>;
  }
   
  return (
    <main className={`flex flex-col items-start justify-start w-full min-h-screen p-12 pb-24 ${inter.className}`}>
    {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> */}
      {/* <code className="font-mono font-bold">Savant Seal</code> */}
    {/* </div> */}
    <NavBar />
    <div className="w-full">
      <Chat messages={startMessages} />
    </div>
    <div className="w-full">
      <Chat messages={endMessages} />
    </div>
    <div className="bottom-0 w-full">
    <SearchBar />
    </div>
    <div>
      <h1>Prompt: {data.prompt}</h1>
      <h2>Response: {data.response}</h2>
    </div>
    <div>
      <h1>Prompt2: {data2.prompt}</h1>
      <h2>Response2: {data2.response}</h2>
    </div>
  </main>
  )
}
