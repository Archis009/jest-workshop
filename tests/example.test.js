const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("no coupon applies only bulk discount (>=1000)", () => {
    expect(calculateFinalAmount(1000)).toBe(950);
});

test("SAVE10 coupon gives 10% discount capped at 100", () => {
    expect(calculateFinalAmount(2000, "SAVE10")).toBe(1800);
});

test("FLAT50 boundary case does not go below zero", () => {
    expect(calculateFinalAmount(30, "FLAT50")).toBe(0);
});

test("invalid subtotal throws error", () => {
    expect(() => calculateFinalAmount(-100, "SAVE10")).toThrow(
      "Invalid subtotal"
    );
});

test("coupon is case-insensitive", () => {
    expect(calculateFinalAmount(500, "save10")).toBe(450);
});