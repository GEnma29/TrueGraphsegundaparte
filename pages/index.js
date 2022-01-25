import React, { useState } from "react";
import styled from "styled-components";
import Graph from "./components/Graph";
import { useForm, Controller } from "react-hook-form";
import "@fontsource/mulish";
import Slider from "@mui/material/Slider";
import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
import NumberFormat from 'react-number-format';
//import { OneYearsCalculate } from "./components/funtions";


const oldData = [
  {
    name: "0",
    "Cuenta de ahorros bancaria":0,
    Simpol: 0,
  },
  {
    name: "1",
    "Cuenta de ahorros bancaria": 1.2,
    Simpol: 50,
  },
  {
    name: "5",
    "Cuenta de ahorros bancaria": 6.2,
    Simpol: 250,
  },
  {
    name: "10",
    "Cuenta de ahorros bancaria": 12,
    Simpol: 500,
  },
];

let data = oldData;
function HomePage() {
  const [TotalGain, setTotalGain] = useState(1000);

  const DefaultValues = {
    deposit: 500,
    years: 0,
  };

  const { register, watch, control } = useForm({
    mode: "onChange",
    defaultValues: DefaultValues,
  });



  const depositInicial = watch("deposit");
  /*function updateGain(desposit,years){
    const r = 0.1047;
    const Z = 1 + r;
    const U = Math.pow(Z, years);
    const Ganancia = U * desposit;
    const ValueG = Ganancia - desposit;
    
    return console.log(ValueG)
    
  }*/
  function UpdateData(deposit,years) {
    const unArray = [
      {
        name: "0",
        "Cuenta de ahorros bancaria": 0,
        Simpol: 0,
      },
    ]
    let Length = years
    for (let index = 1; index <= Length ; index++) {
      const r = 0.1047;
      const Z = 1 + r;
      const U = Math.pow(Z, index);
      const Ganancia = U * deposit;
      const ValueG = Ganancia - deposit;
      const GainBank = deposit * 0.0026;
      unArray.push({
        name: index,
        "Cuenta de ahorros bancaria": Math.round(GainBank * index ),
        Simpol: Math.round(ValueG),

      })

      console.log(`${Math.round(ValueG)} esta es la ganancia de ${index}`)
      data = unArray
      setTotalGain(Math.round(Ganancia))
    }
    console.log(unArray)
  
   

   /* const GainBank = deposit * 0.0026;
    const GainShalder = deposit * 0.1;

    const r = 0.1047;
    const Month = 24;
    const ValueMothn = Month / 12;
    const Z = 1 + r;
    const U = Math.pow(Z, ValueMothn);
    const Ganancia = U * deposit;
    const ValueG = Ganancia - deposit;
    console.log(`${r} esto es valor de r`);
    console.log(`${ValueMothn} esto es valor de ValueMothn`);
    console.log(`${Z} esto es valor de Z`);
    console.log(`${U} esto es valor de U `);
    console.log(`${Ganancia} esto es valor de Ganancia `);
    console.log(`${ValueG} esto es valor de ValueG `); */
/*
    if (years === 1) {

      
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
*/ }

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type);
      const years = watch("years");
      const deposit = watch("deposit");
     // updateGain(deposit, parseInt(years))
      UpdateData(deposit, parseInt(years))
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  /**
   *  <Input type="number" min={0} max={50} {...register("years")} />
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

  return (
    <Container>
      <ContainerRow>
        <div>
          <GainValue>
             <NumberFormat 
             value={TotalGain}
             displayType={'text'} 
             thousandSeparator={true}
             prefix={'$'} 
             />
           </GainValue>
        <Graph data={data} deposit={depositInicial} />
        </div>
        <ContainerSlider>
          <TitleSlider>Proyecta tus recompensas</TitleSlider>
          <ContainerDeposit>
            <p>Depósito inicial</p>
            <InitialValue>
            <NumberFormat 
             value={depositInicial}
             displayType={'text'} 
             thousandSeparator={true}
             prefix={'$ '} 
             />
            </InitialValue>
          </ContainerDeposit>
          <Controller
            control={control}
            name="deposit"
            defaultValue={500}
            render={({ field }) => (
              <>
                <Slider
                  {...field}
                  aria-label="Restricted values"
                  defaultValue={500}
                  step={100}
                  min={500}
                  max={50000}
                />
              </>
            )}
          />
          <ContainerDeposit>
            <p>Años</p>
            <Box 
            border={'1px solid #bdbdbd'} 
            borderRadius={'15px'} 
            padding={1}
            width={'2rem'}
            >
              <Controller
              render={({ field }) => 
              <Input 
              type="number"
              {...field}
              onChange={(e) => field.onChange(parseInt(e.target.value))}
              />}
              name="years"
              control={control}
              defaultValue={0}
              rules={
                { 
                  max: 50,
                  min: 1,
                  maxLength: 2,
                } 
              }
              />
    
            </Box>
          </ContainerDeposit>
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

const InitialValue = styled.h4`
font-size: 1.2rem;
font-weight: 800;
line-height: 16px;
color: #021F77;
`
const GainValue = styled.p`
 margin-top: 1.5rem;
 align-self: flex-start;
 background: linear-gradient(89.34deg, #007AFF 8.53%, #06C270 130.89%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 1.5rem;
font-weight: 800;
@media screen and (min-width: 720px){
    margin-top: 0;
}


`
const Input = styled.input`
  background-color: #fff !important;
  z-index: 1;
  height: 100%;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.2rem;
  width:100%;
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
