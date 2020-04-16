let dataFile = "./js/data.json";
let currentPhoto = 0;
let maxPhoto;
let nextPhoto;

let readData = (imagesData) => {
    maxPhoto = imagesData.length - 1;

    let photoLoad = (photoNumber) => {
        $("#photo").fadeOut(200, function() {
            $("#photo").attr("src", imagesData[photoNumber].photo);
        }).fadeIn(200);
        $("#photo-title").html(imagesData[photoNumber].title);
        $("#photo-description").html(imagesData[photoNumber].description);
        $("#readMore").html(`<a href="${imagesData[photoNumber].source}" target="_blank" title="${imagesData[photoNumber].sourceTitle}">read more<img src="../materials/arrow.svg" width="15px" class="readMore-arrow"></a>`)

        if(photoNumber !== currentPhoto) {
            $(`#image-${currentPhoto}`).removeClass('active');
        }
        $(`#image-${photoNumber}`).addClass('active');

        currentPhoto = photoNumber;
    };

    let loadThumbnail = imagesData.forEach((photo, index) => {
        $("#thumbnail").append(`<div class="thumbnail-item" id="image-${index}"><div class="thumbnail-tooltip">${photo.title}</div><img src="${photo.photo}" data-number="${index}"></div>`);
    });

    let selectedPhoto = (i) => {
        let selectedPhoto = $(i.target).attr("data-number");
        photoLoad(selectedPhoto);
    };
    
    $("#thumbnail img").click(selectedPhoto);

    $("#right-arrow").click(() => {
        if(currentPhoto < maxPhoto) {
            nextPhoto = parseInt(currentPhoto);
            nextPhoto++;
            photoLoad(nextPhoto);
        }
    });

    $("#left-arrow").click(() => {
        if(currentPhoto > 0) {
            nextPhoto = parseInt(currentPhoto);
            nextPhoto--;
            photoLoad(nextPhoto);
        }
    });

    photoLoad(currentPhoto);
}


function getData() {
    fetch(dataFile)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            readData(data);
        });
}

getData();