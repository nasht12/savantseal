import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import "./home.css";
import PlainSphereRender  from "../components/three-sphere";
import { auth, currentUser } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <main className="bg-black">
      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
            Meet Savant Seal.
          </h1>
          <p className="mt-2 text-lg text-white">
          An AI chat assistant guiding you through the college admission odessey. With expert guidance, and resources make every application stand out.
          </p>
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:text-blue-400 hover:bg-primary-700"
            >
              {userId ? "Sivvy" : "Login"}
              <div className="m-auto">
                {/* <RightArrow /> */}
              </div>
            </Link>
            <a
              className="flex gap-2 px-4 py-2 font-semibold text-white transition duration-100 rounded-lg hover:text-blue-400"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                {/* <DownArrow /> */}
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          {/* <Image src={componentsImg} alt="Clerk embeddable components" /> */}
          <PlainSphereRender />
        </div>
      </article>
      <article
        className="px-8 py-20 bg-black bg-opacity-5 md:px-20 md:py-18"
        id="features"
      >
        <h2 className="text-3xl font-semibold text-white">What's under the hood?</h2>
        <p className="mt-2 text-white">
         Streamline your college application journey with Sivvy. Learn more about{" "}
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
            <h3 className="text-lg font-medium text-blue-300">Essay Guidance</h3>
            <p className="text-gray-700">
            Sivvy (Our AI assistant) provides expert guidance and feedback on your college application essays.
            </p>
            <div className="grow"></div>
            <Link
              href="/dashboard"
              className="text-primary-600 cta hover:text-blue-400"
            >
              Chat with Sivvy <span className="arrow">-&gt;</span>
            </Link>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium text-blue-300">Application Tracking</h3>
            <p className="text-gray-700">
            Easily monitor which colleges you've applied to, check deadlines, and receive reminders.
            </p>
            <div className="grow"></div>
            <Link
              href="/profile"
              className="text-primary-600 cta hover:text-blue-400"
            >
               Tracking <span className="arrow">-&gt;</span>
            </Link>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium text-blue-300">Personalized Recommendations</h3>
            <p className="text-gray-700">
            Our AI assistant leverages your academic and extracurricular achievements to provide tailored college recommendations.
            </p>
            <div className="grow"></div>
            <a
              href="/profile"
              className="text-primary-600 cta hover:text-blue-400"
              target="_blank"
            >
              Recommendations <span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
