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
    category: string[];
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
    category: ["vinyl-records", "best-sellers"],
    subCategory: ["classics", "best-sellers"],  
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
    category: ["vinyl-records", "best-sellers"],
    subCategory: ["classics", "best-sellers"],  
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
    category: ["genre-specific-collections","vinyl-records"],
    subCategory: ["rock-metal", "classics", "v"],
    stock: 8,
    tags: ["led zeppelin", "rock", "classic"],
    attributes: {
      bandOrArtist: "Led Zeppelin",
      albumName: "Led Zeppelin IV",
      releaseDate: "1971",
      format: "Vinyl",
    }
  },
  {
    id: 4,
    name: "Led Zeppelin II",
    description: "Led Zeppelin II is the second album by the English rock band Led Zeppelin, released on 22 October 1969 in the United States and on 31 October 1969 in the United Kingdom by Atlantic Records. ",
    price: 26.99,
    images: ["/platterparty/images/cvrs/lz-2.webp"],
    category: ["genre-specific-collections","vinyl-records"],
    subCategory: ["rock-metal", "classics"],
    stock: 8,
    tags: ["led zeppelin", "rock", "classic"],
    attributes: {
      bandOrArtist: "Led Zeppelin",
      albumName: "Led Zeppelin II",
      releaseDate: "1971",
      format: "Vinyl",
    }
  },
  // Merchandise - Shirts
  {
    id: 11,
    name: "Pink Floyd T-Shirt",
    description: "Premium cotton t-shirt featuring the iconic Dark Side of the Moon prism design. Comfortable fit with durable print that won't fade after washing. Perfect for showing your love for one of rock's greatest bands.",
    price: 24.99,
    images: ["/platterparty/images/cvrs/bell.jpg"],
    category: ["merchandise"],
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
    images: ["/platterparty/images/cvrs/lz-shirt.jpeg"],
    category: ["merchandise"],
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
    images: ["/platterparty/images/cvrs/a-road.jpg"],
    category: ["merchandise"],
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
    images: ["/platterparty/images/cvrs/metal-signed.webp"],
    category: ["music-collectibles"],
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
    images: ["/platterparty/images/cvrs/gift-card.webp"],
    category: ["gift-items"],
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
    category: ["best-sellers", "vinyl-records"],
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
    images: ["/platterparty/images/cvrs/sleep-ds.jpg"],
    category: ["pre-orders"],
    subCategory: ["vinyl"],
    stock: 50,
    tags: ["pre-order", "limited edition"],
    attributes: {}
  },
  // Jazz & Blues
  {
    id: 12,
    name: "Kind of Blue - Miles Davis",
    description: "Miles Davis' 1959 masterpiece is one of the most influential jazz albums ever recorded. Features legendary tracks like 'So What' and 'Blue in Green'. This modal jazz landmark includes performances by John Coltrane and Bill Evans.",
    price: 28.99,
    images: ["/platterparty/images/cvrs/davis-blue.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["jazz-blues"],
    stock: 12,
    tags: ["miles davis", "jazz", "classic"],
    specialBadge: "BESTSELLER",
    attributes: {
      bandOrArtist: "Miles Davis",
      albumName: "Kind of Blue",
      releaseDate: "1959",
      format: "Vinyl",
    }
  },
  {
    id: 13,
    name: "Blue Train - John Coltrane",
    description: "A hard bop jazz classic from 1958. Features Coltrane's innovative saxophone work alongside an all-star ensemble. Includes the iconic title track and 'Moment's Notice'.",
    price: 27.99,
    images: ["/platterparty/images/cvrs/blue-train.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["jazz-blues"],
    stock: 7,
    tags: ["john coltrane", "jazz", "classic"],
    attributes: {
      bandOrArtist: "John Coltrane",
      albumName: "Blue Train",
      releaseDate: "1958",
      format: "Vinyl",
    }
  },
  {
    id: 14,
    name: "Master of Puppets - Metallica",
    description: "Metallica's thrash metal masterpiece from 1986. Features complex arrangements and powerful tracks like the title song and 'Battery'.",
    price: 29.99,
    images: ["/platterparty/images/cvrs/puppets.webp"],
    category: ["genre-specific-collections", "best-sellers", "vinyl-records"],
    subCategory: ["rock-metal"],
    stock: 15,
    tags: ["metallica", "metal", "thrash"],
    attributes: {
      bandOrArtist: "Metallica",
      albumName: "Master of Puppets",
      releaseDate: "1986",
      format: "Vinyl",
    }
  },
  {
    id: 15,
    name: "Muddy Waters at Newport 1960",
    description: "Legendary live blues performance capturing Muddy Waters at his peak. Essential blues recording featuring classics like 'Got My Mojo Working'.",
    price: 26.99,
    images: ["/platterparty/images/cvrs/muddy-newport.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["jazz-blues"],
    stock: 5,
    tags: ["muddy waters", "blues", "live"],
    attributes: {
      bandOrArtist: "Muddy Waters",
      albumName: "At Newport 1960",
      releaseDate: "1960",
      format: "Vinyl",
    }
  },
  {
    id: 16,
    name: "Paranoid - Black Sabbath",
    description: "The 1970 album that helped define heavy metal. Features iconic tracks 'War Pigs', 'Iron Man', and the title track.",
    price: 28.99,
    images: ["/platterparty/images/cvrs/paranoid.jpeg"],
    category: ["genre-specific-collections", "best-sellers", "vinyl-records"],
    subCategory: ["rock-metal"],
    stock: 10,
    tags: ["black sabbath", "metal", "classic rock"],
    attributes: {
      bandOrArtist: "Black Sabbath",
      albumName: "Paranoid",
      releaseDate: "1970",
      format: "Vinyl",
    }
  },
  {
    id: 17,
    name: "A Love Supreme - John Coltrane",
    description: "Coltrane's spiritual jazz masterpiece from 1964. A four-part suite expressing his divine inspiration and musical innovation.",
    price: 31.99,
    images: ["/platterparty/images/cvrs/coltrane-supreme.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["jazz-blues"],
    stock: 6,
    tags: ["john coltrane", "jazz", "spiritual jazz"],
    attributes: {
      bandOrArtist: "John Coltrane",
      albumName: "A Love Supreme",
      releaseDate: "1964",
      format: "Vinyl",
    }
  },
  {
    id: 18,
    name: "Reign in Blood - Slayer",
    description: "Slayer's brutal and influential 1986 thrash metal album. Features the intense classics 'Angel of Death' and 'Raining Blood'.",
    price: 27.99,
    images: ["/platterparty/images/cvrs/blood.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["rock-metal"],
    stock: 8,
    tags: ["slayer", "metal", "thrash"],
    attributes: {
      bandOrArtist: "Slayer",
      albumName: "Reign in Blood",
      releaseDate: "1986",
      format: "Vinyl",
    }
  },
  {
    id: 19,
    name: "Birth of the Cool - Miles Davis",
    description: "Groundbreaking 1957 compilation of recordings that helped define cool jazz. Features a pioneering nonet arrangement.",
    price: 26.99,
    images: ["/platterparty/images/cvrs/Birth_of_the_Cool.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["jazz-blues"],
    stock: 9,
    tags: ["miles davis", "jazz", "cool jazz"],
    attributes: {
      bandOrArtist: "Miles Davis",
      albumName: "Birth of the Cool",
      releaseDate: "1957",
      format: "Vinyl",
    }
  },
  {
    id: 20,
    name: "Ace of Spades - Motörhead",
    description: "Motörhead's signature 1980 album featuring the legendary title track. The perfect blend of heavy metal, punk, and rock & roll.",
    price: 28.99,
    images: ["/platterparty/images/cvrs/aceofspades.jpg"],
    category: ["genre-specific-collections", "best-sellers", "vinyl-records"],
    subCategory: ["rock-metal"],
    stock: 12,
    tags: ["motorhead", "metal", "rock"],
    attributes: {
      bandOrArtist: "Motörhead",
      albumName: "Ace of Spades",
      releaseDate: "1980",
      format: "Vinyl",
    }
  },
  {
    id: 21,
    name: "Howlin' Wolf - Moanin' in the Moonlight",
    description: "1959 compilation of Howlin' Wolf's essential early singles. Raw, powerful Chicago blues at its finest.",
    price: 25.99,
    images: ["/platterparty/images/cvrs/wolf.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["jazz-blues"],
    stock: 6,
    tags: ["howlin wolf", "blues", "chicago blues"],
    attributes: {
      bandOrArtist: "Howlin' Wolf",
      albumName: "Moanin' in the Moonlight",
      releaseDate: "1959",
      format: "Vinyl",
    }
  },
  {
    id: 22,
    name: "Number of the Beast - Iron Maiden",
    description: "Iron Maiden's breakthrough 1982 album. Features classics like 'Run to the Hills' and the epic title track.",
    price: 29.99,
    images: ["/platterparty/images/cvrs/beast.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["rock-metal"],
    stock: 14,
    tags: ["iron maiden", "metal", "NWOBHM"],
    attributes: {
      bandOrArtist: "Iron Maiden",
      albumName: "Number of the Beast",
      releaseDate: "1982",
      format: "Vinyl",
    }
  },
  {
    id: 23,
    name: "Mingus Ah Um - Charles Mingus",
    description: "Charles Mingus's 1959 masterpiece blending hard bop, gospel, and free jazz. Features the classic 'Goodbye Pork Pie Hat'.",
    price: 27.99,
    images: ["/platterparty/images/cvrs/ahum.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["jazz-blues"],
    stock: 7,
    tags: ["charles mingus", "jazz", "avant-garde"],
    attributes: {
      bandOrArtist: "Charles Mingus",
      albumName: "Mingus Ah Um",
      releaseDate: "1959",
      format: "Vinyl",
    }
  },
  {
    id: 24,
    name: "Rust in Peace - Megadeth",
    description: "Megadeth's technical thrash metal masterpiece from 1990. Features intricate guitar work and political themes.",
    price: 28.99,
    images: ["/platterparty/images/cvrs/rustinpeace.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["rock-metal"],
    stock: 11,
    tags: ["megadeth", "metal", "thrash"],
    attributes: {
      bandOrArtist: "Megadeth",
      albumName: "Rust in Peace",
      releaseDate: "1990",
      format: "Vinyl",
    }
  },
  {
    id: 25,
    name: "To Pimp A Butterfly - Kendrick Lamar",
    description: "Kendrick Lamar's groundbreaking 2015 masterpiece blending hip-hop with jazz, funk, and soul. Features hits like 'King Kunta' and 'Alright'. A powerful commentary on race, identity, and society.",
    price: 34.99,
    images: ["/platterparty/images/cvrs/butterfly.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["hip-hop-rap"],
    stock: 10,
    tags: ["kendrick lamar", "hip hop", "rap", "modern classic"],
    attributes: {
      bandOrArtist: "Kendrick Lamar",
      albumName: "To Pimp A Butterfly",
      releaseDate: "2015",
      format: "Vinyl",
    }
  },
  {
    id: 26,
    name: "In The Aeroplane Over The Sea - Neutral Milk Hotel",
    description: "The 1998 indie folk masterpiece. Jeff Mangum's distinctive vocals and surreal lyrics create a uniquely powerful listening experience.",
    price: 29.99,
    images: ["/platterparty/images/cvrs/neutral.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["pop-indie"],
    stock: 8,
    tags: ["neutral milk hotel", "indie", "folk"],
    attributes: {
      bandOrArtist: "Neutral Milk Hotel",
      albumName: "In The Aeroplane Over The Sea",
      releaseDate: "1998",
      format: "Vinyl",
    }
  },
  {
    id: 27,
    name: "Illmatic - Nas",
    description: "Nas's 1994 debut album, widely considered one of the greatest hip-hop albums ever made. Features production from DJ Premier, Pete Rock, and Q-Tip.",
    price: 32.99,
    images: ["/platterparty/images/cvrs/nas.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["hip-hop-rap"],
    stock: 12,
    tags: ["nas", "hip hop", "rap", "classic"],
    attributes: {
      bandOrArtist: "Nas",
      albumName: "Illmatic",
      releaseDate: "1994",
      format: "Vinyl",
    }
  },
  {
    id: 28,
    name: "Loveless - My Bloody Valentine",
    description: "The definitive shoegaze album from 1991. Known for its innovative use of guitar effects and dreamy atmospheres.",
    price: 31.99,
    images: ["/platterparty/images/cvrs/loveless.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["pop-indie"],
    stock: 6,
    tags: ["my bloody valentine", "shoegaze", "indie"],
    attributes: {
      bandOrArtist: "My Bloody Valentine",
      albumName: "Loveless",
      releaseDate: "1991",
      format: "Vinyl",
    }
  },
  {
    id: 29,
    name: "Enter the Wu-Tang (36 Chambers) - Wu-Tang Clan",
    description: "The 1993 debut that revolutionized hip-hop. Raw, kung-fu influenced production and nine distinctive MCs created a new template for rap groups.",
    price: 33.99,
    images: ["/platterparty/images/cvrs/36chambers.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["hip-hop-rap"],
    stock: 9,
    tags: ["wu-tang clan", "hip hop", "rap", "classic"],
    attributes: {
      bandOrArtist: "Wu-Tang Clan",
      albumName: "Enter the Wu-Tang (36 Chambers)",
      releaseDate: "1993",
      format: "Vinyl",
    }
  },
  {
    id: 30,
    name: "Teen Dream - Beach House",
    description: "Beach House's breakthrough 2010 dream pop album. Ethereal vocals and atmospheric synthesizers create a mesmerizing sonic landscape.",
    price: 28.99,
    images: ["/platterparty/images/cvrs/teen-dream.png"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["pop-indie"],
    stock: 11,
    tags: ["beach house", "dream pop", "indie"],
    attributes: {
      bandOrArtist: "Beach House",
      albumName: "Teen Dream",
      releaseDate: "2010",
      format: "Vinyl",
    }
  },
  {
    id: 31,
    name: "Madvillainy - Madvillain",
    description: "The legendary 2004 collaboration between MF DOOM and Madlib. Abstract rhymes meet innovative production in this hip-hop masterpiece.",
    price: 34.99,
    images: ["/platterparty/images/cvrs/madvillain.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["hip-hop-rap"],
    stock: 7,
    tags: ["madvillain", "mf doom", "madlib", "hip hop"],
    attributes: {
      bandOrArtist: "Madvillain",
      albumName: "Madvillainy",
      releaseDate: "2004",
      format: "Vinyl",
    }
  },
  {
    id: 32,
    name: "Funeral - Arcade Fire",
    description: "Arcade Fire's stunning 2004 debut album. An emotional indie rock masterpiece that redefined what the genre could achieve.",
    price: 29.99,
    images: ["/platterparty/images/cvrs/funeral.webp"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["pop-indie"],
    stock: 13,
    tags: ["arcade fire", "indie rock", "alternative"],
    attributes: {
      bandOrArtist: "Arcade Fire",
      albumName: "Funeral",
      releaseDate: "2004",
      format: "Vinyl",
    }
  },
  {
    id: 33,
    name: "The Low End Theory - A Tribe Called Quest",
    description: "A Tribe Called Quest's 1991 jazz-rap fusion classic. Innovative production and conscious lyrics create a timeless hip-hop album.",
    price: 31.99,
    images: ["/platterparty/images/cvrs/tribe.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["hip-hop-rap"],
    stock: 8,
    tags: ["a tribe called quest", "hip hop", "jazz rap"],
    attributes: {
      bandOrArtist: "A Tribe Called Quest",
      albumName: "The Low End Theory",
      releaseDate: "1991",
      format: "Vinyl",
    }
  },
  {
    id: 34,
    name: "Person Pitch - Panda Bear",
    description: "Animal Collective member's 2007 experimental pop masterpiece. Innovative sampling and harmonies create a unique sonic experience.",
    price: 27.99,
    images: ["/platterparty/images/cvrs/person-pitch.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["pop-indie"],
    stock: 5,
    tags: ["panda bear", "experimental", "indie"],
    attributes: {
      bandOrArtist: "Panda Bear",
      albumName: "Person Pitch",
      releaseDate: "2007",
      format: "Vinyl",
    }
  },
  {
    id: 35,
    name: "Ready To Die - The Notorious B.I.G.",
    description: "Biggie's 1994 debut album, a landmark of East Coast hip-hop. Features classics like 'Juicy' and 'Big Poppa'.",
    price: 33.99,
    images: ["/platterparty/images/cvrs/biggie.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["hip-hop-rap"],
    stock: 10,
    tags: ["notorious big", "hip hop", "rap", "classic"],
    attributes: {
      bandOrArtist: "The Notorious B.I.G.",
      albumName: "Ready To Die",
      releaseDate: "1994",
      format: "Vinyl",
    }
  },
  {
    id: 36,
    name: "Currents - Tame Impala",
    description: "Tame Impala's 2015 psychedelic pop breakthrough. Kevin Parker's production creates a modern classic of indie music.",
    price: 32.99,
    images: ["/platterparty/images/cvrs/currents.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["pop-indie"],
    stock: 15,
    tags: ["tame impala", "psychedelic", "indie"],
    attributes: {
      bandOrArtist: "Tame Impala",
      albumName: "Currents",
      releaseDate: "2015",
      format: "Vinyl",
    }
  },
  {
    id: 37,
    name: "Selected Ambient Works 85-92 - Aphex Twin",
    description: "Richard D. James' groundbreaking electronic album that helped define ambient techno. A masterful blend of ethereal soundscapes and intricate rhythms.",
    price: 32.99,
    images: ["/platterparty/images/cvrs/ambient.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["electronic-dance"],
    stock: 8,
    tags: ["aphex twin", "electronic", "ambient", "techno"],
    attributes: {
      bandOrArtist: "Aphex Twin",
      albumName: "Selected Ambient Works 85-92",
      releaseDate: "1992",
      format: "Vinyl",
    }
  },
  {
    id: 38,
    name: "The Planets - Gustav Holst",
    description: "Holst's orchestral masterpiece performed by the London Symphony Orchestra. Each movement represents a different planet in the solar system.",
    price: 34.99,
    images: ["/platterparty/images/cvrs/planets.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["classical-instrumental"],
    stock: 10,
    tags: ["classical", "orchestral", "holst"],
    attributes: {
      bandOrArtist: "London Symphony Orchestra",
      albumName: "The Planets",
      releaseDate: "2017",
      format: "Vinyl",
    }
  },
  {
    id: 39,
    name: "Discovery - Daft Punk",
    description: "The French duo's iconic 2001 album blending house music with pop sensibilities. Features classics like 'One More Time' and 'Harder, Better, Faster, Stronger'.",
    price: 31.99,
    images: ["/platterparty/images/cvrs/Daft_Punk-Discovery.png"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["electronic-dance"],
    stock: 15,
    tags: ["daft punk", "electronic", "house", "french house"],
    attributes: {
      bandOrArtist: "Daft Punk",
      albumName: "Discovery",
      releaseDate: "2001",
      format: "Vinyl",
    }
  },
  {
    id: 40,
    name: "Glenn Gould Plays Bach: The Goldberg Variations (1981)",
    description: "Gould's final recording of Bach's masterpiece. A thoughtful and mature interpretation that stands as a testament to both composer and performer.",
    price: 35.99,
    images: ["/platterparty/images/cvrs/bach-goldberg.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["classical-instrumental"],
    stock: 7,
    tags: ["classical", "bach", "piano", "glenn gould"],
    attributes: {
      bandOrArtist: "Glenn Gould",
      albumName: "The Goldberg Variations",
      releaseDate: "1981",
      format: "Vinyl",
    }
  },
  {
    id: 41,
    name: "Untrue - Burial",
    description: "Landmark 2007 dubstep album that redefined the genre. Atmospheric, nocturnal soundscapes that capture urban melancholy.",
    price: 29.99,
    images: ["/platterparty/images/cvrs/BurialUntrue.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["electronic-dance"],
    stock: 6,
    tags: ["burial", "electronic", "dubstep", "uk garage"],
    attributes: {
      bandOrArtist: "Burial",
      albumName: "Untrue",
      releaseDate: "2007",
      format: "Vinyl",
    }
  },
  {
    id: 42,
    name: "Beethoven: Symphony No. 9 - Berlin Philharmonic",
    description: "Herbert von Karajan conducts Beethoven's monumental Ninth Symphony. A definitive recording of this masterpiece including the 'Ode to Joy'.",
    price: 36.99,
    images: ["/platterparty/images/cvrs/berlin-symp.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["classical-instrumental"],
    stock: 9,
    tags: ["classical", "beethoven", "orchestral", "karajan"],
    attributes: {
      bandOrArtist: "Berlin Philharmonic",
      albumName: "Symphony No. 9",
      releaseDate: "1977",
      format: "Vinyl",
    }
  },
  {
    id: 43,
    name: "Music Has the Right to Children - Boards of Canada",
    description: "Influential 1998 electronic album combining nostalgic melodies with complex rhythms. A cornerstone of intelligent electronic music.",
    price: 33.99,
    images: ["/platterparty/images/cvrs/mhtrtc.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["electronic-dance"],
    stock: 11,
    tags: ["boards of canada", "electronic", "ambient", "idm"],
    attributes: {
      bandOrArtist: "Boards of Canada",
      albumName: "Music Has the Right to Children",
      releaseDate: "1998",
      format: "Vinyl",
    }
  },
  {
    id: 44,
    name: "Yo-Yo Ma Plays Bach: Cello Suites",
    description: "Yo-Yo Ma's acclaimed interpretation of Bach's complete cello suites. A masterful performance of these baroque masterpieces.",
    price: 39.99,
    images: ["/platterparty/images/cvrs/Nature-At-Play-album-cover.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"  ],
    subCategory: ["classical-instrumental"],
    stock: 8,
    tags: ["classical", "bach", "cello", "yo-yo ma"],
    attributes: {
      bandOrArtist: "Yo-Yo Ma",
      albumName: "Bach: Cello Suites",
      releaseDate: "2018",
      format: "Vinyl",
    }
  },
  {
    id: 45,
    name: "Endtroducing..... - DJ Shadow",
    description: "Revolutionary 1996 album constructed entirely from samples. A landmark in instrumental hip-hop and electronic music.",
    price: 30.99,
    images: ["/platterparty/images/cvrs/entro-shadow.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["electronic-dance"],
    stock: 13,
    tags: ["dj shadow", "electronic", "trip hop", "instrumental hip-hop"],
    attributes: {
      bandOrArtist: "DJ Shadow",
      albumName: "Endtroducing.....",
      releaseDate: "1996",
      format: "Vinyl",
    }
  },
  {
    id: 46,
    name: "Debussy: Complete Piano Works - Walter Gieseking",
    description: "Definitive recordings of Debussy's impressionist piano masterpieces. Includes 'Clair de Lune' and the complete Preludes.",
    price: 37.99,
    images: ["/platterparty/images/cvrs/debussy.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["classical-instrumental"],
    stock: 6,
    tags: ["classical", "debussy", "piano", "gieseking"],
    attributes: {
      bandOrArtist: "Walter Gieseking",
      albumName: "Debussy: Complete Piano Works",
      releaseDate: "1953",
      format: "Vinyl",
    }
  },
  {
    id: 47,
    name: "Ambient 1: Music for Airports - Brian Eno",
    description: "Brian Eno's pioneering 1978 ambient masterpiece. Designed as a sound installation to reduce airport anxiety.",
    price: 29.99,
    images: ["/platterparty/images/cvrs/eno.jpg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["electronic-dance"],
    stock: 9,
    tags: ["brian eno", "electronic", "ambient", "experimental"],
    attributes: {
      bandOrArtist: "Brian Eno",
      albumName: "Ambient 1: Music for Airports",
      releaseDate: "1978",
      format: "Vinyl",
    }
  },
  {
    id: 48,
    name: "Tchaikovsky: The Nutcracker - Royal Concertgebouw Orchestra",
    description: "Complete ballet score performed by one of the world's finest orchestras. Perfect for both holiday seasons and year-round enjoyment.",
    price: 34.99,
    images: ["/platterparty/images/cvrs/nutcracker.jpeg"],
    category: ["genre-specific-collections", "vinyl-records"],
    subCategory: ["classical-instrumental"],
    stock: 12,
    tags: ["classical", "tchaikovsky", "ballet", "orchestral"],
    attributes: {
      bandOrArtist: "Royal Concertgebouw Orchestra",
      albumName: "The Nutcracker",
      releaseDate: "2012",
      format: "Vinyl",
    }
  }
];

export function getProductsByCategory(category: string, subCategory?: string) {
  if (subCategory) {
    return mockProducts.filter(product => 
      product.category.includes(category) && product.subCategory.includes(subCategory)
    );
  }
  
  return mockProducts.filter(product => 
    product.category.includes(category)
  );
}

export default mockProducts;
  