const num_of_q = 6

export const makeQuestion = (index) => {
    if (index%num_of_q === 0){
        const rand = getRandomInt(20, 120);
        let chem = getRandomChem()
        const m = (rand / chem[1]).toFixed(2);
        const q = `How many moles are in ${rand} grams of ${chem[0]}?`;
        return [q, m]
    }
    else if (index%num_of_q === 1){
        const rand = (getRandomInt(1, 10000) / 1000).toFixed(3)
        let chem = getRandomChem()
        const q = `How many grams are in ${rand} moles of ${chem[0]}?`
        return [q, (rand * chem[1]).toFixed(2)]
    }
    else if (index%num_of_q === 2){
        const rand = (getRandomInt(1, 1000)/10).toFixed(1)
        let chem = getRandomChem()
        const q = `How many molecules are in ${rand} moles of ${chem[0]}? (Divide the final answer by 10^23. Example: if the answer is 5.6 * 10^24, enter 56)`
        return [q, (rand * 6.02).toFixed(2)]
    }
    else if (index%num_of_q === 3){
        const rand = (getRandomInt(1, 100)/10).toFixed(1)
        let chem = getRandomChem()
        const q = `How many moles are in ${rand} * 10^23 molecules of ${chem[0]}?`
        return [q, (rand / 6.02).toFixed(2)]
    }
    else if (index%num_of_q === 4){
        const rand = (getRandomInt(1, 1000)/10).toFixed(1)
        let chem = getRandomChem()
        const q = `How many molecules are in ${rand} grams of ${chem[0]}? (Divide the final answer by 10^23. Example: if the answer is 5.6 * 10^24, enter 56)`
        return [q, (rand / chem[1] * 6.02).toFixed(2)]
    }
    else{
        const rand = (getRandomInt(1, 100)/10).toFixed(1)
        let chem = getRandomChem()
        const q = `How many grams are in ${rand} * 10^23 molecules of ${chem[0]}?`
        return [q, (rand / 6.02 * chem[1]).toFixed(2)]
    }
}

const Chemical_table =  [
    {formula: "Li2O", mass: 29.90},
    {formula: "NH3", mass: 17},
    {formula: "Oxygen", mass: 32},
    {formula: "water", mass: 18},
    {formula: "N2I6", mass: 789.4},
    {formula: "H2SO4", mass: 98.079}
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomChem(){
    let chem = Chemical_table[ getRandomInt(0, Chemical_table.length - 1) ]
    let chem_form = chem.formula
    let chem_mass = chem.mass
    return [chem_form, chem_mass]
}