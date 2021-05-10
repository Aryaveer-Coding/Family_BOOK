var names_array = [
"Aryaveer Matta",
"Neetu Wahi Matta",
"Pankaj Matta",
"Suraj Prakash Matta",
];

var images = [
"https://scontent.fdel1-4.fna.fbcdn.net/v/l/t1.6435-9/130292610_10158606466724435_2483630634090502546_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=kn23-hSXVs0AX8crLO5&_nc_ht=scontent.fdel1-4.fna&oh=5d363d943da0aa693803812ed3ce6e78&oe=60BD28A2",
"https://scontent.fdel1-2.fna.fbcdn.net/v/t1.6435-9/48144668_10156688935204435_3800217501934026752_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Cn-P1xVkS-oAX9vfWq5&_nc_ht=scontent.fdel1-2.fna&oh=3c139c07cbe30c259ad8083b8e0117c2&oe=60BD676E",
"Father.png.jpg",
"Grandfather.jpg",
];

var i=0;

function nextslide() {

if (i==4)
{
  i=0;
}

document.getElementById("names_array").innerHTML = Names[i];
document.getElementById("album").src = images[i];
i++;
}