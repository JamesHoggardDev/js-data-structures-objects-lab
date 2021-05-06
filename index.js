// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    let new_driv = Object.assign({}, driver, { [key]: value })
    return new_driv;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let new_driv = Object.assign({}, driver)
    delete new_driv[key];
    return new_driv;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    let new_driv = Object.assign(driver, key)
    delete new_driv[key];
    return new_driv;
}