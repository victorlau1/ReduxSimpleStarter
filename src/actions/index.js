import { connect } from 'react-redux';

export function selectBook(book) {
    console.log('Book selected', book.title)
    return {
        type: 'SELECTED_BOOK',
        payload: book
    }
}

