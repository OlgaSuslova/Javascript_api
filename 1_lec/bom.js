// console.log(navigator.userAgent); //инфо о браузере
// console.log(navigator.cookieEnabled); //инфо о включении куки
// console.log(navigator.doNotTrack); //инфо о включении дополнительного трекинга, включена ли опция запрета на обслуживае
// console.log(navigator.geolocation); //инфо о геолокации

//функция принимает текущее местоположение и массив городов с их координатами. функция должна вернуть название ближайшее города к пользователю
function calculateDistance(location1, location2) {
  const [lat1, lon1] = location1;
  const [lat2, lon2] = location2;

  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // radius zemli v km

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLon / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance; // vozvrachaet rasstoyanie mezhdu mestopolozheniyami
}

function findFastestCity(cities) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      //проверяем поддержку геолокации
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLocation = [position.coords.latitude, position.coords.longitude]; //местоположение пользователя
          let closestCity = null; //название ближайшего города к пользователю
          let shortestDistance = Infinity; //дистанция от ближайшего города к пользователю

          cities.forEach(city => {
            const distance = calculateDistance(userLocation, city.location);

            if (distance < shortestDistance) {
              closestCity = city.name;
              shortestDistance = distance;
            }
          });

          resolve(closestCity);
        },
        error => {
          if (error.code === error.PERMISSION_DENIED) {
            reject(new Error("User denied the request for Geolocation."));
          } else {
            reject(
              new Error(`Ошибка при получении местоположения: ${error.message}`)
            );
          }
        }
      );
    } else {
        reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

const cities = [
  { name: "Москва", location: [55.751244, 37.618423] },
  { name: "Лондон", location: [51.5074, -0.1278] },
  { name: "Токио", location: [35.6895, 139.6917] },
  { name: "Нижний Новгород", location: [56.2965039, 43.9360589] }
]

findFastestCity(cities)
  .then((closestCity) => console.log(closestCity))
  .catch((error) => console.log(error.message));
