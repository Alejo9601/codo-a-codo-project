const realExperiences = [
  {
    image: "profile.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam et natus voluptas sed repellendus.",
  },
  {
    image: "profile2.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam et natus voluptas sed repellendus.",
  },
  {
    image: "profile.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam et natus voluptas sed repellendus.",
  },
];

const profileImg = document.querySelector(".rounded-container--profile");
const comment = document.querySelector(".card-carousel--profiles p");
const paginationDots = document.querySelectorAll(".card-carousel__dot");

let arrayIndex = 0;

setInterval(() => {
  profileImg.style.backgroundImage = `url(public/${realExperiences[arrayIndex].image})`;
  profileImg.style.backgroundSize = "cover";
  comment.textContent = realExperiences[arrayIndex].comment;

  //removing previous class asignations to dots
  paginationDots.forEach((pageDot) => {
    pageDot.classList.remove("actual-page");
  });

  paginationDots[arrayIndex].classList.add("actual-page");

  arrayIndex < realExperiences.length - 1
    ? (arrayIndex += 1)
    : (arrayIndex = 0);
}, 5000);
