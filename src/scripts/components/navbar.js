/**
 * Navbar
 */

export default function() {

  const navbar = document.querySelector('[data-component="navbar"]');

  // When navbar exists
  if (navbar) {

    // Show an overlay on the navbar toggler click
    document.addEventListener('click', function (event) {

    	// If the clicked element doesn't have the right selector, bail
    	if (!event.target.closest('[data-js="navbar-toggler"]')) return;

    	// Don't follow the link
    	event.preventDefault();

    	// Toggle the body class
      document.body.classList.toggle('navbar--opened');

    }, false);

  }

}
