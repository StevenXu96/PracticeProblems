const num_of_q = 2

export const makeQuestion = (index) => {
    if (index%num_of_q === 0){
        let mass = (getRandomInt(5000, 20000))/100;
        let product = (getRandomInt(0, 1) === 0? "Cl2" : "KOH")
        let ans = ((mass / (product === "KOH"? 56.1 * 6 : 35.45 * 3)) / 122.6).toFixed(4)
        let q = `For the following balanced equation: KClO3 + 5 KCl + 3 H2O -> 3 Cl2 + 6 KOH, if there is ${mass}g of ${product} formed in this chemical reaction, how much KClO3 (in grams) was consumed assuming 100% production rate?`;
        return [q, ans]
    }
    else{
        const hcl_mass = (getRandomInt(200, 500))/100;
        const na2co3_mass = (getRandomInt(200, 500))/100;
        let mole_h = (hcl_mass / 36.5 / 2)
        let mole_n = (na2co3_mass / 106)
        let ans
        if (mole_h > mole_n){
            ans = "HCL, " + (((mole_h - mole_n) * 36.5).toFixed(3)).toString()
        }
        else{
            ans = "Na2CO3, " + (((mole_n - mole_h) * 106).toFixed(3)).toString()
        }
        const q = `For the following equation: 2 HCl + Na2CO3 -> 2 NaCl + CO2 + H2O, if ${hcl_mass}g of HCl is reacted with ${na2co3_mass}g of Na2CO3, which reactant will be in excess and how much will be left unreacted (if you think Na2CO3 is 3.5g in excess, answer: Na2CO3, 3.5)?`
        return [q, ans]
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}