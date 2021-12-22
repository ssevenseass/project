

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.iOS() ||
            isMobile.Windows()
        );
    }

};

if (isMobile.any()) {
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu_arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            })
        }
    }
}
else {
    document.body.classList.add('_pc');
}

const myEmail = localStorage.getItem('email');
if(myEmail == null) {
  const wrap = document.getElementsByClassName('wrapper');
  wrap[0].hidden = 'false';
  document.location.href = "login.html"
    console.log(2)
} else if (myEmail != null) {
    const wrap = document.getElementsByClassName('wrapper');
    //wrap[0].hidden = 'true';
    console.log(1)
}






