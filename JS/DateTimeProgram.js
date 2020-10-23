let dt = new Date();
console.log(dt);

const getDate = function (dt) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const day = dt.getDate();
    return day + " " + month + " " + year;
}

console.log(getDate(dt));