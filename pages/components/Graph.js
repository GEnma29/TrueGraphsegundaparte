import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label} from 'recharts';

const Graph = ({data}) => {
    return (
        <>
        <ViewDesktop>
        <LineChart width={750} height={265} data={data} margin={{ top: 25, right: 40, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="name"/>
        <YAxis>
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Simpol" stroke="#8884d8" />
        <Line type="monotone" dataKey="Cuenta de ahorros bancaria" stroke="#82ca9d" />
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
        <Line type="monotone" dataKey="Simpol" stroke="#8884d8" />
        <Line type="monotone" dataKey="Cuenta de ahorros bancaria" stroke="#82ca9d" />
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
        <Line type="monotone" dataKey="Simpol" stroke="#8884d8" />
        <Line type="monotone" dataKey="Cuenta de ahorros bancaria" stroke="#82ca9d" />
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


