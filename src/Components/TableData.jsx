import 'bootstrap/dist/css/bootstrap.min.css';
import { IoTimeSharp } from "react-icons/io5";
import axios from 'axios'
import {React,useEffect,useState} from 'react'
import { Table } from 'reactstrap'
import apiData from 'services/apiServices'
export default function TableData() {
const [data, setdata] = useState({})
const fetchData=async ()=>{
await axios.request(apiData).then(Response=>{console.log(JSON.stringify(Response))
    setdata(Response.data)}).catch(Error=>console.error(Error));
}
useEffect(() => {
const timer=setTimeout(()=>fetchData(),2000)
return ()=>clearTimeout(timer)
}, [])

    return (
            <Table dark>
                <thead>
                    <tr>
                        <th>
                            SR.No
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Region
                        </th>
                        <th>
                            Country
                        </th>
                        <th>
                            Wind Speed (kph)
                        </th>
                        <th>
                            Temp
                        </th>
                        <th>
                        <IoTimeSharp />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(data)?.map((DATA,index)=>{
                            const {location,current}=DATA
                            return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{location?.name}</td>
                                        <td>{location?.region}</td>
                                        <td>{location?.country}</td>
                                        <td>{current?.wind_kph}</td>
                                        <td>{current?.temp_c}<span>&#8451;</span></td>
                                        <td>{location?.localtime}</td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
    )
}
