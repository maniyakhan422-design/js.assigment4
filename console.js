let value = 0;
document.getElementById("counting").innerText = value;

function increment() {
    value++;
    document.getElementById("counting").innerText = value;
}

function decrement() {
    value--;
    document.getElementById("counting").innerText = value;
}



let images = [
    "https://picsum.photos/id/237/600/400",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGu6CR7Wrm6PXCBl4xVGvZzTGmKHzb91tPxKiQwSFzaQ&s=10",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssfHo65TOLrcbLRhN02aAjMuENk0iUrsZEK94rYSIuA&s=10"
];
    let index = 0;

let myImage = document.getElementById("myimage");
let btnchange = document.getElementById("btnchange");

function changeImage() {
    myImage.src = images[index];
}
changeImage();

btnchange.addEventListener("click", function() {

    index++;

    if (index >= images.length) {
        index = 0;
    }

    changeImage();

});

