"use client";
import { AnimatePresence, animate, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [image, setImage] = useState(1);

  const msg = [
    "Não quero q vc fique descepcionada comigo",
    "Vou tentar melhorar",
    "Eu te amo amor",
    "Bjs",
  ];

  useEffect(() => {
    setTimeout(() => {
      setImage(image == 4 ? 1 : image + 1);
    }, 5000);
  }, [image]);

  return (
    <div className="grid grid-cols-1 grid-rows-1 justify-center items-center h-screen w-screen">
      <AnimatePresence>
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            className="w-full h-full object-cover row-start-1 row-end-2 col-start-1 col-end-2"
            width={1920}
            height={1080}
            src={`/${image}.jpg`}
            alt=""
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute flex h-1/4 w-full justify-center items-center bg-[#000000d3] col-start-1 col-end-2 row-start-1 row-end-2">
        <AnimatePresence>
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="text-white">{msg[image - 1]}</h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
