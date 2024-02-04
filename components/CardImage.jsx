import { Image } from '@nextui-org/react'

const CardImage = () => {
  return (
    <div className="flex justify-center h-full sm:h-auto items-end">
        <Image
          isZoomed
          width={300}
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
        />
      </div>
  );
};

export default CardImage