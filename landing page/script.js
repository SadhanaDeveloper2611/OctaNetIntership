document.addEventListener("DOMContentLoaded", function() {
    const menuRight = document.querySelector(".menu-right");

    // Function to populate menu cards based on switch state
    function populateMenuCards(state) {
        // Clear existing menu cards
        menuRight.innerHTML = "";

        // Define data for menu cards based on switch state
        let data;
        switch (state) {
            case "Y":
                data = [
                    { imgSrc: "images/menu/cake2.avif", title: "Chocolate Cake", description: "A classic with rich cocoa flavor, velvety texture, and creamy cheese frosting.", price: "$10.99", stars: "★★★★★" },
                    { imgSrc: "images/menu/cake2.jpeg", title: "Vanilla Cake", description: "Delicious vanilla sponge with a hint of almond and creamy vanilla frosting.", price: "$12.99", stars: "★★★★☆" },
                    { imgSrc: "images/menu/cake3.jpeg", title: "Red Velvet Cake", description: "Moist and fluffy cake with a hint of cocoa, topped with smooth cream cheese frosting.", price: "$11.99", stars: "★★★★★" }
                ];
                break;
            case "I":
                data = [
                    { imgSrc: "images/menu/cake4.jpeg", title: "Strawberry Shortcake", description: "Fresh strawberries layered with light and fluffy sponge cake, topped with whipped cream.", price: "$9.99", stars: "★★★★☆" },
                    { imgSrc: "images/menu/cake5.jpeg", title: "Carrot Cake", description: "Spiced carrot cake with walnuts, topped with cream cheese frosting and a sprinkle.", price: "$11.49", stars: "★★★★★" },
                    { imgSrc: "images/menu/cake6.jpeg", title: "Lemon Pound Cake", description: "Zesty lemon cake with a dense yet moist texture, finished with a lemon glaze.", price: "$10.79", stars: "★★★☆☆" }
                ];
                break;
            case "N":
                data = [
                    { imgSrc: "images/menu/cake7.webp", title: "Tiramisu", description: "Italian classic made with layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.", price: "$13.49", stars: "★★★★★" },
                    { imgSrc: "images/menu/cake8.jpeg", title: "Cheesecake", description: "Creamy cheesecake on a graham cracker crust, topped with your choice of fruit topping and sprinkles", price: "$12.99", stars: "★★★★☆" },
                    { imgSrc: "images/menu/cake9.jpeg", title: "Black Forest Cake", description: "Decadent chocolate cake layers with cherries and whipped cream, topped with chocolate shavings.", price: "$14.99", stars: "★★★★★" }
                ];
                break;
            default:
                return;
        }

        // Create HTML for each menu card and append to menuRight
        data.forEach((item, index) => {
            const menuCard = document.createElement("div");
            menuCard.classList.add("menu-card");
            menuCard.innerHTML = `
                <div class="menu-img">
                    <img src="${item.imgSrc}" alt="${item.title}">
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="price-stars">
                    <span class="price">${item.price}</span>
                    <span class="stars">${item.stars}</span>
                </div>
            `;
            menuRight.appendChild(menuCard);
        });
    }

    // Initial call to populate menu cards with default state
    populateMenuCards("I"); // Default to Inherit

    // Event listener for switch change
    const switchInputs = document.querySelectorAll('.switch-input');
    switchInputs.forEach(input => {
        input.addEventListener('change', function() {
            populateMenuCards(this.value);
        });
    });
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("scrollTopBtn").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
