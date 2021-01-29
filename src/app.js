let slider = tns({
    container: "#carousel",
    items: 2.5,
    autoplay: true,
    mode: "carousel",
    slideBy: "page",
    controls: false,
    nav: false,
    autoplayHoverPause: false,
    autoplayTimeout: 4000,
    autoplayPosition: "bottom",
    gutter: 50,
    autoplayButtonOutput: false,
  });
  AOS.init({
    delay: 200,
    duration: 1200,
    once: false,
  });
  let hambuger = document.querySelector("#hamburger")
  let mobileNav = document.querySelector("#mobile-nav")
  let menuSvg = document.querySelector("#svg-menu")
  let closeSvg = document.querySelector("#svg-x")
  function openNav() {
    mobileNav.classList.remove("hidden")
      mobileNav.classList.add("block")
      closeSvg.classList.remove("hidden")
      closeSvg.classList.add("block")
      menuSvg.classList.add("hidden")
  }
  function closeNav() {
    mobileNav.classList.remove("block")
    mobileNav.classList.add("hidden")
      closeSvg.classList.add("hidden")
      closeSvg.classList.remove('block')
      menuSvg.classList.remove('hidden')
  }
  hambuger.addEventListener('click',function (e) {
    if (mobileNav.classList.contains("hidden")) {
      openNav()
    } else {
      mobileNav.classList.add("hidden")
      closeNav()
    }
  })
mobileNav.addEventListener("click",function (e) {
  console.log("hi there")
  closeNav()
})