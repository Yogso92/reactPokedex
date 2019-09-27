import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:""
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onSearch(this.state.search);
        this.setState({search : ""});
    }

    render() {
        const isDisabled = this.state.search.trim().length < 1;

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="search" value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})} />
                <input type="submit" value={this.props.btnSend} disabled={isDisabled} />
            </form>
        );
    }
}

SearchBar.defaultProps = {
    btnSend: "Envoyer",
    onSearch: () => {}
}

export default SearchBar;