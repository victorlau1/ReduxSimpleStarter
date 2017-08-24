import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                onClick={() => this.props.selectBook(book)} 
                key={book.title} 
                className="list-group-item">{book.title}</li>
            )
        })
    }
    
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever returned here will show up as props
    return {
        books: state.books
    };
}


function mapDispatchToProps(dispatch) {
    //Whenener selectbook is called, the result should be passed 
    // to all our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}
// Refer to React Redux Documentation match props and make them to available to containers


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
