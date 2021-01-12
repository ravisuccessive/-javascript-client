import React from 'react';
import { TextField, SelectField, RadioField } from '../../components';
import { selectOptions, radioOptionsCricket, radioOptionsFootball } from '../../configs/constants'

class InputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value }, () => {
    console.log(this.state);
    });
    }
    
    handleSportChange = ({ target: { value } }) => {
    this.setState({ sport: value === 'Select' ? '' : value });
    return value === 'cricket' ? this.setState({ football: '' }) : this.setState({ cricket: '' }, () => console.log(this.state));
    }
    
    handlePositionChange = (e) => {
    const { sport } = this.state;
    return sport === 'cricket' ? this.setState({ cricket: e.target.value }, () => console.log(this.state)) : this.setState({ football: e.target.value }, () => console.log(this.state));
    }
      radioOption = () => {
        let { radioValue } = this.state;
        const { sport } = this.state;
        if (sport === 'cricket') {
          radioValue = radioOptionsCricket;
        }if (sport === 'football') {
          radioValue = radioOptionsFootball;
        }
        return (radioValue);
      };

      render() {
        const { sport } = this.state;
        return (
          <>
            <div>
              <p><b>Name:</b></p>
              <TextField error="" value={this.state.name} onChange={this.handleNameChange} />
              <p><b>Select the game you play?</b></p>
              <SelectField
                error=""
                onChange={this.handleSportChange}
                options={selectOptions}
                defaultText="Select"
              />
              <div>
                {
                  !sport ? ''
                    : (
                      <>
                        <p><b>What you do?</b></p>
                        <RadioField
                          error=""
                          options={this.radioOption()}
                          onChange={this.handlePositionChange}
                        />
                      </>
                    )
                }
              </div>
            </div>
          </>
        );
      }
}
export default InputDemo;