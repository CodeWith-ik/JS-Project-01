let index1 = 0;
let index2 = 0;


function toggle1(){

    let color1 = ["black"];

    document.getElementsByTagName("body")[0].style.background = color1[index1++];

    if (index1 > color1.length - 1) {
        index1 = 0;
    }
}

function toggle2(){

    let color2 = ["white"];

    document.getElementsByTagName("body")[0].style.background = color2[index2++];

    if (index2 > color2.length - 1) {
        index2 = 0;
    }
}