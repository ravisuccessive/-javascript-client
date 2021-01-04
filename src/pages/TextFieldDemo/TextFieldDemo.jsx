import React from 'react';

import { TextField } from '../../components';

import { Slider } from '../../components/Slider';

import { banners } from '../../configs/constants';


const TextFieldDemo = () => (
  <div>
    <Slider alt="No Image" duration="1000" height="300" random banner={banners} />
    <p><b>This is a Disabled Input</b></p>
    <TextField disabled value="disabled input" />
    <p><b> A Valid Input</b></p>
    <TextField value="accessible" />
    <p><b>An input with Errors </b></p>
    <TextField error="Could not be more than" value="101" />
  </div>
);

export default TextFieldDemo;