# Jest Workshop Submission

## Student Details
- Name: Ved Vadnere
- Roll Number: 2024-B-09072005A
- GitHub Username: https://github.com/Archis009

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: No coupon bulk discount test
**What it protects against:**  
Ensures the 5% bulk discount for orders ≥1000 is not accidentally removed or altered.
---

### 2. Test Name: SAVE10 coupon test
**What it protects against:**  
Prevents regression where SAVE10 exceeds its 100-unit discount cap.
---

### 3. Test Name: FLAT50 boundary case test
**What it protects against:**  
Ensures final amount never becomes negative after flat discounts.
---

### 4. Test Name: Invalid subtotal test
**What it protects against:**  
Guards against accepting negative or invalid numeric values.
---

### 5. Test Name: Case-insensitive coupon test
**What it protects against:**  
Ensures coupons work regardless of user input casing.
---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL:
https://github.com/Archis009/jest-workshop/actions
---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

