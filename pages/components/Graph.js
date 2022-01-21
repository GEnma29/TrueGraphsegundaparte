import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label} from 'recharts';

const Graph = ({data, Children}) => {
    return (
        <>
        <ViewDesktop>
        <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Shalder" stroke="#8884d8" />
        <Line type="monotone" dataKey="tu banco" stroke="#82ca9d" />
        </LineChart>
        </ViewDesktop>
        <ViewMobilesm>
        <LineChart width={360} height={260} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Shalder" stroke="#8884d8" />
        <Line type="monotone" dataKey="tu banco" stroke="#82ca9d" />
        </LineChart>
        </ViewMobilesm>
        <ViewMobilemd>
        <LineChart width={390} height={250} data={data}  margin={{ top: 5, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Shalder" stroke="#8884d8" />
        <Line type="monotone" dataKey="tu banco" stroke="#82ca9d" />
        </LineChart>
        </ViewMobilemd>
        </>
    )
}

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


