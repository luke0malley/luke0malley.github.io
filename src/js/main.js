// Import our custom CSS
import "../scss/styles.scss";

const bootstrap = require("bootstrap");

import headshotImage from "../img/headshot.jpg";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

const headshotElement = document.getElementById("headshot");
headshotElement.src = headshotImage;

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
