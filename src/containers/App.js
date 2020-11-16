import React, {Component} from 'react';
import {connect} from 'react-redux';
import loader from './loader.svg';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import './App.css';

import {setSearchField, requestRobots} from '../actions.js';

const MapStateToProps = state => {
  return {
    searchField : state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots : () => requestRobots(dispatch)
  }
}

class App extends Component {

componentDidMount() {
  
   this.props.onRequestRobots()
  
  }

 render() { 
      const {searchField, onSearchChange, robots, isPending} = this.props;
      const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
   return (
         <div className='tc'>
           <h1 className='f1'>RoboFriends</h1>
           <SearchBox searchChange={onSearchChange}/>
           <Scroll>
           {isPending ? <img src={loader} alt='loader' className='loader' />  :
            <ErrorBoundary>
             <CardList robots={filteredRobots} />
            </ErrorBoundary>
          }
           
           </Scroll>
         </div>
       );
    }
    }
    
  


export default connect(MapStateToProps,MapDispatchToProps)(App);