// Initialization for ES Users
import {
    Collapse,
    Dropdown,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Collapse, Dropdown });

document.querySelector('button').addEventListener('click', function () {
  document.querySelectorAll('.hidden').forEach(function (el) {
        el.classList.toggle('hidden');
  });
});

// Close dropdown menu when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.relative')) {
        document.querySelectorAll('.absolute').forEach(function (el) {
            el.classList.add('hidden');
        });
    }
});