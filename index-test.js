test("current typing is blank on start", () => {
  const actual = document.querySelector("#previous-text").innerHTML;
  const expected = "";
  equal(actual, expected);
});

test("saved text is blank on start", () => {
  const actual = document.querySelector("#current-typing").innerHTML;
  const expected = "";
  equal(actual, expected);
});

test("+ returns correct result (single digits)", () => {
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[12].click();
  const actual = document.querySelector("#current-typing").innerHTML;
  const expected = "4";
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

test("+ returns correct result (double digits)", () => {
  document.querySelectorAll("button")[1].click();
  document.querySelectorAll("button")[1].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[12].click();
  const actual = document.querySelector("#current-typing").innerHTML;
  const expected = "55";
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

test("X returns correct result (single digits)", () => {
  document.querySelectorAll("button")[1].click();
  document.querySelectorAll("button")[11].click();
  document.querySelectorAll("button")[6].click();
  document.querySelectorAll("button")[12].click();
  const actual = document.querySelector("#current-typing").innerHTML;
  const expected = "12";
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

test("X returns correct result (double digits)", () => {
  document.querySelectorAll("button")[1].click();
  document.querySelectorAll("button")[1].click();
  document.querySelectorAll("button")[11].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[12].click();
  const actual = document.querySelector("#current-typing").innerHTML;
  const expected = "726";
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

test("- returns expected result (single digits)", () => {
  document.querySelectorAll("button")[6].click();
  document.querySelectorAll("button")[7].click();
  document.querySelectorAll("button")[1].click();
  document.querySelectorAll("button")[12].click();
  const actual = document.querySelector("#current-typing").innerHTML;
  const expected = "4";
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

test("- returns correct result (double digits)", () => {
  document.querySelectorAll("button")[6].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[7].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[1].click();
  document.querySelectorAll("button")[12].click();
  const actual = document.querySelector("#current-typing").innerHTML;
  const expected = "31";
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

test("C clears all text (simple sum)", () => {
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[12].click();
  document.querySelectorAll("button")[14].click();
  const actual = [
    document.querySelector("#current-typing").innerHTML,
    document.querySelector("#previous-text").innerHTML,
  ];
  const expected = ["", " "];
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
});

test("C clears all text (chained sum)", () => {
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[12].click();
  document.querySelectorAll("button")[14].click();
  const actual = [
    document.querySelector("#current-typing").innerHTML,
    document.querySelector("#previous-text").innerHTML,
  ];
  const expected = ["", " "];
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
});

test("chained + sum returns correct result", () => {
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[12].click();
  const expected = "48";
  const actual = document.querySelector("#current-typing").innerHTML;
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

test("chained * sum returns correct result", () => {
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[11].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[11].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[12].click();
  const expected = "132";
  const actual = document.querySelector("#current-typing").innerHTML;
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

test("chained sum with mixed operator (- then %) returns correct result", () => {
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[13].click();
  document.querySelectorAll("button")[13].click();
  document.querySelectorAll("button")[7].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[15].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[12].click();
  const expected = "24";
  const actual = document.querySelector("#current-typing").innerHTML;
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

// test("If user changes mind of operator the last selected is used", () => {
//   document.querySelectorAll("button")[0].click();
//   document.querySelectorAll("button")[7].click();
//   document.querySelectorAll("button")[11].click();
//   document.querySelectorAll("button")[3].click();
//   document.querySelectorAll("button")[2].click();
//   document.querySelectorAll("button")[12].click();
//   const actual = document.querySelector("#current-typing").innerHTML;
//   const expected = "4";
//   equal(actual, expected);
//   document.querySelectorAll("button")[14].click();
// }); THIS NEEDS FIXING IN THE APP!

test("If user changes mind of operator the last selected is used (chained sum)", () => {
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[2].click();
  document.querySelectorAll("button")[7].click();
  document.querySelectorAll("button")[11].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[4].click();
  document.querySelectorAll("button")[12].click();
  const actual = document.querySelector("#current-typing").innerHTML;
  const expected = "48";
  equal(actual, expected);
  document.querySelectorAll("button")[14].click();
});

//-------TO DO: Tests for saved text
