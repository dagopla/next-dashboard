'use client';
import React from 'react'
import { SimpleWidget } from '..'
import { IoHeartCircleOutline } from 'react-icons/io5'
import { useAppSelector } from '@/sotre'

export const WidgetsGrid = () => {
    const count=useAppSelector(state=>state.counter.count);
  return (
    <div className="flex flex-wrap p-2">
        <SimpleWidget title={count.toString()} subTitle={'Products added'} icon={<IoHeartCircleOutline size={40}/>} href={''} label={'Counter'}        
        />
      </div>
  )
}
