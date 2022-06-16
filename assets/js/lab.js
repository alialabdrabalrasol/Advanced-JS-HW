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
];

let names_arr = characters.map((e) => e.name);
let heights_arr = characters.map((e) => e.height);
console.log(names_arr);
console.log(heights_arr);

const height_total = characters.reduce((total, e) => {
  return total + e.height;
}, 0);
console.log(height_total);

let filtered_by_height = characters.filter((e) => {
  return e.height < 200;
});
console.log("filter by height < 200");
console.log(filtered_by_height);
let filtered_by_gender = characters.filter((e) => {
  return e.gender === "male";
});
console.log("filter by gender = male");
console.log(filtered_by_gender);
let sorted_by_mass = characters.sort((p, c) => {
  return p.mass - c.mass;
});
console.log("sorted array by mass: ");
console.log(sorted_by_mass);

let sorted_by_height = characters.sort((p, c) => {
  return c.height - p.height;
});
console.log("sorted array by height: ");
console.log(sorted_by_height);

console.log(characters.every((e) => e.mass > 40));

console.log(characters.every((e) => e.height < 200));
console.log(characters.some((e) => e.eye_color == "blue"));
console.log(characters.some((e) => e.height > 210));
