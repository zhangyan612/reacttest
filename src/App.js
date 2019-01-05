import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import PivotTable from 'react-pivottable/PivotTable'; // possible to save the rendered result
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import data from './data';
import './App.css';

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

// see documentation for supported input formats
//const data = [['attribute', 'attribute2'], ['value1', 'value2']];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="App">
            <PivotTableUI
                data={data}
                onChange={s => this.setState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...this.state}
            />

            <div className="row">
            <PivotTable  data={data}
                            onChange={s => this.setState(s)}
                            renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                            {...this.state}
                        
                        />
            </div>

      </div>

    );
  }
}


export default App;
