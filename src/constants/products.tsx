import temax1 from "public/images/temax-1.png";
import temax2 from "public/images/temax-2.png";
import temax3 from "public/images/temax-3.png";
import otelDetay1 from "public/images/otel-detay-1.png";
import otelDetay2 from "public/images/otel-detay-2.png";
import taskboard1 from "public/images/taskboard-1.png";
import taskboard2 from "public/images/taskboard-2.png";
import taskboard3 from "public/images/taskboard-3.png";
import github1 from "public/images/github-1.png";
import github2 from "public/images/github-2.png";

export const products = [
  {
    href: "https://thesignsile.com/",
    title: "otelfiyat.com / Temax",
    description:
      "Developed a landing page for the company's new product, Temax. The company give this product to approximately 50 hotels as a service. The website allows hotels to get reservations.",
    thumbnail: temax1,
    images: [temax2, temax3],
    stack: ["Nextjs", "React", "Bootstrap"],
    slug: "temax",
    content: (
      <div>
        <p>The website was built using Next.js, React, and Bootstrap.</p>
      </div>
    ),
  },
  {
    href: "https://www.otelfiyat.com/otel/the-sign-sile-hotel-spa",
    title: "otelfiyat.com / Otel Detay Sayfası",
    description:
      "The company's new product, the hotel detail page, has been developed. The company serves all hotels with this product. The website allows guests to make reservations for hotels.",
    thumbnail: otelDetay1,
    images: [otelDetay1, otelDetay2],
    stack: ["jQuery", "Bootstrap"],
    slug: "otelfiyat",
    content: (
      <div>
        <p>The website was created using jQuery, Bootstrap.</p>
      </div>
    ),
  },
  {
    href: "https://task-board-liart.vercel.app/",
    title: "Task Board",
    description:
      "Modern bir task yönetim uygulaması olan Kanban Board projesi, Next.js ve TailwindCSS kullanılarak geliştirilmiştir. Sürükle-bırak özelliği ile kolay task yönetimi sağlar.",
    thumbnail: taskboard1,
    images: [taskboard1, taskboard2, taskboard3],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "taskboard",
    content: (
      <div>
        <p>The website was created using React, TailwindCSS.</p>
      </div>
    ),
  },
  {
    href: "https://githubfinder-apps.netlify.app/",
    title: "Github Finder",
    description:
      "This application shows the searched user's information using the Github API. The github profile of the searched person appears and relevant information is displayed.",
    thumbnail: github1,
    images: [github1, github2],
    stack: ["React", "Tailwindcss"],
    slug: "githubfinder",
    content: (
      <div>
        <p>The website was created using React, TailwindCSS.</p>
      </div>
    ),
  },
];
