let count = 0;
const images = ['./Images/Logo (2).png']
const preciousImage = () => {
    let image = document.getElementById("image");
    count--;
    if (count < 0) {
        count = images.length - 1;
        image.setAttribute("src", images[count]);
    } else {
        image.setAttribute("src", images[count]);
    }
}
const nextImage = () => {
    let image = document.getElementById("image");
    count++;
    if (count >= images.length) {
        count = 0;
        image.setAttribute("src", images[count]);
    } else {
        image.setAttribute("src", images[count]);
    }
}

document.getElementById("sidebarCross").addEventListener("click", () => {
    let sidebar = document.getElementById("sidebarDisplay")
    sidebar.classList.toggle("none")
})

document.getElementById("bar").addEventListener("click", () => {
    let sidebar = document.getElementById("sidebarDisplay")
    sidebar.classList.toggle("none")
})

