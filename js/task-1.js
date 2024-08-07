document.querySelectorAll("li.item").forEach((li) => {
  console.log(
    li.querySelector("h2").textContent,
    li.querySelectorAll("li").length
  );
});
