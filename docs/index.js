/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

function initMainMenu() {
  var menu = document.querySelector('section.center menu.mainMenu');
  if (menu) {
    menu.childNodes.forEach(function (link) {
      link.addEventListener('mouseenter', function (e) {
        loadPageOnHover(link);
      });
    });
  }
}
function initMoreMenu() {
  var menu = document.querySelector('section.center menu.moreMenu');
  if (menu) {
    menu.childNodes.forEach(function (link) {
      link.addEventListener('mouseenter', function (e) {
        loadPageOnHover(link);
      });
    });
  }
}
function initMainMenuInternal() {
  var menu = document.querySelector('section.left menu.mainMenu');
  if (menu) {
    menu.childNodes.forEach(function (link) {
      checkAndMarkCurrentPage(link);
    });
  }
}
function initMoreMenuInternal() {
  var menu = document.querySelector('section.left menu.moreMenu');
  if (menu) {
    menu.childNodes.forEach(function (link) {
      checkAndMarkCurrentPage(link);
    });
  }
}
function initHomeButton() {
  var homeButton = document.querySelector('body#index .homeButton');
  if (homeButton) {
    homeButton.addEventListener('mouseenter', function () {
      unloadPageOnHover();
    });
  }
}
function loadPageOnHover(element) {
  var id = element.id;
  var section = document.querySelector('section.right');
  if (section.id != id) {
    var menuItems = document.getElementsByClassName('menuItem');
    for (var index = 0; index < menuItems.length; index++) {
      var menuItem = menuItems[index];
      if (menuItem.nodeName == 'A') {
        menuItem.classList.remove('hover');
      }
    }
    element.classList.add('hover');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', element.attributes[1].value, true);
    xhr.onreadystatechange = function (e) {
      var container = document.createElement('div');
      container.innerHTML = e.target.responseText;
      var newSection = container.querySelector('section.right');
      if (newSection) {
        section.replaceWith(newSection);
      }
    };
    xhr.send();
  }
}
function unloadPageOnHover() {
  document.querySelector('menu.mainMenu').childNodes.forEach(function (link) {
    // console.log(link.nodeName)

    if (link.nodeName == 'A') {
      link.classList.remove('hover');
    }
  });
  var section = document.querySelector('section.right');
  section.id = 'index';
  section.innerHTML = '';
}
function checkAndMarkCurrentPage(element) {
  var body = document.body;

  // console.log(body.id, element.id)

  if (body.id == element.id) {
    element.classList.add('active');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  initMainMenu();
  initMoreMenu();
  initMainMenuInternal();
  initMoreMenuInternal();
  initHomeButton();
});
/******/ })()
;