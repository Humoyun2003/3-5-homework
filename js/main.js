alert('Assalomu aleykum, saytimizga xush kelibsiz');
alert('Ogohlantirib o\'tamiz: \nBizning saytimizda reklamalar mavjud.');
var firstName = prompt('Ismingiz?');
console.log('Ismingiz: ' + firstName);
var surName = prompt('Familyangiz?');
console.log('Familyangiz: ' + surName);
var age = prompt('Yoshingiz?', 18);
console.log('Yoshingiz: ' + age);
var garden = prompt('Jinsingiz:');
console.log('Jinsingiz: ' + garden);
var isStudent = prompt('Studentmisiz?', 'yo\'q');
if(isStudent != 'yo\'q') {
    var placeOfStudy = prompt('O\'qishingiz qayerda');
    console.log(placeOfStudy + ' da o\'qiysiz');
}
else 
    console.log('Student emassiz');
var isMarried = prompt('oilalimisiz?', 'yo\'q');
if (isMarried != 'yo\'q') {
    var children = prompt('Farzandlaringiz bormi?', 'yo\q');
    if(children != 'yo\q') {
        var childrensNumber = prompt('Farzandlaringiz nechta?');
        console.log('Oilalisz va ' + childrensNumber + ' ta farzandiz bor');
    }
    else   
        console.log('Oilalisz ammo hozircha farzandlaringiz yo\'q');
}
else 
    console.log('Oilali emassiz');