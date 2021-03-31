import React from 'react';
import Settings from '../constants/settings';
import CanvasJSReact from '../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SimpleChart extends React.Component {	

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        // build api call
        let symbol = 'GME';
        const API_KEY = Settings.API_KEY;
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
        console.log('URL: ', API_CALL);

        fetch(API_CALL)
        .then(
            function(response) {
              return response.json();
            }
        )
        // display data in console
        .then(
            function(data) {
                console.log(data);
            }
        )
    }

    render() {
      const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        // feed data into here
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Apple",  y: 10  },
                      { label: "Orange", y: 15  },
                      { label: "Banana", y: 25  },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                  ]
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }

// export to be used as SimpleChort
export default SimpleChart;
  