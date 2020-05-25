// import React, { Component } from "react";
// import Moment from "moment";
// import ArticleCard from "./ArticleCard"
// import styled from "styled-components"

// class FirstHome extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latestNews: [],
//     };
//   }

//   componentDidMount() {
//     const today = new Date();
//     const formatDateFrom = Moment(today).format("YYYY-MM-DD");
//     fetch(`https://api.canillitapp.com/latest/${formatDateFrom}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response;
//       })
//       .then((response) => response.json())
//       .then((response) => response.slice(0, 10))
//       .then((response) =>
//         this.setState({
//           latestNews: response,
//           loadedAll: true,
//         })
//       );
//   }

//   render() {      

//     const Column = styled.section`
//     float: left;
//     width: 25%
//       `;

//     const Container = styled.section`;
//     margin: 2em;
//     `;
    
//       console.log(this.state.latestNews)

//     return (

//          <Container>
//       <div>
//         {this.state.latestNews.map((oneNew) => (
//           <div key={oneNew.id}>
//               <Column>
//               <ArticleCard title={oneNew.title} image={oneNew.img_url} linkUrl={oneNew.url} source={oneNew.source_name} />
//               </Column>
//           </div>
//         ))}
//       </div>
//     </Container>
//     )


//   }
// }

// export default FirstHome;

