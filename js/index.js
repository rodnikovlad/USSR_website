function changeMainContainer(){
    var mainLabel = document.getElementById("change-container-text");
    var menuItem = document.getElementById("menu-items");
    var introductionText = document.getElementById("introduction-text");
    var menuText = document.getElementById("menu-text");

    var article1 = document.getElementById("article-1");
    var article6 = document.getElementById("article-6");

    if(mainLabel.textContent === "К СТАТЬЯМ"){
        menuItem.style.display = "flex";
        menuText.style.display = "none";
        introductionText.style.display = "none";
        mainLabel.innerHTML = "НА ГЛАВНУЮ";
        article1.style.display = "none";
        article6.style.display = "none";
    }
    else if(mainLabel.textContent === "НА ГЛАВНУЮ"){
        menuItem.style.display = "none";
        menuText.style.display = "none";
        introductionText.style.display = "block";
        mainLabel.innerHTML = "К СТАТЬЯМ";
    }
}

/* ---------------------------------Адаптивный слайдер для "альбомов"------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: true,
      interval: 3000,
      swipe: true,
    });
  });