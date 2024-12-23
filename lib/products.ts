export interface ProductAttribute {
    bandOrArtist?: string;
    albumName?: string;
    releaseDate?: string;
    genre?: string;
    format?: string;
    colorVariant?: string;
    trackList?: string[];
    edition?: string;
    condition?: string;
    size?: string;
    material?: string;
    autographed?: boolean;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    subCategory: string[];
    price: number;
    salePrice?: number;
    images: string[];
    stock: number;
    tags: string[];
    specialBadge?: 'SALE' | 'NEW' | 'LIMITED' | 'BESTSELLER';
    attributes: ProductAttribute;
  }

export const mockProducts: Product[] = [
  // Vinyl Records - Classics
  {
    id: 1,
    name: "Dark Side of the Moon",
    description: "Pink Floyd's iconic 1973 masterpiece. Features groundbreaking tracks like 'Money', 'Time', and 'Us and Them'. This album redefined progressive rock with its innovative use of synthesizers and philosophical themes about life, death, and mental health.",
    price: 29.99,
    images: ["/platterparty/images/cvrs/Pink-Floyd-Dark-Side-of-the-Moon.webp"],
    category: "vinyl-records",
    subCategory: ["classics"],
    stock: 10,
    tags: ["pink floyd", "rock", "classic"],
    attributes: {
      bandOrArtist: "Pink Floyd",
      albumName: "Dark Side of the Moon",
      releaseDate: "1973",
      format: "Vinyl",
    }
  },
  {
    id: 2,
    name: "Abbey Road",
    description: "The Beatles' final recorded album, released in 1969. Contains the famous medley including 'Golden Slumbers' and 'The End'. Features beloved tracks like 'Come Together' and 'Here Comes the Sun'. A perfect blend of rock, pop, and artistic innovation.",
    price: 27.99,
    images: ["/platterparty/images/cvrs/Beatles-Abbey-Road.webp"],
    category: "vinyl-records",
    subCategory: ["classics"],
    stock: 15,
    tags: ["beatles", "rock", "classic"],
    attributes: {
      bandOrArtist: "The Beatles",
      albumName: "Abbey Road",
      releaseDate: "1969",
      format: "Vinyl",
    }
  },
  // Vinyl Records - Rock & Metal
  {
    id: 3,
    name: "Led Zeppelin IV",
    description: "Released in 1971, this album features the legendary 'Stairway to Heaven'. A masterful blend of hard rock, folk, and mystical themes. Includes classics like 'Black Dog' and 'Rock and Roll'. Essential for any serious vinyl collection.",
    price: 26.99,
    images: ["/platterparty/images/cvrs/zep4.jpg"],
    category: "genre-specific-collections",
    subCategory: ["rock-metal", "classics"],
    stock: 8,
    tags: ["led zeppelin", "rock", "classic"],
    attributes: {
      bandOrArtist: "Led Zeppelin",
      albumName: "Led Zeppelin IV",
      releaseDate: "1971",
      format: "Vinyl",
    }
  },
  // Merchandise - Shirts
  {
    id: 4,
    name: "Pink Floyd T-Shirt",
    description: "Premium cotton t-shirt featuring the iconic Dark Side of the Moon prism design. Comfortable fit with durable print that won't fade after washing. Perfect for showing your love for one of rock's greatest bands.",
    price: 24.99,
    images: ["https://placehold.co/400x400"],
    category: "merchandise",
    subCategory: ["shirts"],
    stock: 15,
    tags: ["merchandise", "shirt", "pink floyd"],
    attributes: {
      size: "M",
      material: "Cotton"
    }
  },
  {
    id: 5,
    name: "Led Zeppelin T-Shirt",
    description: "Classic band tee featuring Led Zeppelin's mystical symbols. Made from 100% soft cotton with a comfortable, regular fit. Screen-printed design ensures long-lasting quality.",
    price: 24.99,
    images: ["https://placehold.co/400x400"],
    category: "merchandise",
    subCategory: ["shirts"],
    stock: 20,
    tags: ["merchandise", "shirt", "led zeppelin"],
    attributes: {
      size: "L",
      material: "Cotton"
    }
  },
  // Merchandise - Posters
  {
    id: 6,
    name: "Beatles Abbey Road Poster",
    description: "High-quality print of the iconic Abbey Road album cover. Perfect for framing and displaying in any room. Printed on premium paper with vibrant, fade-resistant inks.",
    price: 19.99,
    images: ["https://placehold.co/400x400"],
    category: "merchandise",
    subCategory: ["posters-wall-art"],
    stock: 25,
    tags: ["merchandise", "poster", "beatles"],
    attributes: {
      size: "24x36"
    }
  },
  // Music Collectibles - Autographed
  {
    id: 7,
    name: "Signed Metallica Album",
    description: "Rare collectible vinyl autographed by all current Metallica members. Includes certificate of authenticity. Album is in excellent condition and has been professionally stored.",
    price: 299.99,
    images: ["https://placehold.co/400x400"],
    category: "music-collectibles",
    subCategory: ["autographed-records"],
    stock: 1,
    tags: ["collectible", "autographed", "metallica"],
    attributes: {
      autographed: true,
      bandOrArtist: "Metallica"
    }
  },
  // Gift Items
  {
    id: 8,
    name: "Record Store Gift Card",
    description: "The perfect gift for any music lover. Can be used on any item in our store. Digital or physical card available. Never expires and can be reloaded with additional funds.",
    price: 50.00,
    images: ["https://placehold.co/400x400"],
    category: "gift-items",
    subCategory: ["gift-cards"],
    stock: 100,
    tags: ["gift card"],
    attributes: {}
  },
  // Best Sellers
  {
    id: 9,
    name: "Rumours - Fleetwood Mac",
    description: "Fleetwood Mac's 1977 masterpiece, featuring hits like 'Dreams' and 'Go Your Own Way'. This remastered vinyl edition brings new clarity to the classic recordings. One of the best-selling albums of all time.",
    price: 29.99,
    images: ["/platterparty/images/cvrs/Fleetwood-Mac-Rumours.webp"],
    category: "best-sellers",
    subCategory: ["vinyl"],
    stock: 5,
    tags: ["fleetwood mac", "rock", "classic"],
    attributes: {
      bandOrArtist: "Fleetwood Mac",
      albumName: "Rumours"
    }
  },
  // Pre-Orders
  {
    id: 10,
    name: "Upcoming Release",
    description: "Limited edition vinyl pressing of an anticipated new release. Pre-order now to secure your copy. Includes exclusive artwork and bonus content. Ships on official release date.",
    price: 34.99,
    images: ["https://placehold.co/400x400"],
    category: "pre-orders",
    subCategory: ["vinyl"],
    stock: 50,
    tags: ["pre-order", "limited edition"],
    attributes: {}
  }
];

export function getProductsByCategory(category: string, subCategory?: string) {
  if (subCategory) {
    return mockProducts.filter(product => 
      product.category === category && product.subCategory.includes(subCategory)
    );
  }
  
  return mockProducts.filter(product => 
    product.category === category
  );
}

export default mockProducts;
  