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
        this.setState({ name: e.target.value })
    }

    handleSportChange = ({ target: { value } }) => {
        const newSport = value === 'Select' ? '' : value
        this.setState({ sport: newSport, cricket: '', football: '' })
    }

    handlePositionChange = (e) => {
        const { sport } = this.state;
        this.setState({ [sport]: e.target.value })
    }
    radioOption = () => {
        let { radioValue } = this.state;
        const { sport } = this.state;
        if (sport === 'cricket') {
            radioValue = radioOptionsCricket;
        } if (sport === 'football') {
            radioValue = radioOptionsFootball;
        }
        return (radioValue);
    };

    render() {
        const { sport } = this.state;
        console.log(this.state);
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