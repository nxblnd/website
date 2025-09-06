export function toRoman(n: number): string {
    const romanOnes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const romanTens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const romanHundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const romanThousands = ['', 'M', 'MM', 'MMM'];

    const thousands = romanThousands[Math.trunc(n / 1000)];
    const hundrends = romanHundreds[Math.trunc((n % 1000) / 100)];
    const tens = romanTens[Math.trunc((n % 100) / 10)];
    const ones = romanOnes[n % 10];

    return `${thousands}${hundrends}${tens}${ones}`;
}
