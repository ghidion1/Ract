const displayCity = (cities, element) => {
    cities.map(city => {
        element.innerHTML += `<div>${city}</div>`;
    });
}
const displayCity1 = (cities, element) => {
    cities.map(city => {
        element.innerHTML += `<div>${city}</div>`;
    });
}
const displayCity2 = (cities, element) => {
    cities.map(city => {
        element.innerHTML += `<div>${city}</div>`;
    });
}
export default {
    displayCity,
    displayCity1,
    displayCity2
}