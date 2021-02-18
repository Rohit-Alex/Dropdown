import React,{useState} from 'react';



const SelectState = (props) => {
    const [selectedState, setSelectedState] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);
    const [selectedLandmark, setSelectedLandmark] = useState(0);

    const handleStateSelect = (event) => {
        setSelectedState(event.target.value);
    };

    const handleCitySelect =(event) => {
        setSelectedCity(event.target.value);
    };

    const handleLandmarkSelect = (event) => {
        setSelectedLandmark(event.target.value);
    };
    return(
        <>
            <div id="mySelect">
                <label htmlFor="state">States:</label>
                <select id="state" value={selectedState} onChange={handleStateSelect}>
                    {props.states.map((item, itemIndex) => {
                        return <option key={itemIndex} value={itemIndex}>{item.name}</option>
                    })}
                </select><br/><br/>
                <label htmlFor="city">Cities: </label>
                <select id="city" value={selectedCity} onChange={handleCitySelect}>
                    {props.states[selectedState].city.map((item, itemIndex) => {
                        return <option key={itemIndex} value={itemIndex}>{item.name}</option>;
                    })}
                </select><br/><br/>
                <label htmlFor="landmark">Towns: </label>
                <select id="landmark" value={selectedLandmark} onChange={handleLandmarkSelect}>
                    {props.states[selectedState].city[selectedCity].landmarks.map((item, itemIndex) => {
                        return <option key={itemIndex} value={itemIndex}>{item.name}</option>;
                    })}
                </select>
            </div>
            <div id="myData">
                <div>
                    <div id="state-name">{props.states[selectedState].name}</div>
                    <div id="state-description">{props.states[selectedState].description}</div>
                </div><br/>
                <div>
                    <div id="city-name">{props.states[selectedState].city[selectedCity].name}</div>
                    <div id="city-description">{props.states[selectedState].city[selectedCity].description}</div>
                </div><br/>
                <div>
                    <div id="landmark-name">{props.states[selectedState].city[selectedCity].landmarks[selectedLandmark].name}</div>
                    <div id="landmark-description">{props.states[selectedState].city[selectedCity].landmarks[selectedLandmark].description}</div>
                </div>
            </div>
        </>
    );
};

export default SelectState;
