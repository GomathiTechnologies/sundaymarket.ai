type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const productImages = {
  honeyJar: "/product-images/honey-jar.jpg",
  mapleSyrup: "/product-images/maple-syrup.jpg",
  mapleCandy: "/product-images/maple-candy.jpg",
  mapleButter: "/product-images/maple-butter.jpg",
  honeycomb: "/product-images/honeycomb.jpg",
  tomatoes: "/product-images/tomatoes.jpg",
  redOnions: "/product-images/red-onions.jpg",
  beefSteak: "/product-images/beef-steak.jpg",
  groundBeef: "/product-images/ground-beef.jpg",
  bakery: "/product-images/bakery.jpg",
};

export function ProductImage({ src, alt, className = "" }: ProductImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      loading="lazy"
    />
  );
}
