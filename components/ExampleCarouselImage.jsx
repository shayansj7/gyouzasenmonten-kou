import Image from 'next/image';

export default function ExampleCarouselImage({ text }) {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Image
        src={`/images/${text.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
        alt={text}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
