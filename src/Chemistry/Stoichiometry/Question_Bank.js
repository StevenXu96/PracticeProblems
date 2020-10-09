const num_of_q = 2

export const makeQuestion = (index) => {
    if (index%num_of_q === 0){
        let mass = (getRandomInt(5000, 20000))/100;
        let product = (getRandomInt(0, 1) === 0? "Cl2" : "KOH")
        let ans = ((mass / (product === "KOH"? 56.1 * 6 : 35.45 * 3)) / 122.6).toFixed(4)
        let mole_product = (mass / (product === "KOH"? 56.1 : 35.45 )).toFixed(3)
        let q = `For the following balanced equation: KClO3 + 5 KCl + 3 H2O -> 3 Cl2 + 6 KOH, if there is ${mass}g of ${product} formed 
            in this chemical reaction, how much KClO3 (in grams) was consumed assuming 100% production rate?`;
        let steps = `Mole of ${product} = ${mass} * (1 mol / ${product === "KOH"? 56.1 : 35.45 }g) = ${mole_product}mol \n 
            Mass of KClO3 comsumed = ${mole_product}mol ${product} * (1 mol KClO3 / ${product === "KOH"? "6 mol KOH" : "3 mol Cl2"}) * (1 mol / 122.6g) = ${ans}g`
        return [q, ans, "", steps]
    }
    else{
        const hcl_mass = (getRandomInt(200, 500))/100;
        const na2co3_mass = (getRandomInt(200, 500))/100;
        let mole_h = (hcl_mass / 36.5 / 2)
        let mole_n = (na2co3_mass / 106)
        let ans
        let excess
        if (mole_h > mole_n){
            excess = "HCl"
            ans = (((mole_h - mole_n) * 36.5 * 2).toFixed(3)).toString()
        }
        else{
            excess = "Na2CO3"
            ans = (((mole_n - mole_h) * 106).toFixed(3)).toString()
        }
        const q = `For the following equation: 2 HCl + Na2CO3 -> 2 NaCl + CO2 + H2O, if ${hcl_mass}g of HCl is reacted 
            with ${na2co3_mass}g of Na2CO3, which reactant will be in excess and how much will be left unreacted?`
        let steps = `Mole of HCl: ${hcl_mass}g * (1 mol / 36.5g) = ${(mole_h*2).toFixed(4)}mol \n 
            Mole of Na2CO3: ${na2co3_mass}g * (1 mol / 106g) = ${mole_n.toFixed(4)}mol \n 
            The mole ratio between HCl and Na2CO3 is 2:1, therefore, with each mole of Na2CO3 consumed, there will be 2 mole of HCl consumed. \n 
            Therefore when we compare, we divide the mole of HCl by 2:
            ${(mole_h*2).toFixed(4)} / 2 = ${mole_h.toFixed(4)} \n 
            comparing HCl (${mole_h.toFixed(4)} mol) with Na2CO3 (${mole_n.toFixed(4)} mol), we can see that ${excess} will be in excess \n 
            Mass of ${excess} = ${excess === "HCl"? `(${mole_h.toFixed(4)} mol - ${mole_n.toFixed(4)} mol) * 2 * 36.5 g/mol` : `(${mole_n.toFixed(4)} mol - ${mole_h.toFixed(4)} mol) * 106 g/mol`} = ${ans}g`
        return [q, ans, excess, steps]
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}