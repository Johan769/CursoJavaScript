const d = document;

export default function scroll_spy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    //console.log("entries", entries);
    entries.forEach((entry) => {
      //console.log("entry", entry);
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("active");
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("active");
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    rootMargin: "-450px"
  });

  console.log($sections);
  $sections.forEach((el) => observer.observe(el));
}
