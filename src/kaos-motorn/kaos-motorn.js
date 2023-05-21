function calculateState(E2, F2, B7, J6, D14, G14, { debug = false } = {}) {
    const H3 = (B7*J6*7)%64;
    const C3 = (J6+B7+34+G14) % 64;
    const J13 = (D14+B7*E2)%64;
    const D11 = (E2*G14)%64;
    const F12 = (E2*B7+D14)%64;
    const I10 = (J6*G14+B7)%64;
    const B5 = (J13+D11+F12+I10) % 64;
    const G6 = (G14*B7+D14)%64
    const I7 = (F12+D11*G6+H3) % 64;
    const D5=(E2+J6+B7+D14+G14)%64;
    const F4 =(E2*G14+D14+J6)%64;
    const J3 =(F12+D11+D5+F4)%64;
    const E6 =(F4+D11+I10)%64;
    const I5 = (H3+D5)%64;
    const F10 =(J13+F12+D11+F4+17)%64;
    const B13 =(B7*J6*G14+5)%64;
    const H13 =(H3+G6+F12+D11+B13+B13)%64;
    const C12 =(B13+F12+I10)%64;
    const C6 =(H3+G6+B13+3)%64;
    const H11 =(C3+H3+F12)%64;

    return [
        String.fromCharCode(52+B5),
        String.fromCharCode(44+I7),
        String.fromCharCode(48+J3),
        String.fromCharCode(45+E6),
        String.fromCharCode(42+I5),
        String.fromCharCode(63-F10),
        String.fromCharCode(H13+93),
        String.fromCharCode(C12+68),
        String.fromCharCode(H13+74),
        String.fromCharCode(I7-5),
        String.fromCharCode(C6*6+2),
        String.fromCharCode(I7+B5+J6-34),
        String.fromCharCode(91-C12),
        String.fromCharCode(I7+H11-10),
        String.fromCharCode(B5-4),
        String.fromCharCode(H11+H13+I5+J3),
        String.fromCharCode(H13+E6),
        String.fromCharCode(E6*H11-25)
    ].join('');
}

function main() {
    // console.log(calculateState(1,1,1,1,1,1, { debug: true }));

    for(let e2 = 1; e2 < 10 ; e2+=1) {
        for(let f2 = 1; f2 < 10 ; f2+=1) {
            for (let b7 = 1; b7 < 10; b7 += 1) {
                for (let j6 = 1; j6 < 10; j6 += 1) {
                    for (let d14 = 1; d14 < 10; d14 += 1) {
                        for (let g14 = 1; g14 < 10; g14 += 1) {
                            console.log(`${e2}${f2}${b7}${j6}${d14}${g14}`);
                            const result = calculateState(e2, f2, b7, j6, d14, g14);
                            if (result.startsWith('he2')) {
                                console.log('-----', result);
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
    calculateState(1,1,1,1,1,1);
}

main();
