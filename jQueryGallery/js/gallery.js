let currentPhoto = 0; // Current Photo Display


let imagesData = [
    {
        photo: "imgs/photo-1.jpg",
        title: "Photo Title 1",
        description: "Photo-1 description "

    },
    {
        photo: "imgs/photo-2.jpg",
        title: "Photo Title 2",
        description: "Photo-2 description"
    },
    {
        photo: "imgs/photo-3.jpg",
        title: "Photo Title 3",
        description: "Photo-3 description"
    }
];

let maxPhoto = imagesData.length - 1;

$('#right-arrow').click(() => {
    if(currentPhoto < maxPhoto) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    }
})
$('#left-arrow').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    }
})

// Photo loading function
let loadPhoto = (photoNumber) => {
    $("#photo").attr("src", imagesData[photoNumber].photo);
    $("#photo-title").html(imagesData[photoNumber].title);
    $("#photo-description").html(imagesData[photoNumber].description);
    currentPhoto = photoNumber;
};

loadPhoto(currentPhoto);

// Thumbnail loading
let loadThumbnail = imagesData.forEach((photo, index) => {
    $("#thumbnail").append(`<img src="${photo.photo}" data-number="${index}">`);
});

let selectedPhoto = (i) => {
    let selectedPhoto = $(i.target).attr("data-number");
    loadPhoto(selectedPhoto);
};

$("#thumbnail img").click(selectedPhoto);