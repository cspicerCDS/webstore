type Subcategory = {
    id: number;
    name: string;
    slug: string;
    subcategories?: Subcategory[];
  };
  
  type Category = {
    id: number;
    name: string;
    slug: string;
    subcategories?: Subcategory[];
  };
  
  const categories: Category[] = [
    {
      id: 1,
      name: "Vinyl Records",
      slug: "vinyl-records",
      subcategories: [
        { id: 101, name: "New Releases", slug: "new-releases" },
        { id: 102, name: "Classics", slug: "classics" },
        { id: 103, name: "Limited Editions", slug: "limited-editions" },
        { id: 104, name: "Pre-Owned/Used", slug: "pre-owned-used" },
        { id: 105, name: "Box Sets", slug: "box-sets" },
        { id: 106, name: "Singles", slug: "singles" },
      ],
    },
    {
      id: 2,
      name: "Merchandise",
      slug: "merchandise",
      subcategories: [
        { id: 201, name: "Shirts", slug: "shirts" },
        { id: 202, name: "Hoodies & Jackets", slug: "hoodies-jackets" },
        { id: 203, name: "Hats", slug: "hats" },
        { id: 204, name: "Posters & Wall Art", slug: "posters-wall-art" },
        { id: 205, name: "Tote Bags", slug: "tote-bags" },
        {
          id: 206,
          name: "Music-Themed Lifestyle Items",
          slug: "lifestyle-items",
          subcategories: [
            { id: 2061, name: "Notebooks & Journals", slug: "notebooks-journals" },
            { id: 2062, name: "Coffee Mugs & Drinkware", slug: "coffee-mugs-drinkware" },
            { id: 2063, name: "Home Decor", slug: "home-decor" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Music Collectibles",
      slug: "music-collectibles",
      subcategories: [
        { id: 301, name: "Autographed Records", slug: "autographed-records" },
        { id: 302, name: "Memorabilia", slug: "memorabilia" },
        { id: 303, name: "Cassette Tapes", slug: "cassette-tapes" },
        { id: 304, name: "CDs", slug: "cds" },
        { id: 305, name: "Music DVDs/Blu-rays", slug: "music-dvds-blu-rays" },
      ],
    },
    {
      id: 4,
      name: "Genre-Specific Collections",
      slug: "genre-specific-collections",
      subcategories: [
        { id: 401, name: "Rock & Metal", slug: "rock-metal" },
        { id: 402, name: "Jazz & Blues", slug: "jazz-blues" },
        { id: 403, name: "Pop & Indie", slug: "pop-indie" },
        { id: 404, name: "Hip-Hop & Rap", slug: "hip-hop-rap" },
        { id: 405, name: "Electronic & Dance", slug: "electronic-dance" },
        { id: 406, name: "Classical & Instrumental", slug: "classical-instrumental" },
      ],
    },
    {
      id: 5,
      name: "Gift Items",
      slug: "gift-items",
      subcategories: [
        { id: 501, name: "Gift Cards", slug: "gift-cards" },
        { id: 502, name: "Mystery Boxes", slug: "mystery-boxes" },
        { id: 503, name: "Music-Themed Accessories", slug: "music-themed-accessories" },
      ],
    },
      {
        id: 6,
        name: "Best Sellers",
        slug: "best-sellers",
      },
      {
        id: 7,
        name: "Pre-Orders",
        slug: "pre-orders",
      },
  ];
  
  export default categories;
    