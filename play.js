const aGreatNumber = 10;
const aGreatObject = { withGreatKeys: true };

aGreatObject.withGreatKeys = false;
if (true) {
    //let aGreatNumber = 42;
}

setTimeout(() => {
    console.log(aGreatNumber);
    console.log(aGreatObject);
}, 1000);

console.log('waiting...');