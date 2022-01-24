

export function OneYearsCalculate(deposit,data,TotaleGain){
    const GainBank = deposit * 0.0026;
    const r = 0.1047;
    const Month = 12;
    const ValueMothn = Month / 12;
    const Z = 1 + r;
    const U = Math.pow(Z, ValueMothn);
    const Month1 = Math.pow(Z, 0.083);
    const Month2 = Math.pow(Z, 0.166);
    const Month3 = Math.pow(Z, 0.25);
    const Month4 = Math.pow(Z, 0.33);
    const Month5 = Math.pow(Z, 0.416);
    const Month6 = Math.pow(Z, 0.5);
    const Month7 = Math.pow(Z, 0.58);
    const Month8 = Math.pow(Z, 0.66);
    const Month9 = Math.pow(Z, 0.75);
    const Month10 = Math.pow(Z, 0.83);
    const Month11 = Math.pow(Z, 0.91);
    const Month12 = Math.pow(Z, 1);

    console.log(Month1);
    console.log(Month2);
    console.log(Month3);
    console.log(Month4);
    console.log(Month5);
    console.log(Month6);
    console.log(Month7);
    console.log(Month8);

    const Ganancia = U * deposit;
    console.log(Ganancia);
    const Ganancia1 = ( Month1 * deposit) - deposit;
    const Ganancia2 = (Month2 * deposit) - deposit ;
    const Ganancia3 = (Month3 * deposit) - deposit;
    const Ganancia4 = (Month4 * deposit) - deposit;
    const Ganancia5 = (Month5 * deposit) - deposit;
    const Ganancia6 = (Month6 * deposit) - deposit;
    const Ganancia7 = (Month7 * deposit) - deposit;
    const Ganancia8 = (Month8 * deposit) - deposit;
    const Ganancia9 = (Month9 * deposit) - deposit;
    const Ganancia10 = (Month10 * deposit) - deposit;
    const Ganancia11 = (Month11 * deposit) - deposit;
    const Ganancia12 = (Month12 * deposit) - deposit;

    const OneYearData = [
      {
        name: "0",
        "Cuenta de ahorros bancaria": 0,
        Simpol: 0,
      },
      {
        name: "1 mes",
        "Cuenta de ahorros bancaria": 0,
        Simpol:  Math.round(Ganancia1),
      },
      {
        name: "4 meses",
        "Cuenta de ahorros bancaria": 0,
        Simpol:  Math.round(Ganancia4),
      },
      {
        name: "6 meses",
        "Cuenta de ahorros bancaria": 0,
        Simpol:  Math.round(Ganancia6),
      },
      {
        name: "8 meses",
        "Cuenta de ahorros bancaria": 0,
        Simpol:  Math.round(Ganancia8),
      },

      {
        name: "10 meses",
        "Cuenta de ahorros bancaria": 0,
        Simpol:  Math.round(Ganancia10),
      },
      {
        name: "12 meses",
        "Cuenta de ahorros bancaria": GainBank,
        Simpol:  Math.round(Ganancia12),
      },
    ];
    data = OneYearData;
    console.log(data);
    TotaleGain = deposit + Math.round(Ganancia12)
    return data,TotaleGain ;

}