import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label} from 'recharts';
import NumberFormat from 'react-number-format';

const Graph = ({data, deposit}) => {

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {

            console.log(payload)
          return (
            <GlassDiv>
              { label == '1' ? (<Labelyear>{`${label} año`}</Labelyear>) : (<Labelyear>{`${label} años`}</Labelyear>) }
              <Simpol>
                  <NumberFormat 
                  value={payload[0].value + deposit}
                  displayType={'text'} 
                  thousandSeparator={true}
                  prefix={'Simpol: $'} 
                  />
             </Simpol>
             <BankLabel>
                 <NumberFormat 
                  value={payload[1].value + deposit}
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
        <ViewDesktop>
        <LineChart width={750} height={265} data={data} margin={{ top: 25, right: 40, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="name"/>
        <YAxis>
        </YAxis>
        <Tooltip content={CustomTooltip} />
        <Legend />
        <Line type="monotone" strokeWidth={3} dataKey="Simpol" stroke="#0063F7" />
        <Line type="monotone" strokeWidth={4} dataKey="Cuenta de ahorros bancaria" stroke="#101737" />
        </LineChart>
        </ViewDesktop>
        <ViewMobilesm>
        <LineChart width={360} height={360} data={data} margin={{ top: 35, right: 30, left: 20, bottom: 45 }}>
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="name"/>
        <YAxis >
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Simpol" stroke="#0063F7" />
        <Line type="monotone" dataKey="Cuenta de ahorros bancaria" stroke="#101737" />
        </LineChart>
        </ViewMobilesm>
        <ViewMobilemd>
        <LineChart width={390} height={360} data={data}  margin={{ top: 35, right: 30, left: 20, bottom: 45 }}>
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="name"/>
        <YAxis>
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Simpol" stroke="#0063F7" />
        <Line type="monotone" dataKey="Cuenta de ahorros bancaria" stroke="#101737" />
        </LineChart>
        </ViewMobilemd>
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


const Leyend= styled.p`
display: flex;
font-size: 0.875rem;
font-style: normal;
font-weight: 800;
line-height: 16px;
letter-spacing: 0em;
`
const ViewDesktop = styled.div`
display: none;
@media screen and (min-width: 720px){
    display: flex;
}
`

const ViewMobilesm = styled.div`
display: flex;
@media screen and (min-width: 399px){
    display: none;
}
`

const ViewMobilemd = styled.div`
display: none;
@media screen and (min-width: 400px){
    display: flex;
}
@media screen and (min-width: 720px){
    display: none;
}
`

export default Graph


