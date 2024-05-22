import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 1, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com/", icon: "fab fa-facebook" },
  { id: 2, href: "https://x.com/", icon: "fab fa-twitter" },
  { id: 3, href: "https:/squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Experience the world without breaking the bank. Our affordable tour plans ensure you get the best value for your travel budget.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Discover breathtaking trails and scenic routes. Our hiking tours offer unforgettable adventures in nature’s most beautiful landscapes.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Relax and enjoy your journey with our carefully selected accommodations and amenities, ensuring a comfortable and stress-free travel experience.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    info: "Experience the thrill of Tibet, the 'Roof of the World.' Trek through stunning landscapes, including the Everest Base Camp, and explore ancient monasteries like the Potala Palace. Immerse yourself in rich Tibetan culture and spirituality, attend vibrant festivals, and savor traditional cuisine. From high-altitude trekking to serene spiritual retreats, Tibet offers a unique blend of adventure and tranquility.",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "september 15th, 2024",
    title: "Best of Java",
    info: "Explore the wonders of Java, Indonesia's vibrant heart. Discover the stunning Borobudur and Prambanan temples, trek the active volcanoes of Bromo and Ijen, and relax on the pristine beaches of Karimunjawa. Immerse yourself in the rich culture of Yogyakarta, enjoy traditional Javanese cuisine, and experience the dynamic city life of Jakarta. Java offers an unforgettable blend of natural beauty, cultural heritage, and modern attractions.",
    location: "indonesia",
    duration: 10,
    cost: 4500,
  },
  {
    id: 3,
    image: tour3,
    date: "october 1st, 2024",
    title: "explore hong kong",
    info: "Discover the dynamic city of Hong Kong, where East meets West. Marvel at the stunning skyline from Victoria Peak, explore the vibrant markets of Mong Kok, and enjoy the tranquility of Lantau Island. Indulge in world-class shopping and dining, visit the iconic Tian Tan Buddha, and experience the thrilling nightlife in Lan Kwai Fong. Hong Kong offers a unique blend of modernity, tradition, and natural beauty.",
    location: "china",
    duration: 7,
    cost: 4500,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2024",
    title: "kenya highlights",
    info: "Embark on an unforgettable adventure in Kenya, a land of diverse landscapes and rich wildlife. Witness the Great Migration in the Maasai Mara, relax on the pristine beaches of Diani, and explore the vibrant city of Nairobi. Climb the iconic Mount Kenya, visit the stunning Amboseli National Park for views of Mount Kilimanjaro, and immerse yourself in the unique culture of the Maasai people. Kenya offers a perfect blend of thrilling safaris, beautiful scenery, and cultural experiences.",
    location: "kenya",
    duration: 7,
    cost: 3000,
  },
];
