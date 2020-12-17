import React from 'react';
import { TextField } from '../../components';

const TextFieldDemo = () => (
  <div>
    <p><b>This is a Disabled Input</b></p>
    <TextField disabled="This is a disable" value="disabled input" />
    <p><b> A Valid Input</b></p>
    <TextField value="accessible" />
    <p><b>An input with Errors </b></p>
    <TextField error="Could not be more than" value="101" />
  </div>
);

export default TextFieldDemo;