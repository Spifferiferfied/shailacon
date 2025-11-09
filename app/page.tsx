import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col container bg-[#77499D] text-white">
        <div className="px-6 z-10">
          <h1 className="text-4xl lg:text-9xl font-semibold font-(family-name:--font-oswald) mb-4">
            ShailaCon 2026
          </h1>
          <h2 className="flex items-center lg:text-2xl font-bold">
            <Image
              src="/calendar.svg"
              height="16"
              width="16"
              alt="calendar"
              className="inline-block me-1 h-6 w-6"
            />
            March 5th - 8th, 2026
          </h2>
          <h2 className="flex items-center lg:text-2xl font-bold">
            <Image
              src="/location.svg"
              height="16"
              width="16"
              alt="calendar"
              className="inline-block me-1 h-6 w-6"
            />
            Dayton/Cincinatti, OH
          </h2>
        </div>
        <div className="relative lg:-mt-[10em] overflow-hidden z-0">
          <Image
            src="/triangle.svg"
            height="20"
            width="20"
            alt=""
            className="absolute top-0 h-[45px] lg:h-[265px] w-full"
          />
          <Image
            src="/hero-2.jpg"
            alt="Games at 2025 ShailaCon"
            width={2000}
            height={2000}
            quality={80}
          />
          <Image
            src="/triangle.svg"
            height="20"
            width="20"
            alt=""
            className="absolute bottom-0 h-[45px] lg:h-[265px] w-full rotate-180"
          />
        </div>
        <div className="flex justify-end lg:-mt-[8em] z-10 ">
          <div className="px-4 lg:w-1/2">
            <h3 className="text-2xl">Details:</h3>
            <p className=" pt-2">
              Another year of ShailaCon! For 2026 the event will be taking place
              somewhere between Dayton and Cincinnati, Ohio to make sure
              everyone can attend. More details to come soon!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
