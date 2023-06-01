function getRandomNumbers(min, max) {
  // Create an array to store the random numbers.
  const numbers = [];

  // Loop through the range of numbers from min to max.
  for (let i = min; i <= max; i++) {
    // Generate a random number between min and max.
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Check if the random number is already in the array.
    if (!numbers.includes(randomNumber)) {
      // If the random number is not already in the array, add it to the array.
      numbers.push(randomNumber);
    }
  }

  // Return the array of random numbers.
  return numbers;
}

// Get an array of 5 random numbers between 1 and 25.
const randomNumbers = getRandomNumbers(1, 25);

// Print the array of random numbers.
console.log(randomNumbers);
