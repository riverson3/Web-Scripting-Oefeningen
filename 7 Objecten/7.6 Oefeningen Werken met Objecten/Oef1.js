let auto={
    merk: 'Porsche',
    model: 'panamera',
    bouwjaar: 2020,
    kilometerstand: 15000
};

function updateKilometerstand(obj, extra){
    obj.kilometerstand =+ extra;
}

function toonautoinfo(obj){
    console.log(obj.merk)
    console.log(obj.model)
    console.log(obj.bouwjaar)
    console.log(obj.kilometerstand)
}

toonautoinfo(auto);
updateKilometerstand(auto, 500);