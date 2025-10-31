// 1️⃣ [] == [] // false

// Arrays in JavaScript are reference types.

// Two different empty arrays are stored at different memory locations.

// Even if they look the same, they are not the same reference.
// ✅ Therefore: false

// 2️⃣ [] !== [] // true

// !== checks both value and reference.

// Since both arrays are different objects in memory:
// ✅ Result is true.

// 3️⃣ ![] == ![] // true

// [] is truthy → ![] becomes false

// So it becomes: false == false
// ✅ Result is true.

// 4️⃣ !true == [] // true

// !true → false

// So now: false == []

// In ==, JavaScript converts both sides to numbers:

// false → 0

// [] → "" → 0
// ✅ 0 == 0 → true

// 5️⃣ ![] == [] // true

// ![] → false

// So now: false == []

// Same coercion logic:

// false → 0

// [] → "" → 0
// ✅ Result: true