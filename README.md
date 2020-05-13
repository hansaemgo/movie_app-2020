# Movie_app_2020

React JS 

### map
const friends = ['dal', 'mark', 'lynn', 'korean guy'];
friends.map(function(friends){ return friends + " ❤"})
 ["hansaem ❤", "namu ❤", "songchul ❤", "hanna ❤"]
0: "hansaem ❤"
1: "namu ❤"
2: "songchul ❤"
3: "hanna ❤"



-  매 순간 setState를 호출할때 마다 react는 새로운  state와 함께 render function을 호출 할꺼야

State and Lifecycle
	constructor(props) {
		super(props);
		console.log('hello');
	}
	componentDidMount() {
		console.log('component rendered');
	}
	componentDidUpdate() {
		console.log('i just updated');
	}
	componentWillUnmount() {
		console.log('goodboy, byebye');
	}
('https://yts-proxy.now.sh/list_movies.json');
    


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
   import React from 'react';
// import axios from 'axios';

class App extends React.Component {
	state = {
		isLoading: true,
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 6000);
	}
	render() {
		const { isLoading } = this.state;
		return <div> {isLoading ? 'Loading...' : ' we are ready'} </div>;
	}
}

export default App;
 