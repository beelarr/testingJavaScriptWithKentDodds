const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

function sumTest() {
  let result = sum(3, 7);
  let expected = 10;
  expect(result).toBe(expected);
}

test("sum adds numbers", sumTest);

// if (result !== expected )throw new Error(`${result} is not equal to ${expected}`)

function subtractTest() {
  result = subtract(7, 3);
  expected = 4;

  expect(result).toBeGreaterThan(expected);
}

test("subtract subtracts numbers", subtractTest);

// if (result !== expected )throw new Error(`${result} is not equal to ${expected}`)

function test(title, callback) {
  try {
    callback();
    console.log(`√ ${title}`);
  } catch (e) {
    console.log(`x ${title}`);
    console.log(e);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error(`${actual} is not equal to ${expected}`);
    },
    toEqual(expected) {
      if (actual === expected) {
        // pass
      } else {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not greater than ${expected}`);
      }
    }
  };
}
