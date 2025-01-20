import Image from "next/image";

export default function ExampleCarouselImage({ text }) {
  return (
    <div
      className={`carousel-image-container ${text
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      <Image
        src={`/images/${text.toLowerCase().replace(/\s+/g, "-")}.jpg`}
        alt={text}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
