import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import './SchoolData.css';
import govKey from '../../govkey.js';
import { connect } from 'react-redux';
import {
  fetchDropOutData,
  fetchCollegeEnrollmentData,
  fetchDisconnectedYouthData
} from '../../actions';

class SchoolData extends Component {

  componentDidMount() {
    this.props.fetchDropOutData();
    this.props.fetchCollegeEnrollmentData();
    this.props.fetchDisconnectedYouthData();
  }

  renderGraph = array => (
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
        data={array}
        x='year'
        y='percentage'
        style={{
          parent: {border: "1px solid #000"},
          data: {fill: '#c0b283'},
          labels: {fontSize: 12}
        }}
      />
    </VictoryChart>
  );


  render() {
    const {
      dropOutDataArray,
      collegeEnrollmentDataArray,
      disconnectedYouthDataArray
    } = this.props;
    return (
      <section className='graphs-container'>
        <header className='graphs-container-header'>
          <h1 className='school-data-title'>
            Mission Statement
          </h1>
        </header>

        <section className='school-data-prelude'>
          <h2 className='my-brothers-keeper'>
            My Brothers Keeper
          </h2>
          <p className='my-brothers-keeper-text'>
            My Brother’s Keeper Task Force recommended
            that government make available and encourage
            adoption of critical indicators of life
            outcomes for boys and young men of color
            and their peers. The Task Force intends
            to work with the Federal Statistical Agencies
            to make these and other relevant statistics
            available at the national level. Additionally,
            the Task Force will work with state and
            local agencies, innovators and social
            entrepreneurs and other stakeholders
            to create new tools and resources that
            allow local communities to use their local
            data to understand and develop strategies to
            improve youth outcomes. The Task Force and
            the Federal Interagency Forum on Child and
            Family Statistics have collected federal
            statistics on a number of national level
            indicators to provide an initial snapshot
            of young people’s well-being across multiple
            domains, including health, nutrition, poverty,
             education, economic opportunity and more.
          </p>
        </section>

        <div className='bar-graph'>
          <div className='title-description-container'>
            <h3 className='data-title'>
              High School Drop Out Rates
            </h3>
            <p className='data-description'>
              Percentage of 18-24 year olds who have not
              completed high school on the national level.
              2000-2014
            </p>
          </div>
          <div className='graph-container'>
            {
              this.renderGraph(dropOutDataArray)
            }
          </div>
        </div>

        <div className='bar-graph'>
          <div className='title-description-container'>
            <h3 className='data-title'>
              College Enrollment Rates
            </h3>
            <p className='data-description'>
              Percentage of 18-24 year olds enrolled in 2-4 year
              colleges on the national levels. 2000-2013
            </p>
          </div>
          <div className='graph-container'>
            {
              this.renderGraph(collegeEnrollmentDataArray)
            }
          </div>
        </div>

        <div className='bar-graph'>
          <div className='title-description-container'>
            <h3 className='data-title'>
              Rates Of Disconnected Youth
            </h3>
            <p className='data-description'>
              Percentage of 18- to 24-year-olds who were
              neither enrolled in school nor working.
              2000–2014 (so-called disconnected youth).
            </p>
          </div>
          <div className='graph-container'>
            {
              this.renderGraph(disconnectedYouthDataArray)
            }
          </div>
        </div>

      </section>
    );
  }
}

SchoolData.propTypes = {
  fetchDropOutData: PropTypes.func,
  fetchCollegeEnrollmentData: PropTypes.func,
  fetchDisconnectedYouthData: PropTypes.func,
  dropOutDataArray: PropTypes.array,
  collegeEnrollmentDataArray: PropTypes.array,
  disconnectedYouthDataArray: PropTypes.array
};

const mapStateToProps = store => ({
  dropOutDataArray: store.dropOutData,
  collegeEnrollmentDataArray: store.collegeEnrollmentData,
  disconnectedYouthDataArray: store.disconnectedYouthData
});

const mapDispatchToProps = dispatch => ({
  fetchDropOutData: () => dispatch(fetchDropOutData()),
  fetchCollegeEnrollmentData: () => dispatch(fetchCollegeEnrollmentData()),
  fetchDisconnectedYouthData: () => dispatch(fetchDisconnectedYouthData())
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolData);
