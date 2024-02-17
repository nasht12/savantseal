import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import "./home.css";
import PlainSphereRender  from "../components/three-sphere";
import { auth, currentUser } from "@clerk/nextjs";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Oso",
    designation: "The labrador",
    content: (
      <p>
        Signed up after chasing my tail about my future.{" "}
        <Highlight>Would recommend to any pup</Highlight> looking to take a leap
        out of the yard and into the classroom 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Delta",
    designation: "Umm, a little bit of everything?",
    content: (
      <p>
        "Sniffed out this site after hearing the neighborhood dogs howl about
        it. <Highlight>It’s howl-worthy!</Highlight>"
      </p>
    ),
  },
  {
    id: 2,
    name: "Abhi",
    designation: "Director of belly rubs and ear scratches",
    content: (
      <p>
        Flipping through Oso and Delta's comments,{" "}
        <Highlight>I find myself nodding along </Highlight> so vigorously I'm
        practically headbanging.
      </p>
    ),
  },
 
];

export default function Home() {
  const { userId } = auth();
  const words = [
    {
      text: "Make",
    },
    {
      text: "your",
    },
    {
      text: "college",
    },
    {
      text: "applications",
    },
    {
      text: "standout",
    },
    {
      text: "with",
    },
    {
      text: "Sivvy.",
      className: "font-semibold text-transparent gradient",
    },
  ];

  return (
    <main className="">
      <article className="flex flex-col md:flex-row">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-3xl font-semibold text-transparent md:text-6xl gradient">
            Meet Savant Seal.
          </h1>
          {/* <p className="mt-2 text-lg text-black">
          An AI chat assistant guiding you through the college admission odessey. With expert guidance, and resources make your application stand out.
          </p> */}
          <div className="w-[800px]">
            <TypewriterEffectSmooth words={words} className="font-xs" />
          </div>
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="text-black font-semibold p-2 rounded hover:text-blue-400"
            >
              <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                {userId ? "Sivvy" : "Login"}
              </button>
            </Link>
            <a
              className="text-black font-semibold p-2 rounded hover:text-blue-400"
              href="#features"
            >
              <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                Learn more
              </button>
            </a>
          </div>
        </div>
        <div className="h-[40rem] flex items-center justify-center w-full">
          <CardStack items={CARDS} />
        </div>
      </article>
      <article
        className="px-8 py-20 bg-opacity-5 md:px-20 md:py-18"
        id="features"
      >
        <h2 className="text-3xl font-semibold text-black">
          What's under the hood?
        </h2>
        <p className="mt-2 text-black">
          Streamline your college application journey with Sivvy. Learn more
          about{" "}
          <Link
            href="/dashboard"
            className="font-medium text-primary-600 hover:underline"
          >
            Sivvy
          </Link>
          .
        </p>
        <div className="grid gap-2 mt-12 lg:grid-cols-3">
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium text-blue-300">
              Essay Guidance
            </h3>
            <p className="text-gray-700">
              Sivvy (Our AI assistant) provides expert guidance and feedback on
              your college application essays.
            </p>
            <div className="grow"></div>
            <Link
              href="/dashboard"
              className="text-primary-600 cta hover:text-blue-400"
            >
              <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                Chat with Sivvy
              </button>
            </Link>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium text-blue-300">
              Application Tracking
            </h3>
            <p className="text-gray-700">
              Easily monitor which colleges you've applied to, check deadlines,
              and receive reminders.
            </p>
            <div className="grow"></div>
            <Link
              href="/profile"
              className="text-primary-600 cta hover:text-blue-400"
            >
              <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                Chat with Sivvy
              </button>
            </Link>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium text-blue-300">
              Personalized Recommendations
            </h3>
            <p className="text-gray-700">
              Our AI assistant leverages your academic and extracurricular
              achievements to provide tailored college recommendations.
            </p>
            <div className="grow"></div>
            <a
              href="/profile"
              className="text-primary-600 cta hover:text-blue-400"
              target="_blank"
            >
              <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                Recommendations
              </button>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
