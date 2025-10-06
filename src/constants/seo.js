const image =
  "https://res.cloudinary.com/dqqado0lv/image/upload/v1759744799/devqueen-website-cover_rrhnhi.png";
const creator = "DevQueen";
const author = creator;

export const url = (slug) => {
  return `https://devqueen.xyz/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "DevQueen - FullStack Blockchain Developer",
    description:
      "I enjoy creating blockchain solutions with solid foundations, scalability, and excellent user experiences.",
  },
};
