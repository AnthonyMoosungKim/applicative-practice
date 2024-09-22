/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const yearCount = {};

  data.asteroids.forEach(asteroid => { 
    yearCount[asteroid.discoveryYear] = (yearCount[asteroid.discoveryYear] || 0) + 1;
  });

  let maxCount = 0;
  let mostDiscoveriesYear = null;

  for (const year in yearCount) {
    if (yearCount[year] > maxCount || yearCount[year] === maxCount) {
      maxCount = yearCount[year];
      mostDiscoveriesYear = year;
    }
  }

  return Number(mostDiscoveriesYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
