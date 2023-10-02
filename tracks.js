document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".track-card-button");

    buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default anchor behavior

            const card = button.closest(".track-card");
            const details = card.querySelector(".track-card-details");

            if (window.getComputedStyle(details).getPropertyValue("height") === "0px") {
                // If details are hidden, show them by setting height to auto
                details.style.height = "auto";

                // Calculate the new height after it's set to auto
                const newHeight = window.getComputedStyle(details).getPropertyValue("height");

                // Set the height to zero again and then use a timeout to smoothly slide up
                details.style.height = "0px";
                setTimeout(() => {
                    details.style.height = newHeight;
                }, 10); // Use a small delay for smoother transition
            } else {
                // If details are shown (height is not "0px"), hide them by setting height to zero
                details.style.height = "0px";
            }
        });
    });
});


