import * as React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import './PlaceChooser.scss'

interface Props {
  handleSelect: (address: string) => void
}

export class PlaceChooser extends React.PureComponent<Props, {address: string}> {
  state = {
    address: '',
  };

  handleChange = address => {
    console.log('change', address);
    this.setState({ address });
  };

  handleSelect = (selected) => {
    const { handleSelect } = this.props;
    this.setState({  address: selected });
    handleSelect(selected);
  }

  render() {
    return (
      <div className="autocomplete__wrapper">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete__container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion__item suggestion__item--active'
                    : 'suggestion__item';
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}
