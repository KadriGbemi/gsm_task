import "./App.css";
import React from "react";
import Layout from "./views/Layout";
import { getTaskLists } from "./api/request";

// function App() {
//   return (
//     <div className="App">
//       <Layout />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskLists: [] };
  }
  handleTaskListsData = () => {
    this.setState(() => ({
      taskLists: getTaskLists(),
    }));
  };
  componentDidMount() {
    this.interval = setInterval(() => this.handleTaskListsData(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Layout taskLists={this.state.taskLists} />;
  }
}

export default App;
