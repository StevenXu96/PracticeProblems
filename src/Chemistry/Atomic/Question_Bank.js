const num_of_q = 10

export const makeQuestion = (index) => {
    let q, a, b, c, d, e, ans;
    if (index%num_of_q === 0){
        q = `Which of the following elements has the greatest electronegativity?`;
        a = "F";
        b = "Cl";
        c = "Br";
        d = "C";
        e = "None of the above";
        ans = "A";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 1){
        q = `Which is the electron configuration of an atom in the exicted state?`;
        a = "1s2, 2s1";
        b = "1s2, 2s2, 2p1";
        c = "1s2, 2s2, 2p5";
        d = "1s2, 2s2, 2p2, 3s1";
        e = "None of the above";
        ans = "C";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 2){
        q = `How many s orbitals can exist in the 3rd energy level?`;
        a = "1";
        b = "2";
        c = "3";
        d = "4";
        e = "5";
        ans = "A";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 3){
        q = `The major difference between a 1s orbital and a 2s orbital is that`;
        a = "2s orbital has a different geometric shape.";
        b = "2s orbital is at a different energy level.";
        c = "2s orbital can hold more electrons.";
        d = "2s orbital can hold less electrons.";
        e = "there is no difference.";
        ans = "B";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 4){
        q = `What is the total number of valence electrons in an atom with the electron configuration 2-8-5?`;
        a = "2";
        b = "5";
        c = "8";
        d = "15";
        e = "None of the above";
        ans = "B";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 5){
        q = `A Ca[2+] ion differs from a Ca[0] atom in that the Ca[2+] ion has`;
        a = "more electrons";
        b = "more protons";
        c = "fewer protons";
        d = "fewer electrons";
        e = "none of the above";
        ans = "D";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 6){
        q = `Which particles are referred to as nucleons (subatomic particles located in the nucleus)?`;
        a = "protons and neutrons";
        b = "protons and electrons";
        c = "neutrons, only";
        d = "neutrons and electrons";
        e = "None of the above";
        ans = "A";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 7){
        q = `What is the mass number of an atom that contains 19 protons, 19 electrons, and 20 neutrons?`;
        a = "25";
        b = "19";
        c = "58";
        d = "20";
        e = "39";
        ans = "E";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 8){
        q = `How many protons are in the nucleus of an atom of beryllium?`;
        a = "2";
        b = "4";
        c = "9";
        d = "5";
        e = "7";
        ans = "B";

        return [q, a, b, c, d, e, ans]
    }
    else if (index%num_of_q === 9){
        q = `The atomic mass of an element is defined as the weighted average mass of that element’s`;
        a = "naturally occurring isotopes";
        b = "least abundant isotope";
        c = "radioactive isotopes";
        d = "most abundant isotope";
        e = "none of the above";
        ans = "A";

        return [q, a, b, c, d, e, ans]
    }
    
}