import React, { useState } from "react";
import styled from "styled-components";
import Graph from "./components/Graph";
import { useForm, Controller } from "react-hook-form";
import "@fontsource/mulish";
import Slider from "@mui/material/Slider";
//import { OneYearsCalculate } from "./components/funtions";


const oldData = [
  {
    name: "0",
    "Cuenta de ahorros bancaria":0,
    Simpol: 0,
  },
  {
    name: "1 año",
    "Cuenta de ahorros bancaria": 1.2,
    Simpol: 50,
  },
  {
    name: "5 años",
    "Cuenta de ahorros bancaria": 6.2,
    Simpol: 250,
  },
  {
    name: "10 años",
    "Cuenta de ahorros bancaria": 12,
    Simpol: 500,
  },
  {
    name: "20 años",
    "Cuenta de ahorros bancaria": 26,
    Simpol: 1000,
  },
];

let data = oldData;
function HomePage() {

  const [TotalGain, setTotalGain] = useState(1500);

  function valuetext(value) {
    return `${value} años`;
  }
  function BuildArry(num){
    for (let index = 0; index < num; index++) {
      return console.log(`${index} index`)
      
    }
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const DefaultValues = {
    deposit: 500,
    years: "",
  };

  const { register, watch, control } = useForm({
    mode: "onChange",
    defaultValues: DefaultValues,
  });

  function UpdateData(deposit, years) {
    const GainBank = deposit * 0.0026;
    const GainShalder = deposit * 0.1;

    const r = 0.1047;
    const Month = 24;
    const ValueMothn = Month / 12;
    const Z = 1 + r;
    const U = Math.pow(Z, ValueMothn);
    const Ganancia = U * deposit;
    console.log(`${r} esto es valor de r`);
    console.log(`${ValueMothn} esto es valor de ValueMothn`);
    console.log(`${Z} esto es valor de Z`);
    console.log(`${U} esto es valor de U `);
    console.log(`${Ganancia} esto es valor de Ganancia `);

    if (years === 1) {

     // OneYearsCalculate(deposit,data,TotaleGain)
 
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
          name: "6 ",
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
      setTotalGain(deposit + Math.round(Ganancia12))
      return data ;
      
    } else {
      const Year = parseInt(years);
      for (let step = 0; step < 5; step++) {
        // Se ejecuta 5 veces, con valores del paso 0 al 4.
        console.log('Camina un paso hacia el este');
      }
      console.log(Year)
      const GainBank = deposit * 0.0026;
      const r = 0.1047;
      const Month = 12;
      const ValueMothn = Month / 12;
      const Z = 1 + r;
      const U = Math.pow(Z, ValueMothn);
      const Ganancia = U * deposit;
      const ValueG = Ganancia - deposit;
      console.log(`${U} esto es la U`);
      console.log(`${Ganancia} esto es la ganacia`);
      console.log(`${ValueG} esto es la ValueG`);
      setTotalGain(Math.round(ValueG) * Year)
      console.log(`${TotalGain} esto es total no `)
      const GainBankx1 =  GainBank;
      const GainShalderx1 =  ValueG;
      ///////////////////////////////////////////////////////
      const GainBankx5 =  GainBank * 5;
      const GainShalderx5 =  ValueG * 5;
      //////////////////////////////////////////////////////
      const GainBankx10 =  GainBank * 10;
      const GainShalderx10 =  Math.round(ValueG) * 10;
      //////////////////////////////////////////////////////
      const GainBankx20 =   GainBank * 20;
      const GainShalderx20 =  Math.round(ValueG) * 20;

      console.log(GainBank);
      console.log(GainShalderx1);
      console.log(GainShalderx5);
      const newData = [
        {
          name: "0",
          "Cuenta de ahorros bancaria": 0,
          Simpol: 0,
        },
        {
          name: "1 año",
          "Cuenta de ahorros bancaria": GainBankx1,
          Simpol: GainShalderx1,
        },
        {
          name: "5 años",
          "Cuenta de ahorros bancaria": GainBankx5,
          Simpol: GainShalderx5,
        },
        {
          name: "10 años",
          "Cuenta de ahorros bancaria": GainBankx10,
          Simpol: GainShalderx10,
        },
        {
          name: "20 años",
          "Cuenta de ahorros bancaria": GainBankx20,
          Simpol: GainShalderx20,
        },
      ];
      console.log(newData);
      data = newData
      return data;
    }


    const GainBankx1 = parseInt(deposit) + GainBank;
    const GainShalderx1 = parseInt(deposit) + Math.round(Ganancia);
    ///////////////////////////////////////////////////////
    const GainBankx5 = parseInt(deposit) + GainBank * 5;
    const GainShalderx5 = parseInt(deposit) + Math.round(Ganancia) * 5;
    //////////////////////////////////////////////////////
    const GainBankx10 = parseInt(deposit) + GainBank * 10;
    const GainShalderx10 = parseInt(deposit) + Math.round(Ganancia) * 10;
    //////////////////////////////////////////////////////
    const GainBankx20 = parseInt(deposit) + GainBank * 20;
    const GainShalderx20 = parseInt(deposit) + Math.round(Ganancia) * 20;

    console.log(GainBank);
    console.log(GainShalder);
    console.log(GainShalderx5);
    const newData = [
      {
        name: "0",
        "Cuenta de ahorros bancaria": deposit,
        Simpol: deposit,
      },
      {
        name: "1 año",
        "Cuenta de ahorros bancaria": GainBankx1,
        Simpol: GainShalderx1,
      },
      {
        name: "5 años",
        "Cuenta de ahorros bancaria": GainBankx5,
        Simpol: GainShalderx5,
      },
      {
        name: "10 años",
        "Cuenta de ahorros bancaria": GainBankx10,
        Simpol: GainShalderx10,
      },
      {
        name: "20 años",
        "Cuenta de ahorros bancaria": GainBankx20,
        Simpol: GainShalderx20,
      },
    ];

    data = newData;
    console.log(newData);
  }

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type);
      const years = watch("years");
      const deposit = watch("deposit");
      UpdateData(deposit, parseInt(years));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  /**
   * <Controller
                control={control}
                name='years'
                defaultValue={12}
                render={({ field }) => (
                  <>
                    <Slider {...field}
                      aria-label="Restricted values"
                      defaultValue={12}
                      valueLabelFormat={valueLabelFormat}
                      getAriaValueText={valuetext}
                      step={null}
                      min={12}
                      max={240}
                      marks={marks} />
                  </>
                )}
              />
   */

  const marks = [
    {
      value: 100,
      label: "100$",
    },
    {
      value: 500,
      label: "500$",
    },
    {
      value: 1000,
      label: "1000$",
    },
    {
      value: 1500,
      label: "1500$",
    },
    {
      value: 2500,
      label: "2500$",
    },
  ];

  return (
    <Container>
      <ContainerRow>
        <Graph data={data} />
        <ContainerSlider>
          <TitleSlider>Proyecta tus recompensas</TitleSlider>
          <ContainerDeposit>
            <p>Saldo Total</p>
            <p>{`$${TotalGain}`}</p>
          </ContainerDeposit>
          <ContainerDeposit>
            <p>Tiempo en años</p>
            <Input type="number" min={0} max={30} {...register("years")} />
          </ContainerDeposit>
          <ContainerDeposit>
            <p>Depósito inicial</p>
          </ContainerDeposit>
          <Controller
            control={control}
            name="deposit"
            defaultValue={12}
            render={({ field }) => (
              <>
                <Slider
                  {...field}
                  aria-label="Restricted values"
                  defaultValue={12}
                  valueLabelFormat={valueLabelFormat}
                  getAriaValueText={valuetext}
                  step={null}
                  min={100}
                  max={2500}
                  marks={marks}
                />
              </>
            )}
          />
        </ContainerSlider>
      </ContainerRow>
    </Container>
  );
}

export default HomePage;

const Leyendy = styled.p`
  display: flex;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0em;
`;

const Input = styled.input`
  background-color: #fff !important;
  z-index: 1;
  height: 40px;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.2rem;
  width: 4rem;
  color: #101737;

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }
`;
const ContainerDeposit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  > p {
    font-weight: 400;
    color: #bdbdbd;
    font-size: 1rem;
  }
`;
const ContainerRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 90%;
`;

const TitleSlider = styled.h4`
  display: flex;
  font-weight: 800;
  color: #0063f7;
  font-size: 1.2rem;
  align-self: flex-start;
  margin: 0;
`;
const ContainerSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  min-width: 18rem;
  max-width: 20rem;
  justify-content: flex-start;
  border-radius: 32px;
  padding: 2rem;
  box-shadow: 0px 6px 14px 0px #10173714;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: Mulish;
`;
