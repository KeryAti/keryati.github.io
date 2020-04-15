let currentPhoto = 0; // Current Photo Display

let imagesData = [
    {
        photo: "imgs/photo-1.jpg",
        title: "Széchenyi lánchíd",
        description: "A híd hivatalos átadására 1849. november 20-án került sor, a szabadságharc leverése utáni terror és megfélemlítés légkörében."
    },
    {
        photo: "imgs/photo-2.jpg",
        title: "Hősök tere",
        description: "A teret 1932-ben nevezték el „Hősök terének”. Ekkor még virágágyások díszítették. 1937-ben kövezték le a 34. Eucharisztikus világkongresszus (1938) miatt.A második világháború alatt az emlékmű is bombatalálatot kapott, II. Lipót szobra teljesen megsemmisült, Mária Terézia szobra deréktól lefele megrongálódott, Ferenc József szobra kiesett a helyéről és a feje behorpadt."
    },
    {
        photo: "imgs/photo-3.jpg",
        title: "Budai Várnegyed",
        description: "A kicsi vár (így nevezték) vagy röviden Várnegyed mellett a másik gyakori elnevezés egyszerűen Budai vár vagy – hivatalos névként – Vár. E két utóbbit azonban nem árt egyértelműsíteni, hiszen szűkebb értelemben olykor csak a Budai Várnegyed déli felét alkotó Budavári Palotát értik rajta. Ugyanúgy, ahogy a Budai Várnegyed kifejezés alatt is olykor csak az északi részt, a történelmi lakónegyedet értik."
    }

];

let maxPhoto = imagesData.length - 1;



// Thumbnail loading
let loadThumbnail = imagesData.forEach((photo, index) => {
    $("#thumbnail").append(`<div class="thumbnail-item" id="image-${index}"><div class="thumbnail-tooltip">${photo.title}</div><img src="${photo.photo}" data-number="${index}"></div>`);
});

let selectedPhoto = (i) => {
    let selectedPhoto = $(i.target).attr("data-number");
    loadPhoto(selectedPhoto);
};

$("#thumbnail img").click(selectedPhoto);

// Photo loading function
let loadPhoto = (photoNumber) => {
    $("#photo").fadeOut(200, function(){
        $("#photo").attr("src", imagesData[photoNumber].photo);
    }).fadeIn(200);
    $("#photo-title").html(imagesData[photoNumber].title);
    $("#photo-description").html(imagesData[photoNumber].description);
    if(photoNumber !== currentPhoto) {
        $(`#image-${currentPhoto}`).removeClass("active");
    }
    $(`#image-${photoNumber}`).addClass("active");
    currentPhoto = photoNumber;
};

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
    if(currentPhoto < maxPhoto) {
        let nextPhoto = parseInt(currentPhoto);
        nextPhoto++;
        loadPhoto(nextPhoto);
    }
})
$('#left-arrow').click(() => {
    if(currentPhoto > 0) {
        let nextPhoto = parseInt(currentPhoto);
        nextPhoto--;
        loadPhoto(nextPhoto);
    }
})

