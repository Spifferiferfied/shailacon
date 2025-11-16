import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-(family-name:--font-lato) pb-4">
      <main className="flex min-h-screen w-full flex-col container text-white">
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
            Cincinatti, OH
          </h2>
        </div>
        <div className="relative lg:-mt-[10em] overflow-hidden z-0">
          <Image
            src="/triangle.svg"
            height="20"
            width="20"
            alt=""
            className="absolute top-0 h-[45px] md:h-[142px] lg:h-[265px] w-full"
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
            className="absolute bottom-0 h-[45px] md:h-[142px] lg:h-[265px] w-full rotate-180"
          />
        </div>
        <div className="lg:w-2/3 z-10 mx-auto">
          <div className="flex justify-end mt-4 lg:-mt-[6em] mb-3">
            <div id="info" className="px-4 lg:w-1/2">
              <h3 className="text-2xl font-bold mb-2">Details:</h3>
              <p className="pb-2">
                Another year of ShailaCon! For 2026 the event will be taking
                place at our Airbnb in Cincinnati, OH! A weekend of pure
                tabletop games with friends. Expect all of the old favorites as
                well as some new ones!
              </p>
            </div>
          </div>
          <div className="flex justify-start z-10 lg:-mt-[2em]">
            <div id="FAQ" className="px-4 lg:w-1/2">
              <h3 className="text-2xl font-bold mb-2">FAQ:</h3>
              <details open name="shailacon-FAQ">
                <summary className="font-semibold cursor-pointer">
                  What is ShailaCon?
                </summary>
                <p className="p-4">
                  A mini board game convention held in late February, early
                  March every year.
                </p>
                <p className="p-4">
                  ... Ok, it's a group of friends meeting up together to play
                  board games all weekend. Same thing.
                </p>
              </details>
              <details name="shailacon-FAQ">
                <summary className="font-semibold cursor-pointer">
                  Why is it called ShailaCon?
                </summary>
                <p className="p-4">
                  A group of friends who regularly meet up for GenCon wanted to
                  find more time to get together for boardgames outside of the
                  August convention. Most of them had met each other through one
                  friend named Shaila, so the new convention was born.
                </p>
              </details>
              <details name="shailacon-FAQ">
                <summary className="font-semibold cursor-pointer">
                  Why February/March?
                </summary>
                <p className="p-4">
                  The goal was a time for every one together opposite the August
                  timing of GenCon.
                </p>
              </details>
              <details name="shailacon-FAQ">
                <summary className="font-semibold cursor-pointer">
                  Where is ShailaCon hosted?
                </summary>
                <p className="p-4">
                  The first three official ShailaCons were hosted in Columbus,
                  OH, a spot pretty central to all attendees. In 2026 we've
                  booked an Airbnb in Cincinnati, OH!
                </p>
              </details>
              <details name="shailacon-FAQ">
                <summary className="font-semibold cursor-pointer">
                  Is there merch?
                </summary>
                <p className="p-4">
                  Yes! You can pick up a shirt for this years ShailaCon{" "}
                  <Link
                    className="hover:no-underline underline"
                    href="https://www.teepublic.com/t-shirt/83135704-shailacon-2026"
                  >
                    here at TeePublic
                  </Link>
                  .
                </p>
              </details>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
