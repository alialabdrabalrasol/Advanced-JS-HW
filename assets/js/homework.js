let characters = [
  {
    name: "person1",
    height: 170,
    gender: "male",
    mass: 65,
    eye_color: "hazel",
  },
  {
    name: "person2",
    height: 172,
    gender: "male",
    mass: 60,
    eye_color: "black",
  },
  {
    name: "person3",
    height: 200,
    gender: "male",
    mass: 90,
    eye_color: "hazel",
  },
  {
    name: "person4",
    height: 160,
    gender: "female",
    mass: 45,
    eye_color: "hazel",
  },
  {
    name: "person5",
    height: 165,
    gender: "female",
    mass: 45,
    eye_color: "blue",
  },
  {
    name: "person6",
    height: 175,
    gender: "male",
    mass: 70,
    eye_color: "brown",
  },
];
///////////////MAP///////////////////
console.log("///////////////MAP///////////////////");
let name_height_arr = characters.map((e) => {
  return { name: e.name, height: e.height };
});
console.log("Map by name and height :");
console.log(name_height_arr);

let name_arr = characters.map((e) => {
  return { name: e.name };
});
console.log("Map by name:");

console.log(name_arr);
////////////////REDUCE/////////////////

console.log("///////////////REDUCE///////////////////");
let total_mass = characters.reduce((total, e) => {
  return total + e.mass;
}, 0);
console.log("total mass is:");
console.log(total_mass);
////////////////FILTER/////////////////
console.log("////////////////FILTER/////////////////");
let filtered_by_mass = characters.filter((e) => e.mass > 100);
console.log("filter by mass > 100");
console.log(filtered_by_mass);
let filtered_by_gender = characters.filter((e) => e.gender === "female");
console.log("filter by gender = female");
console.log(filtered_by_gender);
////////////////SORT/////////////////
console.log("////////////////SORT/////////////////");
let sort_by_name = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log("sort by name:");
console.log(sort_by_name);

let sort_by_gender = characters.sort((a) => {
  if (a.gender == "male") {
    return -1;
  }
  if (a.gender == "female") {
    return 1;
  }
});
console.log("sort by gender:");
console.log(sort_by_gender);
////////////////EVERY/////////////////
console.log("////////////////EVERY/////////////////");
console.log("does everyone have blue eyes ?");
console.log(characters.every((e) => e.eye_color === "blue"));
console.log("is everyone a male ?");
console.log(characters.every((e) => e.gender == "male"));
////////////////Some/////////////////
console.log("////////////////SOME/////////////////");
console.log("is there a male in character ?");
console.log(characters.some((e) => e.gender === "male"));
console.log("is there at least one character whose mass is less than 50");
console.log(characters.some((e) => e.mass < 50));

//getUser();
// https://www.breakingbadapi.com/api/
