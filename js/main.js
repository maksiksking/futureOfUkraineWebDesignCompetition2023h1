document.addEventListener("DOMContentLoaded", function () {

  const string1 = document.getElementById("string1")
  let e = window.event
  let kPre

  let stringLeftList = []

  for (let i = 1; i <= 12; i++) {
    const stringCurrent = document.getElementById("string" + i.toString())
    let b = Math.floor(Math.random() * 100).toString()
    stringCurrent.style.left = b + "%";
  }

  for (let i1 = 1; i1 < 13; i1++) {
    const stringCurrent = document.getElementById("string" + i1.toString())
    stringLeftList[i1 - 1] = stringCurrent.style.left
  }

  onmousemove = function (e) {
    if ((((e.clientY * 100) / window.innerHeight) <= 14.5) || (((e.clientY * 100) / window.innerHeight) >= 80.75)) {
      return
    }

    for (let i2 = 1; i2 < 13; i2++) {
      const stringCurrent = document.getElementById("string" + i2.toString())
      const initString = parseInt(stringLeftList[i2 - 1])
      if (e.clientX >= window.innerWidth / 2) {
        switch (Math.floor(Math.random() * 6)) {
          case 1:
            kPre = (e.clientX / window.innerWidth) / (0.045)
            stringCurrent.style.left = ((initString + kPre) * 0.5).toString() + "%"

            // scale
            if (Math.floor(Math.random())) {
              stringCurrent.style.scale = "-" + (kPre * 0.7 + Math.floor(Math.random() * 60)).toString() + "%"
            } else {
              stringCurrent.style.scale = (kPre * 0.7 + Math.floor(Math.random() * 90)).toString() + "%"
            }

            // rotation
            if (Math.floor(Math.random())) {
              stringCurrent.style.rotate = "-" + (kPre * 0.1 + Math.floor(Math.random() * 90)).toString() + "deg"
            } else {
              stringCurrent.style.rotate = (kPre * 0.1 + Math.floor(Math.random() * 90)).toString() + "deg"
            }

            break
          case 2:
            kPre = (e.clientX / window.innerWidth) / (0.05)
            stringCurrent.style.left = ((initString + kPre) * 0.5).toString() + "%"


            break;
          case 3:
            kPre = (e.clientX / window.innerWidth) / (0.04)
            stringCurrent.style.left = ((initString + kPre) * 0.5).toString() + "%"

            break;
          default:
            // oh no
        }
      }
      if (e.clientX <= window.innerWidth / 2) {
        switch (Math.floor(Math.random() * 6)) {
          case 1:
            kPre = (e.clientX / window.innerWidth) / (0.005)
            stringCurrent.style.left = ((initString - kPre) * 0.5).toString() + "%"

            // scale
            if (Math.floor(Math.random())) {
              stringCurrent.style.scale = "-" + (kPre * 0.7 + Math.floor(Math.random() * 60)).toString() + "%"
            } else {
              stringCurrent.style.scale = (kPre * 0.7 + Math.floor(Math.random() * 90)).toString() + "%"
            }

            // rotation
            if (Math.floor(Math.random())) {
              stringCurrent.style.rotate = "-" + (kPre * 0.1 + Math.floor(Math.random() * 90)).toString() + "deg"
            } else {
              stringCurrent.style.rotate = (kPre * 0.1 + Math.floor(Math.random() * 90)).toString() + "deg"
            }


            break
          case 2:
            kPre = (e.clientX / window.innerWidth) / (0.01)
            stringCurrent.style.left = ((initString - kPre) * 0.5).toString() + "%"

            break;
          case 3:
            kPre = (e.clientX / window.innerWidth) / (0.001)
            stringCurrent.style.left = ((initString - kPre) * 0.5).toString() + "%"

            break;
          default:
            // uh oh
        }
      }
    }
  }

  let navList = document.getElementById("navList")
  let headBlock = document.getElementById("headerBlock")
  let slideFromTxt = document.getElementById("mainPage")

  let slideAmount = 0;

  function slideOut() {
    slideAmount = 0
    for (let i = 0; i < 3; i++) {
      const slideOutTxt = document.getElementById("slideTxt" + i)
      slideOutTxt.style.animation = "fadeOne 0.5s forwards 1 0s ease-in-out"
      slideOutTxt.style.cursor = "pointer"

      if (i === 1) {
        slideAmount += 10;
      }
      if (i === 2) {
        slideAmount += 200;
      }
      if (i === 0) {
        slideAmount += 30;
      }

      slideOutTxt.style.left = slideOutTxt.style.marginLeft = ((slideAmount).toString()) + "%"
    }
  }

  slideFromTxt.addEventListener("mouseover", slideOut)

  headBlock.addEventListener("mouseleave", () => {
    for (let i = 0; i < 3; i++) {
      const slideOutTxt = document.getElementById("slideTxt" + i)
      slideOutTxt.style.animation = "fadeRun 0.5s forwards reverse 1 0s ease-in-out"
      slideOutTxt.style.cursor = "initial"

      slideOutTxt.style.marginLeft = "0"
    }
  })

  // theme
  let themeBlock0 = document.getElementsByClassName("container-fluid")[0]
  let themeBlock1 = document.getElementById("droneBlock")

  const themeButton = document.getElementById("modeSwip")
  let iSwip = 0

  themeButton.addEventListener("click", () => {
    iSwip += 1
    if (iSwip === 4) {
      iSwip = 1
    }
    if (iSwip === 1) {
      const themeBlockCurrentM = document.querySelectorAll('.bg-dark');
      const themeBlockCurrentT1 = document.querySelectorAll('h1');
      const themeBlockCurrentT2 = document.querySelectorAll('h2');
      const themeBlockCurrentT3 = document.querySelectorAll('p');
      const themeImg = document.querySelectorAll('.socialOne');
      const themeBlockCurrentT4 = document.querySelectorAll('a');

      themeBlockCurrentM.forEach(box => {
        box.classList.replace("bg-dark", "bg-light")
      })
      themeBlockCurrentT1.forEach(box => {
        box.style.color = "black"
      })
      themeBlockCurrentT2.forEach(box => {
        box.style.color = "black"
      })
      themeBlockCurrentT3.forEach(box => {
        box.style.color = "#000000"
      })
      themeBlockCurrentT4.forEach(box => {
        box.style.color = "black"
      })
      themeImg.forEach(box => {
        switch (box) {
          case themeImg[0]:
            box.classList.add("ytDark");
            break;
          case themeImg[1]:
            box.classList.add("kofiDark");
            break;
          case themeImg[2]:
            box.classList.add("twitterDark");
            break;
          case themeImg[3]:
            box.classList.add("githubDark");
            break;
          case themeImg[4]:
            box.classList.add("discordDark");
            break;
        }
    }
  )
  }

  if (iSwip === 2) {
    const themeBlockCurrentM = document.querySelectorAll('.bg-light');
    const themeImg = document.querySelectorAll('.socialOne');

    themeBlockCurrentM.forEach(box => {
      box.classList.replace("bg-light", "bg-splash")
    })

    themeImg.forEach(box => {
      switch (box) {
        case themeImg[0]:
          box.classList.remove("ytDark");
          break;
        case themeImg[1]:
          box.classList.remove("kofiDark");
          break;
        case themeImg[2]:
          box.classList.remove("twitterDark");
          break;
        case themeImg[3]:
          box.classList.remove("githubDark");
          break;
        case themeImg[4]:
          box.classList.remove("discordDark");
          break;
      }
    })
  }

  if (iSwip === 3) {
    const themeBlockCurrentM = document.querySelectorAll('.bg-splash');
    const themeBlockCurrentT1 = document.querySelectorAll('h1');
    const themeBlockCurrentT2 = document.querySelectorAll('h2');
    const themeBlockCurrentT3 = document.querySelectorAll('p');
    const themeBlockCurrentT4 = document.querySelectorAll('a');

    themeBlockCurrentM.forEach(box => {
      box.classList.replace("bg-splash", "bg-dark")
    })
    themeBlockCurrentT1.forEach(box => {
      box.style.color = "white"
    })
    themeBlockCurrentT2.forEach(box => {
      box.style.color = "white"
    })
    themeBlockCurrentT3.forEach(box => {
      box.style.color = "white"
    })
    themeBlockCurrentT4.forEach(box => {
      box.style.color = "white"
    })
  }

})

// lack of Drone hell

// Liq
const liq = document.getElementById("liqAnim")
const liqContainer = document.getElementById("liqContainer")

const circleCursor = document.getElementsByClassName("circleFollow")[0]

liqContainer.addEventListener("mouseover", function () {
  liq.play()
})

liqContainer.addEventListener("mouseleave", function () {
  setTimeout(function () {
    liq.pause()
  }, 500)
})

const discordButton = document.getElementById("discordOne")

function discordCopy() {
  navigator.clipboard.writeText("@maksiks").then(() => "");
}

discordButton.addEventListener("click", discordCopy)

let copyTxt = document.getElementById("discordFloatie")

discordButton.addEventListener("mouseover", function (e3) {
  copyTxt.style.display = "initial"
})

discordButton.addEventListener("mouseleave", function (e3) {
  copyTxt.style.display = "none"
})

document.getElementById("mainPage").addEventListener("click", function () {
  scrollTo(0, 0)
})
document.getElementById("slideTxt0").addEventListener("click", function () {
  scrollTo(0, window.screen.height * 0.4)
})
document.getElementById("slideTxt1").addEventListener("click", function () {
  scrollTo(0, window.screen.height * 1.4)
})
document.getElementById("slideTxt2").addEventListener("click", function () {
  scrollTo(0, window.screen.height * 2.4)
})

window.addEventListener("load", function () {
  scrollTo(0, document.documentElement.scrollTop || document.body.scrollTop)
})

  console.log("Навігація працює нормально лише на хостингу :)")

})
;
