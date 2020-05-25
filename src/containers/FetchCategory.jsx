import { connect } from 'react-redux'
import { actions } from '../actions/actions'
import Category from "../components/Category";


const { getNewsByCategory } = actions;

const mapStateToProps = state => ({
  newsCategory: state.newsCategory,
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onGet: ( (category) => dispatch(getNewsByCategory(category)))
// })

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (dispatch(getNewsByCategory()))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category)