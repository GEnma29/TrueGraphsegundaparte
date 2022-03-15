import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer} from 'recharts';
import NumberFormat from 'react-number-format';

const Graph = ({data, deposit}) => {

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {

            console.log(payload)
          return (
            <GlassDiv>
              { parseInt(label) <= 1 ? (<Labelyear>{`${label} año`}</Labelyear>) : (<Labelyear>{`${label} años`}</Labelyear>) }
              <Simpol>
                  <NumberFormat 
                  value={payload[0].value}
                  displayType={'text'} 
                  thousandSeparator={true}
                  prefix={'Simpol: $'} 
                  />
             </Simpol>
             <BankLabel>
                 <NumberFormat 
                  value={payload[1].value}
                  displayType={'text'} 
                  thousandSeparator={true}
                  prefix={'Cuenta Bancaria: $'} 
                  />
             </BankLabel>
            </GlassDiv>
          );
        }
      
        return null;
      };
    return (
        <>
        <ResponsiveContainer width={'100%'} height={265}>
        <LineChart data={data} margin={{ top: 25, right: 40, left: 20, bottom: 50 }}>
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="name"/>
        <YAxis type="number" domain={['dataMin', 'dataMax']} />
        <Tooltip content={CustomTooltip} />
        <Line type="monotone" strokeWidth={3} dataKey="Simpol" stroke="#0063F7" />
        <Line type="monotone" strokeWidth={4} dataKey="Cuenta de ahorros bancaria" stroke="#101737" />
        </LineChart>
       </ResponsiveContainer>
        </>
    )
}

const GlassDiv = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 1rem;
height: 6.5rem;
background: rgba( 255, 255, 255, 0.4 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Simpol = styled.p`
display: flex;
margin: 4px 0 4px 0;
font-style: normal;
font-weight: 800;
color:#0063F7 ;
line-height: 16px;
`
const BankLabel = styled.p`
display: flex;
margin: 0;
font-style: normal;
font-weight: 800;
color:#101737 ;
line-height: 16px;
`
const Labelyear = styled.p`
display: flex;
margin: 0;
font-style: normal;
font-weight: 800;
color:#101737 ;
line-height: 16px;
`


const ViewMobilesm = styled.div`
display: flex;
@media screen and (min-width: 399px){
    display: none;
}
`

export default Graph


