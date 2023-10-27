import React, { useState, useEffect } from 'react';

const DataList = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [moonPhase, setMoonPhase] = useState(1.0);

  useEffect(() => {
    let tempData = data;

    if (searchTerm !== '') {
      tempData = tempData.filter(row => 
        Object.values(row).some(val => 
          val ? val.toString().toLowerCase().includes(searchTerm.toLowerCase()) : false
        )
      );
    }

    if (moonPhase !== 1.0) {
      tempData = tempData.filter(row => row.phaseValue < moonPhase);
    }

    // alert("Filtered data: "+moonPhase + JSON.stringify(tempData)); // Alert filtered data

    setFilteredData(tempData);

  }, [searchTerm, moonPhase, data]);

  const handleSearch = () => {
    // The actual search is handled in useEffect
  };

  return (
    <div className="List">
      <div className="filters">
        <div className="dateFilter">
          <input 
            type="text" 
            placeholder="Enter Date" 
            onChange={e => setSearchTerm(e.target.value)} 
            value={searchTerm}
          />
        </div>
       <div className="phaseFilter">
          <label>Moon Phase:</label>
          <input 
            type="range" 
            name="moonphase" 
            min="0.0" 
            max="1.0" 
            step="0.1" 
            onChange={e => setMoonPhase(parseFloat(e.target.value))} 
          />
        </div>

        <button className="btn" onClick={handleSearch}>Search</button>
      </div>
      <div className="table">
        <table>
         <thead>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Time</th>
              <th>Phase</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.temperature} °F</td>
                <td>{row.time}</td>
                <td>{row.phase}</td>
                <td>{row.link}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataList;
