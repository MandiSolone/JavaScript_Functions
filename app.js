console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1 Print Odds:\n==========\n");

function printOdds(count) {
  if (count == 0) {
    count = 1;
  }

  if (count < 0) {
    count *= -1;
  }

  for (let i = 1; i <= count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can dirve!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age >= 16) {
    console.log(aboveSixteen);
  } else if (age < 16) {
    console.log(belowSixteen);
  }
}

checkAge("Mandi", 30);
checkAge("Ben", 10);
checkAge("Ashley", 17);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
  if ((x == 0) & (y == 0)) {
    console.log(`point lies at the origin`);
  } else if (x == 0) {
    console.log(`point lies on the X-axis.`);
  } else if (y == 0) {
    console.log(`point lies on the Y-axis`);
  } else if (x > 0 && y > 0) {
    console.log(`point is in Quadrant 1`);
  } else if (x > 0 && y < 0) {
    console.log(`point is in Quadrant 4`);
  } else if (x < 0 && y < 0) {
    console.log(`point is in Quadrant 3`);
  } else if (x < 0 && y > 0) {
    console.log(`point is in Quadrant 2`);
  } else {
    console.log("input error");
  }
}

whichQuadrant(5, 5);
whichQuadrant(5, -5);
whichQuadrant(-5, -5);
whichQuadrant(-5, 5);
whichQuadrant(0, 0);
whichQuadrant(0, 5);
whichQuadrant(5, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function typeOfTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  
  if (isValid) {
    if (a == b && b == c) {
      return "Equilateral Triangle";
    } else if (a == b || b == c || a == c) {
      return "Isosceles Triangle";
    } else {
      return "Scalene Triangle";
    }
  } else {
    return "Not a valid Triangle.";
  }
}

console.log(typeOfTriangle(2, 3, 4)); //scalene
console.log(typeOfTriangle(2, 2, 2)); //eq
console.log(typeOfTriangle(1, 2, 2)); //isosceles
console.log(typeOfTriangle(1, 1, 2)); //invalid

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function planMessage(planLimit, currentDay, actualUsage) {

  let daysRemaining = (30 - currentDay);

  let planDailyLimit = Math.round ((planLimit / 30) * 100)/100;

  let aveDailyUse = Math.round ((actualUsage / currentDay) * 100)/100;

  let dailyUseOverage = Math.round ((planDailyLimit - aveDailyUse) * -100)/100;

  let predictedOverage = (dailyUseOverage * daysRemaining);

  let recDailyRemainingLimit = Math.round ((planLimit - actualUsage)/ daysRemaining * 100)/100;

  if (aveDailyUse > planDailyLimit) {
    return `${currentDay} days used, ${daysRemaining} days remaining. 
    Plan daily limit : ${planDailyLimit} GB/day.
    Your Average daily use : ${aveDailyUse} GB/day. 
    You are EXCEEDING your average daily use by (${dailyUseOverage} GB/day), continuing this high usage & you'll exceed your data plan by ${predictedOverage} GB. To stay below your data plan limit, use no more than ${recDailyRemainingLimit} GB/day for the remaining time. 
    `;
  } else if (aveDailyUse < planDailyLimit) {
    return `${currentDay} days used, ${daysRemaining} days remaining. 
    Plan daily limit : ${planDailyLimit} GB/day.
    Your Average daily use : ${aveDailyUse} GB/day. 
    You are BELOW your average daily use by (${dailyUseOverage} GB/day). Your new daily usage available is ${recDailyRemainingLimit} GB/day for the remaining time.`;
  } else {
    return `${currentDay} days used, ${daysRemaining} days remaining. 
    Average daily use : ${aveDailyUse}  GB/day. 
    You are AT your average daily use.`;
  }
}

console.log(planMessage(100, 15, 56)); //over
console.log(planMessage(100, 25, 40)); //under
console.log(planMessage(100, 15, 49.99)); //at 
