export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export const categories: MenuCategory[] = [
  { id: "all", name: "All", description: "Browse our complete menu" },
  { id: "coffee-tea", name: "Coffee & Tea", description: "Warm brews and refreshing teas" },
  { id: "beverages", name: "Fresh Beverages", description: "Juices and refreshing drinks" },
  { id: "light-bites", name: "Light Bites", description: "Perfect for sharing or snacking" },
  { id: "traditional", name: "Local Delicacies", description: "Authentic recipes from the region" },
  { id: "mains", name: "Mains", description: "Hearty meals to satisfy" },
  { id: "desserts", name: "Desserts", description: "Sweet endings to your meal" },
];

export const menuItems: MenuItem[] = [
  // Coffee & Tea
  {
    id: 1,
    name: "Espresso",
    description: "Rich and bold single shot of pure coffee essence",
    price: "₹80",
    category: "coffee-tea",
    image: "/menu/espresso.jpeg",
    vegetarian: true,
  },
  {
    id: 2,
    name: "Latte",
    description: "Smooth espresso with steamed milk and light foam",
    price: "₹120",
    category: "coffee-tea",
    image: "/menu/latte.jpg",
    popular: true,
    vegetarian: true,
  },
  {
    id: 3,
    name: "Black Coffee",
    description: "Classic brewed coffee, bold and aromatic",
    price: "₹60",
    category: "coffee-tea",
    image: "/menu/black-coffee.jpeg",
    vegetarian: true,
  },
  {
    id: 4,
    name: "Cold Coffee",
    description: "Chilled coffee blended with milk and a hint of sweetness",
    price: "₹130",
    category: "coffee-tea",
    image: "/menu/cold-coffee.jpeg",
    popular: true,
    vegetarian: true,
  },
  {
    id: 5,
    name: "Milk Tea",
    description: "Traditional Assam tea with creamy milk",
    price: "₹40",
    category: "coffee-tea",
    image: "/menu/milk-tea.jpeg",
    vegetarian: true,
  },
  {
    id: 6,
    name: "Green Tea",
    description: "Light and refreshing, packed with antioxidants",
    price: "₹50",
    category: "coffee-tea",
    image: "/menu/green-tea.jpeg",
    vegetarian: true,
  },
  {
    id: 7,
    name: "Rose Tea",
    description: "Delicate floral tea with hints of rose petals",
    price: "₹70",
    category: "coffee-tea",
    image: "/menu/rose-tea.jpeg",
    vegetarian: true,
  },
  {
    id: 8,
    name: "Tandoori Tea",
    description: "Unique smoky chai served in a clay cup",
    price: "₹80",
    category: "coffee-tea",
    image: "/menu/tandoori-tea.jpg",
    popular: true,
    vegetarian: true,
  },

  // Fresh Beverages
  {
    id: 9,
    name: "Fresh Coconut Juice",
    description: "Natural coconut water straight from the shell",
    price: "₹80",
    category: "beverages",
    image: "/menu/coconut.jpeg",
    vegetarian: true,
  },
  {
    id: 10,
    name: "Orange Juice",
    description: "Freshly squeezed orange juice, pure and refreshing",
    price: "₹90",
    category: "beverages",
    image: "/menu/orange-juice.jpeg",
    popular: true,
    vegetarian: true,
  },

  {
    id: 12,
    name: "Lemon Soda",
    description: "Zesty lemon with sparkling soda, sweet or salted",
    price: "₹50",
    category: "beverages",
    image: "/menu/lemon-soda.jpeg",
    vegetarian: true,
  },
  {
    id: 13,
    name: "Chocolate Milk",
    description: "Creamy milk with rich chocolate flavor",
    price: "₹70",
    category: "beverages",
    image: "/menu/chocolate-milk.jpeg",
    vegetarian: true,
  },

  // Light Bites
  {
    id: 14,
    name: "Paneer Tikka",
    description: "Tender cottage cheese marinated in spices and grilled to perfection",
    price: "₹180",
    category: "light-bites",
    image: "/menu/paneer-tikka.jpg",
    popular: true,
    vegetarian: true,
  },
  {
    id: 15,
    name: "Tandoori Aloo",
    description: "Baby potatoes marinated in tandoori spices and roasted",
    price: "₹120",
    category: "light-bites",
    image: "/menu/tandoori-aloo.jpeg",
    vegetarian: true,
  },
  {
    id: 16,
    name: "Crispy Chilly Potato",
    description: "Golden fried potatoes tossed in spicy chili sauce",
    price: "₹140",
    category: "light-bites",
    image: "/menu/chilly-potato.jpeg",
    spicy: true,
    vegetarian: true,
  },
  {
    id: 17,
    name: "Veg Spring Roll",
    description: "Crispy rolls stuffed with fresh vegetables",
    price: "₹100",
    category: "light-bites",
    image: "/menu/spring-roll.jpeg",
    vegetarian: true,
  },
  {
    id: 18,
    name: "Cheese Bread",
    description: "Warm bread topped with melted cheese and herbs",
    price: "₹90",
    category: "light-bites",
    image: "/menu/cheese-bread.jpeg",
    vegetarian: true,
  },
  {
    id: 19,
    name: "Veg Sandwich",
    description: "Fresh vegetables layered between toasted bread",
    price: "₹80",
    category: "light-bites",
    image: "/menu/veg-sandwich.jpeg",
    vegetarian: true,
  },
  {
    id: 20,
    name: "Chicken Sandwich",
    description: "Grilled chicken with lettuce and mayo in toasted bread",
    price: "₹120",
    category: "light-bites",
    image: "/menu/chicken-sandwich.jpeg",
    popular: true,
  },
  {
    id: 21,
    name: "Fish Finger",
    description: "Crispy fried fish strips served with tartar sauce",
    price: "₹160",
    category: "light-bites",
    image: "/menu/fish-finger.jpeg",
  },

  // Traditional Bodo
  {
    id: 22,
    name: "Ondla Oma",
    description: "Traditional Bodo rice cake cooked with aromatic herbs",
    price: "₹150",
    category: "traditional",
    image: "/menu/ondla-oma.jpeg",
    popular: true,
    vegetarian: true,
  },
  {
    id: 23,
    name: "Ondla Dao",
    description: "Steamed rice cake served with traditional accompaniments",
    price: "₹130",
    category: "traditional",
    image: "/menu/ondla-dao.jpeg",
    vegetarian: true,
  },
  {
    id: 24,
    name: "Ondla Meoyai",
    description: "Rice cake preparation with bamboo shoot, authentic Bodo flavor",
    price: "₹160",
    category: "traditional",
    image: "/menu/ondla-meoyai.jpeg",
    vegetarian: true,
  },

  {
    id: 26,
    name: "Napam Batwn",
    description: "Fermented fish delicacy with aromatic herbs",
    price: "₹180",
    category: "traditional",
    image: "/menu/napam.jpeg",
    popular: true,
  },
  {
    id: 27,
    name: "Kusia",
    description: "Traditional Bodo preparation, rich in local flavors",
    price: "₹170",
    category: "traditional",
    image: "/menu/kusia.jpeg",
  },
  {
    id: 28,
    name: "Hangsw",
    description: "Signature Bodo dish, slow-cooked to perfection",
    price: "₹200",
    category: "traditional",
    image: "/menu/hangsw.jpeg",
    popular: true,
  },

  // Mains
  {
    id: 29,
    name: "Veg Dum Biriyani",
    description: "Fragrant basmati rice layered with spiced vegetables",
    price: "₹180",
    category: "mains",
    image: "/menu/veg-biriyani.jpeg",
    vegetarian: true,
  },
  {
    id: 30,
    name: "Chicken Dum Biriyani",
    description: "Aromatic rice slow-cooked with tender chicken pieces",
    price: "₹220",
    category: "mains",
    image: "/menu/chicken-biriyani.jpeg",
    popular: true,
  },
  {
    id: 31,
    name: "Fried Rice",
    description: "Wok-tossed rice with vegetables and light seasoning",
    price: "₹120",
    category: "mains",
    image: "/menu/fried-rice.jpeg",
    vegetarian: true,
  },
  {
    id: 32,
    name: "Naan",
    description: "Soft leavened bread, freshly baked in tandoor",
    price: "₹40",
    category: "mains",
    image: "/menu/naan.jpeg",
    vegetarian: true,
  },

  // Desserts
  {
    id: 33,
    name: "Cakes",
    description: "Freshly baked cakes, ask for today's selection",
    price: "₹150",
    category: "desserts",
    image: "/menu/cakes.jpeg",
    popular: true,
    vegetarian: true,
  },
  {
    id: 34,
    name: "Sweets Platter",
    description: "Assortment of traditional Indian sweets",
    price: "₹120",
    category: "desserts",
    image: "/menu/sweets.jpeg",
    vegetarian: true,
  },
];

// Get featured items for homepage preview
export const getFeaturedItems = (limit: number = 6): MenuItem[] => {
  return menuItems.filter((item) => item.popular).slice(0, limit);
};

// Get items by category
export const getItemsByCategory = (categoryId: string): MenuItem[] => {
  if (categoryId === "all") return menuItems;
  return menuItems.filter((item) => item.category === categoryId);
};
