const dropArea = document.querySelector('.drop_area');
const input = document.querySelector('.input_file');
const image = document.querySelector('.img_view');



input.addEventListener('change',uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(input.files[0])
    image.style.backgroundImage = `url(${imgLink})`
    image.style.backgroundSize = "cover"
    image.style.backgroundPosition = "center"
    image.textContent = ""
    dropArea.style.border = 0
}
