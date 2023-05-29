import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Typewriter from "../components/Typewriter/Typewriter"
import TopHeader from "../components/TopHeader/TopHeader"
import NavBar from "../components/NavBar/NavBar"
import Chat from "../components/Chat/Chat"
import SearchBar from "../components/SearchBar/SearchBar"
import ModelsTable from '../components/ModelsTable/ModelsTable'

const inter = Inter({ subsets: ['latin'] })

interface IModel {
  id: string;
  object: string;
  created: number;
  owned_by: string;
  root: string;
  parent: string;
}

export default function Home() {
  const [data, setData] = useState<{ [key: string]: IModel[] } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data: { [key: string]: IModel[] } = await response.json();
      setData(data);
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

  console.log('data', typeof(data))
  console.log('data', data)

  if (!data) {
    return <div>Loading...</div>;
  }
   
  return (
    <main className={`flex flex-col items-start justify-start w-full min-h-screen p-12 pb-24 ${inter.className}`}>
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
        <ModelsTable data={data}/>
      </div>
    </main>
  )
}
