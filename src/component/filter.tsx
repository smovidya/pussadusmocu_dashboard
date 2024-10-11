import React from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const Filter= () => {
  return (
    <div>
        <Input type='text' className='flex items-center border border-black rounded-md px-3 py-2 font-noto-sans'/>
        <Label/>
    </div>
  );
};

export default Filter;