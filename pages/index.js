import React from 'react'
import styled from 'styled-components'
import Graph from './components/Graph';
import { useForm, Controller } from 'react-hook-form'
import "@fontsource/mulish";
import Slider from '@mui/material/Slider';



const oldData = [
  {
    "name": "0",
    "tu banco": 500,
    "Shalder": 500,
    "amt": 2400
  },
    {
      "name": "1",
      "tu banco": 530,
      "Shalder": 550,
      "amt": 2400
    },
    {
      "name": "5",
      "tu banco": 650,
      "Shalder": 750,
      "amt": 2210
    },
    {
      "name": "10",
      "tu banco": 800,
      "Shalder": 1000,
      "amt": 2290
    },
    {
      "name": "20",
      "tu banco": 1100,
      "Shalder": 1500,
      "amt": 2000
    },
    
  ]

let data = oldData                          
function HomePage() {

  function valuetext(value) {
    return `${value} años`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const DefaultValues = {
    deposit: 500,
    years: 1,

  }

  const { register, watch, control,  } = useForm({
    mode: "onChange",
    defaultValues: DefaultValues,
  });

  function UpdateData(deposit){
    const GainBank = deposit * 0.06
    const GainShalder = deposit * 0.10


    const GainBankx1 = parseInt(deposit) +  GainBank
    const GainShalderx1 = parseInt(deposit) +  GainShalder
    ///////////////////////////////////////////////////////
    const GainBankx5 = parseInt(deposit) +  (GainBank * 5) 
    const GainShalderx5 = parseInt(deposit) +  (GainShalder * 5) 
    //////////////////////////////////////////////////////
    const GainBankx10 = parseInt(deposit) +  (GainBank * 10) 
    const GainShalderx10 = parseInt(deposit) +  (GainShalder * 10)
     //////////////////////////////////////////////////////
     const GainBankx20 = parseInt(deposit) +  (GainBank * 20) 
     const GainShalderx20 = parseInt(deposit) +  (GainShalder * 20) 
  
    console.log(GainBank)
    console.log(GainShalder)
    console.log(GainShalderx5)
    const newData = [
      {
        "name": "0",
        "tu banco": deposit,
        "Shalder": deposit,
        "amt": 2400
      },
        {
          "name": "1",
          "tu banco": GainBankx1,
          "Shalder": GainShalderx1,
          "amt": 2400
        },
        {
          "name": "5",
          "tu banco":GainBankx5 ,
          "Shalder": GainShalderx5,
          "amt": 2210
        },
        {
          "name": "10",
          "tu banco":GainBankx10 ,
          "Shalder": GainShalderx10,
          "amt": 2290
        },
        {
          "name": "20",
          "tu banco":GainBankx20,
          "Shalder": GainShalderx20,
          "amt": 2000
        },    
    ]

    data = newData;
    console.log(newData)
  }


  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type)
      //const years = watch('years')
      const deposit = watch('deposit')
      UpdateData(deposit)

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
      value: 12,
      label: '1 año',
    },
    {
      value: 60,
      label: '5 años',
    },
    {
      value: 120,
      label: '10 años',
    },
    {
      value: 240,
      label: '20 años',
    },
  ];
  
    return (
            <Container>
              <ContainerRow>
                <Graph data={data} />
                <ContainerSlider>
                  <TitleSlider>Proyecta tus recompensas</TitleSlider>
                  <ContainerDeposit>
                    <p>Depósito inicial</p>
                    <Input {...register("deposit")} />
                  </ContainerDeposit>
                </ContainerSlider>

                </ContainerRow>
            </Container>
        
    )
  }
  
  export default HomePage

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

`
const ContainerDeposit = styled.div`
display: flex;
flex-direction: row ;
align-items: center;
width: 100%;
justify-content: space-between;

> p {
font-weight: 400;
color: #BDBDBD;
font-size: 1rem;
}
`
const ContainerRow = styled.div`
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: space-around;
width: 90%;
`

const TitleSlider = styled.h4`
display: flex;
font-weight: 800;
color: #0063F7;
font-size: 1.2rem;
align-self: flex-start;
margin: 0;
`
const ContainerSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 18rem;
    max-width: 20rem;
    justify-content: flex-start;
    border-radius: 32px;
    padding: 2rem;
    box-shadow: 0px 6px 14px 0px #10173714;

`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: Mulish;
`