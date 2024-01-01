//your JS code here. If required.
// Create student object
const student = {
  name: 'John Doe'
};

// Adding getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage:
console.log(student.getKeys()); // Output: ['name']
