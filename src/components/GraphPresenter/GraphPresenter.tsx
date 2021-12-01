
import React, { useEffect, useState } from 'react'
import { MainLayout } from '../MainLayout';
import { Stack } from '@mui/material';
import { headerHeight } from '../../styles/StyledVariables';

import axios from 'axios';
import { Graph } from '../Graph/Graph';

export const GraphPresenter: React.FC = () => {

    const [data, setData] = useState([]);

    const formatData = (data: any) => {
        return data.map((currenValue: any) => {
            const innerData: any = { ...currenValue.data };
            const result = innerData.series.map((currentValue: any) => {
                return [new Date(currentValue[0]), currentValue[1][1]]
            })

            return {
                type: 'line',
                name: innerData.displayName,
                data: result
            }
        })
    }

    useEffect(() => {

        const fecthData = async () => {
            const result = await Promise.all(
                [axios.get('http://takehome-frontend.oden.network/?metric=cable-diameter') as any,
                axios.get('http://takehome-frontend.oden.network/?metric=line-speed') as any,
                axios.get('http://takehome-frontend.oden.network/?metric=motor-rpm') as any
            ])
            setData(formatData(result));
            ;

        }
       const interval = setInterval(()=>{
            fecthData();
        }, 1000)

        return ()=> clearInterval(interval)
      

    }, [])


    return (
        <MainLayout>
            <Stack spacing={2} direction="column" justifyContent="center" sx={{ height: `calc(100vh - ${headerHeight})` }}
                alignItems="center">

              <Graph data={data}/>

            </Stack>

        </MainLayout>
    )
}
