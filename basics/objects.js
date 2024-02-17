// Representing the Mirzapur hero "Kaleen Bhaiya" using JavaScript objects

// Object literal syntax to initialize properties
const kaleenBhaiya = {
  name: "Akhanda Tripathi",
  alias: "Kaleen Bhaiya",
  age: 50,
  business: "Guns and Drugs",
  territory: "Mirzapur",
};
// Adding dynamic properties
kaleenBhaiya.legacy = "Establishing the empire";
kaleenBhaiya["enemies"] = ["Guddu Pandit", "Bablu Pandit"];
console.log(kaleenBhaiya);

// Displaying the initial character traits
console.log("Initial Traits of Kaleen Bhaiya:");
console.log(kaleenBhaiya);

// Using symbols for unique keys
const secretKey = Symbol("Private Information");
kaleenBhaiya[secretKey] = "Top-secret details";

// Adding an accessor property with drama
Object.defineProperty(kaleenBhaiya, "intimidatingDialogue", {
  get: function () {
    return "Baap Hamesha Bigadta Hai";
  },
  set: function (newDialogue) {
    console.log(`Updating intimidating dialogue to: "${newDialogue}"`);
  },
});

// Displaying updated character traits
console.log("\nUpdated Traits of Kaleen Bhaiya:");
console.log(kaleenBhaiya);

// Reading details about an accessor property
const dialogueDescriptor = Object.getOwnPropertyDescriptor(
  kaleenBhaiya,
  "intimidatingDialogue"
);
console.log("\nDetails of Intimidating Dialogue:");
console.log(dialogueDescriptor);

// Updating the intimidating dialogue
kaleenBhaiya.intimidatingDialogue = "Mirzapur ka King Kaun?";
