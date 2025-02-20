
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../components/ui/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`img-${active.title}-${id}`}>
              <img
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-headers text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul className="max-w- w-full ">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={`card-${card.title}-${id}`}
          onClick={() => setActive(card)}
          className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
          <div className="flex gap-4 flex-col md:flex-row ">
            <motion.div layoutId={`img-${card.title}-${id}`}>
              <img
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top" />
            </motion.div>
            <div className="">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                {card.description}
              </motion.p>
            </div>
          </div>
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-headers hover:text-white text-black mt-4 md:mt-0">
            {card.ctaText}
          </motion.button>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};


const cards = [
    {
        description: "Wireless Bluetooth Headphones",
        title: "X-1000 Noise Cancelling",
        src: "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg",
        ctaText: "Buy Now",
        ctaLink: "https://example.com/product/x-1000",
        content: () => {
            return (
                <p>The X-1000 Wireless Bluetooth Headphones provide an immersive listening experience with industry-leading noise cancellation technology. Whether you're commuting, working, or traveling, these headphones ensure you get crystal-clear audio without any distractions. With up to 30 hours of battery life, ergonomic design, and premium sound quality, the X-1000 is the perfect companion for music lovers and professionals alike. <br /> <br />Features include over-ear comfort, touch controls, built-in mic, and water-resistant design, making it ideal for both casual and active use.</p>
            );
        },
    },
    {
        description: "Smartwatch",
        title: "FitTrack Pro",
        src: "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg",
        ctaText: "Shop Now",
        ctaLink: "https://example.com/product/fittrack-pro",
        content: () => {
            return (
                <p>The FitTrack Pro is a next-gen smartwatch that tracks your fitness metrics in real-time, ensuring you stay on top of your health. It features a heart-rate monitor, step counter, sleep analysis, and more, all in a sleek and stylish design. With a built-in GPS and water resistance, it’s perfect for workouts, running, or even swimming. <br /> <br />The FitTrack Pro also integrates with your smartphone, allowing you to receive notifications and control your music without missing a beat.</p>
            );
        },
    },
    {
        description: "4K Ultra HD TV",
        title: "VividX 55-Inch",
        src: "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg",
        ctaText: "Get Yours",
        ctaLink: "https://example.com/product/vividx-55-inch",
        content: () => {
            return (
                <p>The VividX 55-Inch 4K Ultra HD TV brings cinematic quality to your living room with its vibrant display, ultra-clear resolution, and immersive sound. Equipped with HDR technology, it enhances every scene, making it perfect for gaming, movies, and sports. <br /> <br />With built-in smart features, you can access popular streaming services and enjoy seamless connectivity with your devices, all from the comfort of your couch.</p>
            );
        },
    },
    {
        description: "Portable Power Bank",
        title: "JuiceBox 20000mAh",
        src: "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg",
        ctaText: "Buy Now",
        ctaLink: "https://example.com/product/juicebox-20000",
        content: () => {
            return (
                <p>The JuiceBox 20000mAh Portable Power Bank is the ultimate solution for keeping your devices charged on the go. With its high-capacity battery, it can charge your smartphone, tablet, or laptop multiple times before needing a recharge. <br /> <br />Featuring fast-charging technology, multiple USB ports, and a compact design, the JuiceBox ensures you’re never left without power when you need it most. Ideal for travel, work, or outdoor adventures.</p>
            );
        },
    },
    {
        description: "Home Smart Security System",
        title: "SafeHome Pro Kit",
        src: "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg",
        ctaText: "Protect Your Home",
        ctaLink: "https://example.com/product/safehome-pro-kit",
        content: () => {
            return (
                <p>The SafeHome Pro Kit is a comprehensive smart security solution for your home. It includes cameras, motion sensors, door/window alarms, and a smart hub, all controlled via a dedicated mobile app. <br /> <br />With 24/7 live streaming, motion detection alerts, and cloud storage for video footage, the SafeHome Pro ensures you have complete peace of mind. Easy to install and fully customizable to suit your security needs, it is the perfect way to keep your family and property safe.</p>
            );
        },
    },
];
