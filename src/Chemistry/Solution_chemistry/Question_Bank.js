const num_of_q = 3

export const makeQuestion = (index) => {
    if (index%num_of_q === 0){
        let chem = getRandomChem()
        let volume = getRandomInt(15, 50) * 10
        let initial_molar = getRandomInt(4, 8).toFixed(2)
        let final_molar = (getRandomInt(10, 30)/10).toFixed(2)
        let q = `What volume (ml) of water needs to be added to ${volume} mL of ${initial_molar} M ${chem.formula} in order to bring the concentration down to ${final_molar} M?`;
        return [q, ((initial_molar*volume/final_molar)-volume).toFixed(1)]
    }
    else if (index%num_of_q === 1){
        let chem = getRandomChem()
        let volume = (getRandomInt(10, 20)*100).toFixed(1)
        let molar = (getRandomInt(4, 10)/10).toFixed(3)
        const q = `Calculate the mass (g) of ${chem.formula} needed to make ${volume} mL of a ${molar} M solution of ${chem.formula}.`
        return [q, (volume / 1000 * molar * chem.mass).toFixed(1)]
    }
    else{
        let rand = getRandomInt(0, 2)
        var first_volume = (0.05 * (getRandomInt(4, 10)))
        let second_volume = (0.05 * (getRandomInt(4, 10)))
        let first_molar = (0.05 * (getRandomInt(4, 10)))
        let second_molar = (0.05 * (getRandomInt(4, 10)))

        let ion
        let ans = 0
        if (rand === 0){
            ion = "Cl"
            ans = ((first_volume * first_molar / (first_volume + second_volume)) + 2 * (second_volume * second_molar / (first_volume + second_volume))).toFixed(2)
        }
        else if (rand === 1){
            ion = "Na"
            ans = (first_volume * first_molar / (first_volume + second_volume)).toFixed(2)
        }
        else{
            ion = "Ca"
            ans = (second_volume * second_molar / (first_volume + second_volume)).toFixed(2)
        }

        const q = `What is the concentration of [${ion}] in the mixture of ${first_volume.toFixed(2)}L of ${first_molar.toFixed(2)}M NaCl and ${second_volume.toFixed(2)}L of ${second_molar.toFixed(2)}M CaCl2? Dissociation equation for NaCl: NaCl -> Na + Cl,
        Dissociation equation for CaCl2: CaCl2 -> Ca + 2 Cl.`
        return [q, ans]
    }
}

const Chemical_table =  [
    {formula: "H2SO4", mass: 98.08},
    {formula: "K2SO3", mass: 158.2},
    {formula: "NaCl", mass: 58.44},
    {formula: "CaCl2", mass: 110.98},
]

function getRandomChem(){
    return Chemical_table[ getRandomInt(0, Chemical_table.length - 1) ]
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}