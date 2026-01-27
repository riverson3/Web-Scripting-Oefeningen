function haalSubzin(tekst, woord){
    let zinnen = tekst.split(". ");
    let result = zinnen.find(zin => {
        return zin.indexOf(woord) == 0;
    });
    return result;
}