import React, { useState ,useRef } from "react";
import styled from "styled-components";
import Graph from "./components/Graph";
import { useForm, Controller } from "react-hook-form";
import "@fontsource/mulish";
import Slider from "@mui/material/Slider";
import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
import NumberFormat from 'react-number-format';
import Decimal from "decimal.js-light";



const oldData = [
  {
    name: "1",
    "Cuenta de ahorros bancaria": 501.2,
    Simpol: 552,
  },
  {
    name: "2",
    "Cuenta de ahorros bancaria":503,
    Simpol: 615,
  },
  {
    name: "3",
    "Cuenta de ahorros bancaria": 504,
    Simpol: 679,
  },
  {
    name: "4",
    "Cuenta de ahorros bancaria": 505,
    Simpol: 750,
  },
  {
    name: "5",
    "Cuenta de ahorros bancaria": 506,
    Simpol: 828,
  },
  {
    name: "6",
    "Cuenta de ahorros bancaria": 507,
    Simpol: 914,
  },
  {
    name: "7",
    "Cuenta de ahorros bancaria": 508,
    Simpol: 1009,
  },
  {
    name: "8",
    "Cuenta de ahorros bancaria": 509,
    Simpol: 1114,
  },
  {
    name: "9",
    "Cuenta de ahorros bancaria": 510,
    Simpol: 1230,
  },
  {
    name: "10",
    "Cuenta de ahorros bancaria": 513,
    Simpol: 1358,
  },
  
];

let data = oldData;
function HomePage() {
  const [TotalGain, setTotalGain] = useState(1359);
  const [years, setYears] = useState(10)
  const [deposit, setdeposit] = useState(500)

  const handleChange = (event, newValue) => {
    setdeposit(newValue);
  };

  const DefaultValues = {
    deposit: 500,
    years: 10,
  };

  const { register, watch, control } = useForm({
    mode: "onChange",
    defaultValues: DefaultValues,
  });




  const depositInicial = watch("deposit");
  function UpdateData(deposit,years) {
    const unArray = []
    let length = 0
    console.log(years)
     length = parseInt(years)
    console.log(length)
    let k = 0 // k is variable to correct the graph 
    for (let index = 1; index <= length ; index++) {
      const r = new Decimal(0.1047); // value for rewar by year
      const Z = r.plus(1).toNumber(); // this equivalent to (r + 1)
      const z = new Decimal(Z)
      const U = z.toPower(index)// (1 + r)^t where index is time
      console.log(U)
      const uDecimal = new Decimal(U) // convert u to decimal 
      const Ganancia = uDecimal.mul(deposit).toNumber();// deposit (1 + r)^t 
      const ValueG = Ganancia  + k;
      const GainBank = deposit * 0.0026;
       k = 5
      unArray.push({
        name: index,
        "Cuenta de ahorros bancaria": Math.round(deposit +(GainBank * index) ),
        Simpol: Math.round(ValueG),

      })

      console.log(`${Math.round(ValueG)} esta es la ganancia de ${index}`)
      data = unArray
      setTotalGain(Math.round(ValueG))
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
          name: "1 a??o",
          "Cuenta de ahorros bancaria": GainBankx1,
          Simpol: GainShalderx1,
        },
        {
          name: "5 a??os",
          "Cuenta de ahorros bancaria": GainBankx5,
          Simpol: GainShalderx5,
        },
        {
          name: "10 a??os",
          "Cuenta de ahorros bancaria": GainBankx10,
          Simpol: GainShalderx10,
        },
        {
          name: "20 a??os",
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
        name: "1 a??o",
        "Cuenta de ahorros bancaria": GainBankx1,
        Simpol: GainShalderx1,
      },
      {
        name: "5 a??os",
        "Cuenta de ahorros bancaria": GainBankx5,
        Simpol: GainShalderx5,
      },
      {
        name: "10 a??os",
        "Cuenta de ahorros bancaria": GainBankx10,
        Simpol: GainShalderx10,
      },
      {
        name: "20 a??os",
        "Cuenta de ahorros bancaria": GainBankx20,
        Simpol: GainShalderx20,
      },
    ];

    data = newData;
    console.log(newData);
  }
*/ }

  React.useEffect(() => {
      UpdateData(deposit,years)
  }, [years,deposit]);

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
        <ContainerGraph>
          <GainValue>
            Retorno 
             <NumberFormat 
             value={TotalGain}
             displayType={'text'} 
             thousandSeparator={true}
             prefix={'  $ '} 
             />
           </GainValue>
        <Graph data={data} deposit={deposit} />
        </ContainerGraph>
        <ContainerItem>
        <ContainerSlider>
          <TitleSlider>Proyecta tus recompensas</TitleSlider>
          <ContainerDeposit>
            <p>Dep??sito inicial</p>
            <InitialValue>
            <NumberFormat 
             value={deposit}
             displayType={'text'} 
             thousandSeparator={true}
             prefix={'$ '} 
             />
            </InitialValue>
          </ContainerDeposit>
          <Text>
            <p>
            Todos los saldos tanto de dep??sito inicial como ganancia est??n expresados en UST
            </p>
          </Text>
          <Controller
            control={control}
            name="deposit"
            render={({ field , onChange }) => (
              <>
                <PrettoSlider
                  {...field}
                  aria-label="Restricted values"
                  defaultValue={500}
                  step={100}
                  min={500}
                  max={50000}
                  value={deposit}
                  onChange={handleChange}
                />
              </>
            )}
          />
          <ContainerDeposit>
            <p>A??os</p>
            <Box 
            padding={1}
            width={'3rem'}
            >
            <Input 
              type="number"
              value={years}
              {...register("years", {
                max:80,
                onChange:(e)=>{setYears(e.target.value), console.log(years)}
              })}
              />
             
    
            </Box>
          </ContainerDeposit>
        </ContainerSlider>
        </ContainerItem>
      </ContainerRow>
    </Container>
  );
}

export default HomePage;

const ContainerItem = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;

`

const ContainerGraph = styled.div`
display:flex;
width: 100%;
flex-direction: column;
@media screen and (min-width: 720px){
  min-width: 750px;
}

`
const Text = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin: 0;
> p {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 16px;
  text-align: justify;
  color: #021F77;
}

`

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
const PrettoSlider = styled(Slider)({
  color: '#1FAAA5',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


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
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 720px){
    justify-content: space-around;
    flex-direction:row;
    width: 90%;

}
`;

const TitleSlider = styled.h4`
  display: flex;
  font-weight: 800;
  color: #183A60;
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
  width: 100vw;
  height: 100vh;
  font-family: Mulish;
`;
