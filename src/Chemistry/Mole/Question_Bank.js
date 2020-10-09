const num_of_q = 3

export const makeQuestion = (index) => {
    let ans;
    if (index%num_of_q === 0){
        const rand = (getRandomInt(200, 2000))/1000;
        let chem = getRandomChem()
        let first_ele_mass = (rand * chem.first_ele_mass * chem.first_ele_portion).toFixed(1)
        let second_ele_mass = (rand * chem.second_ele_mass * chem.second_ele_portion).toFixed(1)
        let first_ele_mol = (first_ele_mass / chem.first_ele_mass).toFixed(3);
        let second_ele_mol = (second_ele_mass / chem.second_ele_mass).toFixed(3);
        let q
        if ("third_ele" in chem){
            let third_ele_mass = (rand * chem.third_ele_mass * chem.third_ele_portion).toFixed(1)
            let third_ele_mol = (third_ele_mass / chem.third_ele_mass).toFixed(3);
            q = `This compound has a mass composition of ${first_ele_mass}g of ${chem.first_ele}, ${second_ele_mass}g of ${chem.second_ele} and ${third_ele_mass}g of ${chem.third_ele}. What is the Empirical Formula of this compound? (Remember to captilize first letter of every element)`;
            ans = `Mole of ${chem.first_ele} in compound X = ${first_ele_mass}g * (1 mol / ${chem.first_ele_mass}g) = ${first_ele_mol} \n
            Mole of ${chem.second_ele} in compound X = ${second_ele_mass}g * (1 mol / ${chem.second_ele_mass}g) = ${second_ele_mol} \n
            Mole of ${chem.third_ele} in compound X = ${third_ele_mass}g * (1 mol / ${chem.third_ele_mass}g) = ${third_ele_mol} \n
            \n
            Now find the ratio between the 3 elements: \n
            ${first_ele_mol} : ${second_ele_mol} : ${third_ele_mol} = ${chem.first_ele_portion} : ${chem.second_ele_portion} : ${chem.third_ele_portion} \n
            \n
            Therefore the answer is ${chem.formula}.`;
        }
        else{
            ans = `Mole of ${chem.first_ele} in compound X = ${first_ele_mass}g * (1 mol / ${chem.first_ele_mass}g) = ${first_ele_mol} \n
            Mole of ${chem.second_ele} in compound X = ${second_ele_mass}g * (1 mol / ${chem.second_ele_mass}g) = ${second_ele_mol} \n
            \n
            Now find the ratio between the 2 elements:\n
            ${first_ele_mol} : ${second_ele_mol} = ${chem.first_ele_portion} : ${chem.second_ele_portion}\n
            \n
            Therefore the answer is ${chem.formula}.`;
            q = `This compound has a mass composition of ${first_ele_mass}g of ${chem.first_ele} and ${second_ele_mass}g of ${chem.second_ele}. What is the Empirical Formula of this compound? (Remember to captilize first letter of every element)`;
        }
        return [q, chem.formula, ans]
    }
    else if (index%num_of_q === 1){
        let chem = getRandomChem()
        let first_ele_percent = (((chem.first_ele_mass * chem.first_ele_portion) / chem.mass)*100).toFixed(1)
        let first_ele_mass = (chem.first_ele_mass * chem.first_ele_portion).toFixed(1)
        let second_ele_percent = (((chem.second_ele_mass * chem.second_ele_portion) / chem.mass)*100).toFixed(1)
        let second_ele_mass = (chem.second_ele_mass * chem.second_ele_portion).toFixed(1)
        let q
        if ("third_ele" in chem){
            let third_ele_percent = (((chem.third_ele_mass * chem.third_ele_portion) / chem.mass)*100).toFixed(1)
            let third_ele_mass = (chem.third_ele_mass * chem.third_ele_portion).toFixed(1)
            q = `A sample has a mass number of ${chem.mass}g. If ${first_ele_percent}% of the sample is ${chem.first_ele}, ${second_ele_percent}% of the sample is ${chem.second_ele} and ${third_ele_percent}% of the sample is ${chem.third_ele}, what is the Empirical Formula? (Remember to captilize first letter of every element)`
            ans = `Mass of ${chem.first_ele}: ${chem.mass}g * ${first_ele_percent}% = ${first_ele_mass} \n
            Mass of ${chem.second_ele}: ${chem.mass}g * ${second_ele_percent}% = ${second_ele_mass} \n
            Mass of ${chem.third_ele}: ${chem.mass}g * ${third_ele_percent}% = ${third_ele_mass} \n
            Mole of ${chem.first_ele}: ${first_ele_mass}g * (1 mol / ${chem.first_ele_mass}g) = ${chem.first_ele_portion} mol \n
            Mole of ${chem.second_ele}: ${second_ele_mass}g * (1 mol / ${chem.second_ele_mass}g) = ${chem.second_ele_portion} mol \n
            Mole of ${chem.third_ele}: ${third_ele_mass}g * (1 mol / ${chem.third_ele_mass}g) = ${chem.third_ele_portion} mol \n
            Therefore, Empirical formula is ${chem.formula}`
        }
        else{
            ans = `Mass of ${chem.first_ele}: ${chem.mass}g * ${first_ele_percent}% = ${first_ele_mass} \n
            Mass of ${chem.second_ele}: ${chem.mass}g * ${second_ele_percent}% = ${second_ele_mass} \n
            Mole of ${chem.first_ele}: ${first_ele_mass}g * (1 mol / ${chem.first_ele_mass}g) = ${chem.first_ele_portion} mol \n
            Mole of ${chem.second_ele}: ${second_ele_mass}g * (1 mol / ${chem.second_ele_mass}g) = ${chem.second_ele_portion} mol \n
            Therefore, Empirical formula is ${chem.formula}`
            q = `A sample has a mass number of ${chem.mass}g. If ${first_ele_percent}% of the sample is ${chem.first_ele} and ${second_ele_percent}% of the sample is ${chem.second_ele}, what is the Empirical Formula? (Remember to captilize first letter of every element)`
        }    
        return [q, chem.formula, ans]
    }
    else{
        const answer = getRandomInt(0, 1)
        const rand1 = (getRandomInt(200, 3000))/1000;
        const rand2 = (getRandomInt(200, 3000))/1000;
        let x_first_ele_mass, x_second_ele_mass, y_first_ele_mass, y_second_ele_mass
        if (answer === 0){
            x_first_ele_mass = (rand1 * Chemical_table[0].first_ele_mass).toFixed(1)
            x_second_ele_mass = (rand1 * Chemical_table[0].second_ele_mass).toFixed(1)
            y_first_ele_mass = (rand2 * Chemical_table[1].first_ele_mass).toFixed(1)
            y_second_ele_mass = (rand2 * Chemical_table[1].second_ele_mass).toFixed(1)
            ans = `Use the same method as question 1 to find the emperical formula for these compounds. \n
            The first compound X is ${Chemical_table[0].formula}. \n
            The second compound Y is ${Chemical_table[1].formula}. \n
            Therefore, they are NOT the same compound.`
        }
        else{
            let i = getRandomInt(0, 1)
            x_first_ele_mass = (rand1 * Chemical_table[i].first_ele_mass).toFixed(1)
            x_second_ele_mass = (rand1 * Chemical_table[i].second_ele_mass).toFixed(1)
            y_first_ele_mass = (rand2 * Chemical_table[i].first_ele_mass).toFixed(1)
            y_second_ele_mass = (rand2 * Chemical_table[i].second_ele_mass).toFixed(1)
            ans = `Use the same method as question 1 to find the emperical formula for these compounds. \n
            The first compound X is ${Chemical_table[i].formula}. \n
            The second compound Y is ${Chemical_table[i].formula}. \n
            Therefore, they are the SAME compound.`
        }
        const q = `A compound X has a mass composition of ${x_first_ele_mass}g Manganese and ${x_second_ele_mass}g of oxygen. A compound Y has a mass composition of ${y_first_ele_mass}g of manganese and ${y_second_ele_mass}g of oxygen. Are they the same compound? (Answer "y" for same compound, "n" for different compound)`
        return [q, answer === 0? "n" : "y", ans]
    }
}

const Chemical_table =  [
    {formula: "Mn3O4", mass: 230.8, first_ele: "Manganese", first_ele_mass: 54.9, first_ele_portion: 3, second_ele: "Oxygen", second_ele_mass: 16, second_ele_portion: 4},
    {formula: "Mn4O7", mass: 331.7, first_ele: "Manganese", first_ele_mass: 54.9, first_ele_portion: 4, second_ele: "Oxygen", second_ele_mass: 16, second_ele_portion: 7},
    {formula: "Li2O", mass: 29.9, first_ele: "Lithium", first_ele_mass: 6.94, first_ele_portion: 2, second_ele: "Oxygen", second_ele_mass: 16, second_ele_portion: 1},
    {formula: "NH3", mass: 17.0, first_ele: "Nitrogen", first_ele_mass: 14, first_ele_portion: 1, second_ele: "Hydrogen", second_ele_mass: 1, second_ele_portion: 3},
    {formula: "K2CO3", mass: 138.2, first_ele: "Potassium", first_ele_mass: 39, first_ele_portion: 2, second_ele: "Carbon", second_ele_mass: 12, second_ele_portion: 1, third_ele: "Oxygen", third_ele_mass: 16, third_ele_portion: 3},
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomChem(){
    return Chemical_table[ getRandomInt(0, Chemical_table.length - 1) ]
}