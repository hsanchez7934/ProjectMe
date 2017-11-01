import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import './SchoolData.css';
import govKey from '../../govkey.js';

export default class SchoolData extends Component {
  constructor() {
    super();
    this.state ={
      dropOutData: null,
      collegeEnrollmentData: null,
      disconnectedYouthData: null
    };
  }

  componentDidMount() {
    this.dropOutData();
    this.collegeEnrollmentData();
    this.disconnectedYouthData();
  }

  dropOutData = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.ed.gov/data/mbk-highschool-dropout?api_key=${govKey}`;
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(res => {
        let tempArr = [];
        let dataArray = res.resources;
        for (let i = 0; i < dataArray.length - 5; i++) {
          tempArr.push({year: dataArray[i].Year, percentage: parseFloat(dataArray[i].Percentage)});
        }
        this.setState({
          dropOutData: tempArr
        });
      });
  }

  collegeEnrollmentData = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.ed.gov/data/mbk-college-enrollment?api_key=${govKey}`;
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(res => {
      let tempArr = [];
      let dataArray = res.resources;
      for (let i = 0; i < dataArray.length - 6; i++) {
        tempArr.push({year: dataArray[i].Year, percentage: parseFloat(dataArray[i].Percentage)});
      }
      this.setState({
        collegeEnrollmentData: tempArr
      });
    })
  }

  disconnectedYouthData = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.ed.gov/data/mbk-disconnected-youth?api_key=${govKey}`;
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(res => {
      let tempArr = [];
      let dataArray = res.resources;
      for (let i = 0; i < dataArray.length - 5; i++) {
        tempArr.push({year: dataArray[i].Year, percentage: parseFloat(dataArray[i].Percentage)});
      }
      this.setState({
        disconnectedYouthData: tempArr
      });
    })
  }

  render() {
    return (
      <div className='graphs-container'>
        <header className='graphs-container-header'>
          <h1>Project Me</h1>
        </header>

        <div className='bar-graph'>
          <div className='title-description-container'>
            <h1 className='data-title'>Dropout Data</h1>
            <p className='data-description'>
              They've worked
              hard all their lives, many times only to see
              their jobs shipped overseas or their pension
              dumped after a lifetime of labor. To President
              Clinton, who last night made the case for change
              as only he can make it; to Ted Kennedy, who embodies
              the spirit of service; and to the next Vice President
              of the United States, Joe Biden, I thank you.
            </p>
          </div>
          <div className='graph-container'>
            <VictoryChart
              domain={{y: [0, 100]}}
              domainPadding={{x: 20}}
              width={800}
              height={400}>
              <VictoryAxis />
              <VictoryAxis
                dependentAxis={true}
              />
              <VictoryBar
                labels={(d) => `${d.percentage}%`}
                data={this.state.dropOutData}
                x='year'
                y='percentage'
                style={{
                  parent: {border: "1px solid #000"},
                  data: {fill: '#c0b283'},
                  labels: {fontSize: 12}
                }}
              />
            </VictoryChart>
          </div>
        </div>

        <div className='bar-graph'>
          <div className='title-description-container'>
            <h1 className='data-title'>College Enrollment</h1>
            <p className='data-description'>
              They've worked hard all their lives,
              many times only to see their jobs shipped
              overseas or their pension dumped after a
              lifetime of labor. To President Clinton, who
              last night made the case for change as only he
              can make it; to Ted Kennedy, who embodies the
              spirit of service; and to the next Vice President
              of the United States, Joe Biden, I thank you.
            </p>
          </div>
          <div className='graph-container'>
            <VictoryChart
              domain={{y: [0, 100]}}
              domainPadding={{x: 20}}
              width={800}
              height={400}>
              <VictoryAxis />
              <VictoryAxis
                dependentAxis={true}
              />
              <VictoryBar
                labels={(d) => `${d.percentage}%`}
                data={this.state.collegeEnrollmentData}
                x='year'
                y='percentage'
                style={{
                  parent: {border: "1px solid #000"},
                  data: {fill: '#c0b283'},
                  labels: {fontSize: 12}
                }}
              />
            </VictoryChart>
          </div>
        </div>

        <div className='bar-graph'>
          <div className='title-description-container'>
            <h1 className='data-title'>Disconnected Youth</h1>
            <p className='data-description'>
              They've worked hard all their lives,
              many times only to see their jobs shipped
              overseas or their pension dumped after a
              lifetime of labor. To President Clinton,
              who last night made the case for change as
              only he can make it; to Ted Kennedy, who
              embodies the spirit of service; and to the
              next Vice President of the United States,
              Joe Biden, I thank you.
            </p>
          </div>
          <div className='graph-container'>
            <VictoryChart
              domain={{y: [0, 100]}}
              domainPadding={{x: 20}}
              width={800}
              height={400}>
              <VictoryAxis />
              <VictoryAxis
                dependentAxis={true}
              />
              <VictoryBar
                labels={(d) => `${d.percentage}%`}
                data={this.state.disconnectedYouthData}
                x='year'
                y='percentage'
                style={{
                  parent: {border: "1px solid #000"},
                  data: {fill: '#c0b283'},
                  labels: {fontSize: 12}
                }}
              />
            </VictoryChart>
          </div>
        </div>

      </div>
    );
  }
}
