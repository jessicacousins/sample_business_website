document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent!");
  });

  const reviews = [
    {
      text: "JMC-Brand transformed our online presence. Their attention to detail and cutting-edge design solutions are outstanding.",
      author: "Alex Thompson",
      role: "CEO, Innovate Tech",
    },
    {
      text: "Thanks to JMC-Brand, our conversion rates skyrocketed! The branding strategy they implemented was next-level.",
      author: "Samantha Lee",
      role: "Marketing Director, Visionary Ventures",
    },
    {
      text: "Investing in JMC-Brand was the best decision for our startup. Their development team exceeded expectations!",
      author: "Daniel Carter",
      role: "Investor, Future Growth Fund",
    },
  ];

  let currentReview = 0;
  const reviewText = document.querySelector(".review-text");
  const reviewAuthor = document.querySelector(".review-author");
  const reviewRole = document.querySelector(".review-role");

  function updateReview(index) {
    reviewText.textContent = `"${reviews[index].text}"`;
    reviewAuthor.textContent = reviews[index].author;
    reviewRole.textContent = reviews[index].role;
  }

  document.getElementById("prevReview").addEventListener("click", () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReview(currentReview);
  });

  document.getElementById("nextReview").addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviews.length;
    updateReview(currentReview);
  });

  updateReview(currentReview);
});
