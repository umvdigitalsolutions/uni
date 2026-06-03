const pre = (name) => `/preuni-assets/${name}`;
const home = (name) => `/home-assets/${name}`;

export const assets = { pre, home };

export const navGroups = [
  { label: "About us", href: "/about-us/" },
  { label: "Free Resources", href: "/blogs/" },
  { label: "Courses", href: "/courses/" },
  { label: "Location", href: "/locations/" },
  { label: "Book Store", href: "/book-store/" },
  { label: "Own a Pre Uni", href: "/franchise/" },
  { label: "My Account", href: "/my-account/" },
];

export const heroSlides = [
  {
    title: "K-12 Learning, Powered by Real Teachers + Smart AI",
    subtitle: "Personalised support, all day, every day.",
    image: pre("hero-img.jpg"),
    primary: "/free-assessment/",
    secondary: "/school-holiday-workshop/",
    position: "center 27%",
  },
  {
    title: "Best-Selling OC & Selective Books for Smart Preparation",
    subtitle: "Created by experts. Trusted by thousands",
    image: pre("ebook-writing-formula-2.png"),
    primary: "/book-store/",
    secondary: "/book-store/",
    position: "right center",
  },
  {
    title: "Boost Writing. Master Public Speaking. Ace the Tests",
    subtitle: "Enrol in our intensive holiday program starting 7th July.",
    image: pre("parent-img.jpg"),
    primary: "/free-assessment/",
    secondary: "/school-holiday-workshop/",
    position: "center center",
  },
];

export const workSteps = [
  {
    label: "Step 1 Free Child Assessment",
    image: "image_2023_06_21T06_24_43_173Z.png",
    title: "For unparalleled insights",
    body:
      "Conducted online or on-campus, this obligation assessment provides us with unparalleled insights about your child's:",
    points: [
      "Academic strengths and weaknesses",
      "Best suited learning style",
      "Specific talents and challenges to meet",
      "Self-limiting behaviour and beliefs",
    ],
    closing:
      "Upon completion of the assessment, parents will receive a detailed report with a consultation of value $150.",
  },
  {
    label: "Step 2 Personalised Plan",
    image: "image_2023_06_21T06_24_46_828Z.png",
    title: "Tailored EXCLUSIVELY To Your Child's Learning Needs",
    body:
      "Our program advisor will create a personalised plan for your child with the right course, learning approach and platform based on the assessment.",
    points: ["One-on-one vs. small group", "Online vs. blended", "A clear path for steady growth"],
  },
  {
    label: "Step 3 Teach With Joy",
    image: "image_2023_06_21T06_24_49_961Z.png",
    title: "Because Learning Shouldn't be Boring, Outdated, or a Struggle",
    body:
      "Our dedicated and trained tutors use personal instruction, suitable learning styles and digital tools to make learning exciting, easy to understand and engaging.",
    points: ["Interactive lessons", "Up-to-date resources", "Australian National Curriculum aligned"],
  },
  {
    label: "Step 4 Excellent Support",
    image: "image_2023_06_21T06_24_53_434Z.png",
    title: "We Are Here When Your Child Needs us Most",
    body:
      "We are here for your child at every step of the learning process so they keep learning with confidence.",
    points: ["Free weekly homework help", "Video resources", "Weekly revision classes", "24/7 web tutor support"],
  },
  {
    label: "Step 5 Test and Challenge",
    image: "image_2023_06_21T06_24_56_529Z.png",
    title: "Keep Track of Your Child's Progression",
    body:
      "Regular testing teaches time-management and test-taking skills while progress reports show clear academic improvement.",
    points: ["Skill tracking", "Testing confidence", "Progress reports for parents"],
  },
  {
    label: "Step 6 Goal Setting",
    image: "image_2023_06_21T06_24_59_835Z.png",
    title: "Path to a Bright Future",
    body:
      "We review results, schedule parent and teacher meetings, and set new goals so every child can realise their true potential.",
    points: ["Review results", "Set new academic goals", "Build confidence for bigger challenges"],
  },
];

export const courses = [
  {
    title: "EWMT Core Classes",
    text:
      "Our EWMG Head start program is carefully designed for students studying from year one through to year six focusing on English, Writing, Mathematics and Thinking Skills.",
    image: "image_2023_06_21T06_24_46_828Z.png",
    href: "/courses/ewmg-head-start-program/",
  },
  {
    title: "Selective School Test Preparation",
    text:
      "Our Selective School mock Tests give your child the chance to perfect exam technique, build confidence and overcome exam day nerves before the big day.",
    image: "image_2023_06_21T06_24_56_529Z.png",
    href: "/courses/selective-school-trial-test/",
  },
  {
    title: "OC Trial Test",
    text:
      "Our comprehensive OC Trial Test Course helps children become confident in Maths, English and Thinking Skills while building the skills needed to tackle the exam.",
    image: "image_2023_06_21T06_24_59_835Z.png",
    href: "/courses/oc-trial-test/",
  },
];

export const supportCards = [
  {
    title: "Experienced Teachers",
    image: "welcome-points-img.png",
    text:
      "Not university students or graduates. The absolute BEST taking each and every class so that your child can get ahead.",
  },
  {
    title: "Regular Assessments",
    image: "welcome-points-2-img.png",
    text:
      "Your child will be assessed every 5 weeks using the most advanced assessment tool in the country, with detailed reports sent to you.",
  },
  {
    title: "Parent Portal",
    image: "welcome-points-3-img.png",
    text:
      "Your portal keeps you up to date with your child's progress and gives you the support you need to help your child thrive.",
  },
];

export const awards = [
  { title: "Australian Small Business Championship Awards", image: "IMG-20240419-WA0003.jpg" },
  { title: "Simba Excellence", image: "unnamed.jpg" },
  { title: "Ausmumpreneur 2023", image: "image_2023_06_30T13_51_08_626Z.png" },
  { title: "Children's Education 2023", image: "image_2023_06_30T13_51_48_922Z.png" },
  { title: "Business Excellence 2023", image: "image_2023_06_30T13_51_08_626Z.png" },
  { title: "Business Pivot 2023", image: "image_2023_06_30T13_51_48_922Z.png" },
];

export const testimonials = [
  {
    name: "Lisa and David M",
    text:
      "The program is designed with such care and attention to detail. Our daughter acquired essential skills and developed a strong sense of self-assurance.",
  },
  {
    name: "Sarah and Michael D",
    text:
      "Pre Uni College Digital exceeded our expectations. It gave our child the perfect blend of academic and social skills.",
  },
  {
    name: "John and Emily S",
    text:
      "The interactive activities and personalised approach boosted his confidence and fostered a genuine love for learning.",
  },
];
