const realExperiences = [
  {
    image: "",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam et natus voluptas sed repellendus.",
  },
  {
    image: "",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur",
  },
  {
    image: "",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const profileImg = document.querySelector(".rounded-container--profiles");
const comments = document.querySelector(".card-carousel--profiles p");
const pagination = document.querySelector(".card-carousel__pagination");

realExperiences.forEach((pExperience) => {
  setTimeout(() => {
    comments.textContent = pExperience.comment;
  }, 2000);
});
