import * as React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import './PlaceChooser.scss'

interface Props {
  handleSelect: (address: string) => void
  addressFromUserLocation?: string
}

export class PlaceChooser extends React.PureComponent<Props, {address: string}> {
  state = {
    address: ''
  }

  componentWillReceiveProps (nextProps: Readonly<Props>, nextContext: any): void {
    if (nextProps.addressFromUserLocation !== this.props.addressFromUserLocation) {
      this.setState({ address: nextProps.addressFromUserLocation })
    }
  }

  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = (selected) => {
    const { handleSelect } = this.props

    this.setState({  address: selected })
    handleSelect(selected)
  }

  render () {
    return (
      <div className='autocomplete__wrapper'>
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
                  className: 'autocomplete__input'
                })}
              />
              <div className='autocomplete__container'>
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = `suggestion__item ${suggestion.active ? 'suggestion__item--active' : '' }`

                  return (
                    <div
                      key={suggestion.placeId}
                      {...getSuggestionItemProps(suggestion, {
                        className
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    )
  }
}
