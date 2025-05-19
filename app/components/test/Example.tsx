import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img1 from "../../assets/img/scrolling/1.jpg";
import img2 from "../../assets/img/scrolling/2.jpg";
import img3 from "../../assets/img/scrolling/3.jpg";
import img4 from "../../assets/img/scrolling/4.jpg";
import img5 from "../../assets/img/scrolling/5.jpg";
import img6 from "../../assets/img/scrolling/6.jpg";
import img7 from "../../assets/img/scrolling/7.jpg";

export function Example(){
  return(
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
}

export function HorizontalScrollCarousel(){
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function Card({ card }: { card: CardType }){
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
}

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: img1,
    title: "Title 1",
    id: 1,
  },
  {
    url: img2,
    title: "Title 2",
    id: 2,
  },
  {
    url: img3,
    title: "Title 3",
    id: 3,
  },
  {
    url: img4,
    title: "Title 4",
    id: 4,
  },
  {
    url: img5,
    title: "Title 5",
    id: 5,
  },
  {
    url: img6,
    title: "Title 6",
    id: 6,
  },
  {
    url: img7,
    title: "Title 7",
    id: 7,
  },
];