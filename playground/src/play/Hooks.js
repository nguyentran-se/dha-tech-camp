import React, { useEffect, useMemo, useState } from 'react';
import { fakeLoginApi, filterCityByName } from '../utils';
import citiesJson from '../utils/us-cities.json';

function Children({}) {
  console.log('%c [Children]: rendering...', 'color: green');
  useEffect(() => {
    console.log('%c [Children]: useEffect callback', 'color: green');
    return () => {};
  }, []);

  return <p>I'm hooks children</p>;
}
// eslint-disable-next-line no-func-assign
Children = React.memo(Children);//prevProps.someProp === nextProps.someProp

function Parent() {
  const [count, setCount] = useState(0);
  // const [cityName, setCityName] = useState('');

  function increase() {
    setCount((p) => p + 1);
  }

  function decrease() {
    setCount((p) => p - 1);
  }

  // const filteredCities = useMemo(() => filterCityByName(citiesJson, cityName), [cityName])
  // const filteredCities = filterCityByName(citiesJson,cityName);
  useEffect(() => {
    console.log('%c [Parent]: useEffect callback', 'color: salmon');
    return () => {};
  }, []);

  // const cities = filteredCities.slice(0, 100);

  console.log('%c [Parent]: rendering...', 'color: salmon');
  return (
    <div>
      <h2 onClick={increase}>Parent</h2>
      <p>You clicked {count} times</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease} className="btn-clear">
        Decrease
      </button>
      <Children />
      {/* <input type="text" onChange={(e) => setCityName(e.target.value)} value={cityName} /> */}
      {/* <Cities cities={cities} /> */}
    </div>
  );
}

export default Parent;

function Cities({ cities }) {
  return (
    <div style={{ overflow: 'auto', height: 300, border: '1px solid #cccc' }}>
      {cities.map((c, index) => (
        <p key={index}>{c.name}</p>
      ))}
    </div>
  );
}
