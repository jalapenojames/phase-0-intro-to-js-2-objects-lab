// Write your solution in this file!
let employee = {
    name: 'person1',
    streetAddress: 'address'
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return Object.assign({}, employeeObj, {[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return Object.assign(employeeObj, {[key]: value});
}

function deleteFromEmployeeByKey(employeeObj, key) {
    let newObj = Object.assign({},employeeObj);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
   delete employeeObj[key];
   return employeeObj;
}