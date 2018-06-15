let progress ;
const progress_xhr = new XMLHttpRequest();
progress_xhr.open("GET", "../data/cohorts/lim-2018-03-pre-core-pw/progress.json", true);
progress_xhr.onload = function (e) {
if (progress_xhr.readyState === 4) {
  if (progress_xhr.status >= 200 &&  progress_xhr.status < 400) {
    progress = JSON.parse(progress_xhr.responseText);
    console.log(progress);
  } else {
    console.error(progress_xhr.statusText);
  }
}
};
progress_xhr.onerror = function (e) {
console.error(progress_xhr.statusText);
};
progress_xhr.send();

let users ;
const users_xhr = new XMLHttpRequest();
users_xhr.open("GET", "../data/cohorts/lim-2018-03-pre-core-pw/users.json", true);
users_xhr.onload = function (e) {
if (users_xhr.readyState === 4) {
  if (users_xhr.status >= 200 &&  users_xhr.status < 400) {
    users= JSON.parse(users_xhr.responseText);
    console.log(users);
  } else {
    console.error(users_xhr.statusText);
  }
}
};
users_xhr.onerror = function (e) {
console.error(users_xhr.statusText);
};
users_xhr.send();



   
