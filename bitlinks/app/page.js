import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold font-poppins">
            The best URL shortner in the Market 
          </p>
          <p className="px-35 text-center max-w-3xl">
            We are the most straightforward URL shortner in the world. 
            Most of the URL shortners will track you or ask you to give your details for login, 
            we understand you needs and hence we have created this URL shortner. 
          </p>
          <div className='flex gap-3 text-white'>
          <Link href="/generate"><button className='bg-purple-500 rounded-lg p-3 font-bold'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg p-3 font-bold'>GitHub</button> </Link>
        </div>
        </div>
        
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
