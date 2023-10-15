import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import DataList from './components/DataList';
import './App.css'

function App() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York,%20NY?key=3C3DR7FPTDDTCSHRPTT4VBCZP&include=days&elements=id,temp,feelslikemin,tempmin,datetime,moonphase,sunrise,sunset,moonrise,moonset,description,visibility,conditions'
      );

      const result = await response.json();

      const getMoonPhaseEmoji = (moonPhase) => {
        if (moonPhase === 0) return '🌑';
        if (moonPhase > 0 && moonPhase < 0.2) return '🌒';
        if (moonPhase >= 0.2 && moonPhase < 0.3) return '🌓';
        if (moonPhase >= 0.3 && moonPhase < 0.7) return '🌔';
        if (moonPhase >= 0.7 && moonPhase < 1) return '🌕';
        return '';
      };

      setData(
        result.days.map((day) => ({
          date: day.datetime,
          temperature: `${day.temp} °F`,
          time: day.moonrise,
          phase: getMoonPhaseEmoji(day.moonphase),
          phaseValue: day.moonphase,
        }))
      );
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <Sidebar />
      <div className="App-page">
        <div className="App-row">
          <Card title="New York" content="New York, USA" />
          <Card title="14:25:39" content="Moon Rise" />
          <Card title="🌒" content="Moon Phase" />
          {/* More cards here */}
        </div>
        <div className="App-row">
          <DataList data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
