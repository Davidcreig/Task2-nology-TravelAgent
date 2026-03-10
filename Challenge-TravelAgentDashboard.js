// The starting data
const holidayDestinations = [
  { locationName: "Maldives", vacationType: "beach", budget: 1200 },
  { locationName: "Tokyo", vacationType: "city", budget: 800 },
  { locationName: "Swiss Alps", vacationType: "nature", budget: 1500 },
  { locationName: "Bali", vacationType: "beach", budget: 900 },
  { locationName: "New York", vacationType: "city", budget: 1100 }
];

// Step 1 & 2: Write your formatDestination function here
const formatDestination = (Destination) => {
if (Destination.vacationType === "beach") {
    return `[Beach Getaway] ${Destination.locationName} (£${Destination.budget})`;
}
else if (Destination.vacationType === "city") {
    return `[City Break] ${Destination.locationName} (£${Destination.budget})`;
}
else if (Destination.vacationType === "nature") {
    return `[Nature Retreat] ${Destination.locationName} (£${Destination.budget})`;
}
//in the case there's no holiday type or doesn't match any of the above
else {    
    return `[Holiday] ${Destination.locationName} (£${Destination.budget})`;
}
};
// Step 3: Use .map() to create your formattedBrochure array here
const formattedBrochure = holidayDestinations.map(formatDestination);

// Step 4: console.log your formattedBrochure array

console.log(formattedBrochure);

