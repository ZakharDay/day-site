import './index.css'

function initMainMenu() {
  const menu = document.querySelector('section.center menu.mainMenu')

  if (menu) {
    menu.childNodes.forEach((link) => {
      if (link.tagName == 'a') {
        link.addEventListener('mouseenter', (e) => {
          loadPageOnHover(link)
        })
      }
    })
  }
}

function initMoreMenu() {
  const menu = document.querySelector('section.center menu.moreMenu')

  if (menu) {
    menu.childNodes.forEach((link) => {
      if (link.tagName == 'a') {
        link.addEventListener('mouseenter', (e) => {
          loadPageOnHover(link)
        })
      }
    })
  }
}

function initMainMenuInternal() {
  const menu = document.querySelector('section.left menu.mainMenu')

  if (menu) {
    menu.childNodes.forEach((link) => {
      if (link.tagName == 'a') {
        checkAndMarkCurrentPage(link)
      }
    })
  }
}

function initMoreMenuInternal() {
  const menu = document.querySelector('section.left menu.moreMenu')

  if (menu) {
    menu.childNodes.forEach((link) => {
      if (link.tagName == 'a') {
        checkAndMarkCurrentPage(link)
      }
    })
  }
}

function initHomeButton() {
  const homeButton = document.querySelector('body#index .homeButton')

  if (homeButton) {
    homeButton.addEventListener('mouseenter', () => {
      unloadPageOnHover()
    })
  }
}

function loadPageOnHover(element) {
  const { id } = element
  const section = document.querySelector('section.right')

  if (section.id != id) {
    const menuItems = document.getElementsByClassName('menuItem')

    for (let index = 0; index < menuItems.length; index++) {
      const menuItem = menuItems[index]

      if (menuItem.nodeName == 'A') {
        menuItem.classList.remove('hover')
      }
    }

    element.classList.add('hover')

    const xhr = new XMLHttpRequest()
    xhr.open('GET', element.attributes[1].value, true)

    xhr.onreadystatechange = (e) => {
      const container = document.createElement('div')
      container.innerHTML = e.target.responseText
      const newSection = container.querySelector('section.right')

      if (newSection) {
        section.replaceWith(newSection)
      }
    }

    xhr.send()
  }
}

function unloadPageOnHover() {
  document.querySelector('menu.mainMenu').childNodes.forEach((link) => {
    // console.log(link.nodeName)

    if (link.nodeName == 'A') {
      link.classList.remove('hover')
    }
  })

  const section = document.querySelector('section.right')
  section.id = 'index'
  section.innerHTML = ''
}

function checkAndMarkCurrentPage(element) {
  const body = document.body

  // console.log(body.id, element.id)

  if (body.id == element.id) {
    element.classList.add('active')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMainMenu()
  initMoreMenu()
  initMainMenuInternal()
  initMoreMenuInternal()
  initHomeButton()
})
