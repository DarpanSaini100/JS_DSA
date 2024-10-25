let data = [30, 97, 87, 56, 34, 22, 4];
let find = 22;
let found = false;

for (let i = 0; i < data.length; i++) {
    if (data[i] === find) {
        console.log(i);
        found = true; // Item is found
        break; // Exit the loop
    }
}

// After the loop, use if-else to check if found
if (!found) {
    console.log("item not found");
}
