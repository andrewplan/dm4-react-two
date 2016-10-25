import React from 'react';
import { Link } from 'react-router';

import { getCharacters } from '../../shared/services/swapiService.jsx';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            people: []
        }
    }

    componentWillMount() {
        getCharacters()
            .then( response => this.setState( { people: response.body.results } ) );
    }

    // renderPeople() {
    //
    // }

    render() {
        const people = this.state.people
            .map( ( person, index ) => (
                <Link key={ index } to={ `/characters/${ index + 1 }` }>
                    <li>{ person.name }</li>
                </Link>
            ) );

        return (
            <main>
                <ul>
                    { people }
                </ul>
            </main>
        );
    }
}
