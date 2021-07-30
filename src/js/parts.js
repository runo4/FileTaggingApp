window.onload = () => {
    const minimizeButton = document.getElementById("button-minimize");
    const maximizeButton = document.getElementById("button-maximize");
    const closeButton = document.getElementById("button-close");

    minimizeButton.addEventListener("click", () => {
        window.myapi.minimize();
    });

    maximizeButton.addEventListener("click", () => {
        window.myapi.maximize();
    });

    closeButton.addEventListener("click", () => {
        window.myapi.close();
    });
};