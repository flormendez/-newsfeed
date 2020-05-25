import { connect } from 'react-redux'
import { actions } from '../actions/actions'
import Home from "../components/Home";


const { getNews} = actions;

const mapStateToProps = state => ({
  news: state.news,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (dispatch(getNews()))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
  

