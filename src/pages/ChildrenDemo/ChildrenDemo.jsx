import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Math from '../../components/Math/Math';
import Theme from '../../theme';

class ChildrenDemo extends React.PureComponent {
  render() {
    return (
      <>
        <ThemeProvider theme={Theme}>
          <Math first={7} second={4} operator="+" />
          <Math first={7} second={3} operator="-" />
          <Math first={7} second={20} operator="*" />
          <Math first={7} second={0} operator="/" />
          <Math first={7} second={4} operator="+">
            {
              (first, second, result) => (
                <p>
                  {`Sum of ${first} and ${second} is equal to ${result}`}
                </p>
              )
            }
          </Math>
          <Math first={3} second={4} operator="+">
            {
              (first, second, result) => (
                <p>
                  {`When we add ${first} with ${second} then we will get ${result}`}
                </p>
              )
            }
          </Math>
        </ThemeProvider>
      </>
    );
  }
}
export default ChildrenDemo;