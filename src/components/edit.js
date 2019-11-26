import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = { Title: '', Author: '', Summary: '', Genres:'', SelectedOption: '', _id:'' };

        this.handleChangeBookTitle = this.handleChangeBookTitle.bind(this);
        this.handleChangeBookAuthor = this.handleChangeBookAuthor.bind(this);
        this.handleChangeBookSummary = this.handleChangeBookSummary.bind(this);
        this.handleChangeBookGenres = this.handleChangeBookGenres.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // listening for a get request in server.js
        //alert(this.props.match.params.id);
        axios.get("http://localhost:4000/api/books/" + this.props.match.params.id)
        .then((response) =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Author:response.data.author,
                Summary:response.data.summary,
                Genres:response.data.genres,
                SelectedOption:response.data.selectedOption
            })
        })
        .catch();
    }

    handleChangeBookTitle(e) {
        this.setState({ Title: e.target.value });
    }

    handleChangeBookAuthor(e) {
        this.setState({ Author: e.target.value });
    }

    handleChangeBookSummary(e) {
        this.setState({ Summary: e.target.value });
    }

    handleChangeBookGenres(e) {
        this.setState({ Genres: e.target.value});
    }

    handleOptionChange(e) {
         this.setState({ SelectedOption: e.target.value });
    }

    // called when submit button is hit
    handleSubmit(e) {
        alert('Title: ' + this.state.Title + "\nAuthor: " + this.state.Author + "\nSummary: " + this.state.Summary + 
        "\nGenres: " + this.state.Genres + "\nOption picked: " + this.state.SelectedOption);
        e.preventDefault();

        const newBook = {
            title: this.state.Title,
            author: this.state.Author,
            summary: this.state.Summary, 
            genres: this.state.Genres,
            selectedOption : this.state.SelectedOption
        }; 

        axios.put('http://localhost:4000/api/books/' + this.state._id, newBook) 
          .then()
          .catch();

        this.setState({
            Title: '',
            Author: '',
            Summary: '',
            Genres: '',
            SelectedOption: ''
        });

    }

    render() {
        return (
            <div>
                <h2 style={{color:"white"}}>Please Edit your Book</h2>

                <form onSubmit={this.handleSubmit}>
                    {/* Enter book details (name, author, summary) */}
                    <div className = "form-group">
                        <label className="label">
                            Book Title:
                        </label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.handleChangeBookTitle}/>
                    </div> {/* title */}

                    <div className = "form-group">
                        <label className="label">
                            Author:
                        </label>
                        <input type="text" className="form-control" value={this.state.Author} onChange={this.handleChangeBookAuthor}/>
                    </div> {/* author */}

                    <div className = "form-group">
                        <label className="label">
                            Book Summary:
                        </label>
                        <textarea className="form-control" rows="6" value={this.state.Summary} onChange={this.handleChangeBookSummary}/>
                    </div> {/* summary */}

                    <div className = "form-group">
                        <label className="label">
                            Genres:
                        </label>
                        <textarea className="form-control" rows="3" value={this.state.Genres} onChange={this.handleChangeBookGenres}/>
                    </div> {/* genres */}

                    {/* select category the book is in (finished, reading, will read) */}
                    <div className = "form-group">
                        <p className="label">
                            Select Category Book Belongs to:
                        </p>
                    </div>

                    <div className="radio">
                        <label className="label">
                            <input type="radio" value="Finished Reading" className="form-control"
                                checked={this.state.SelectedOption === "Finished Reading"}
                                onChange={this.handleOptionChange}/>
                            Books Read
                        </label>
                    </div> {/* finished */}

                    <div className="radio">
                        <label className="label">
                            <input type="radio" value="Currently Reading" className="form-control"
                                checked={this.state.SelectedOption === "Currently Reading"}
                                onChange={this.handleOptionChange}/>
                            Books Reading
                        </label>
                    </div> {/* reading */}

                    <div className="radio">
                        <label className="label">
                            <input type="radio" value="Will Read" className="form-control"
                                checked={this.state.SelectedOption === "Will Read"}
                                onChange={this.handleOptionChange}/>
                            Books Will Read
                        </label>
                    </div> {/* will read */}

                    <br  />

                    <div className = "form-group">
                        <input type="submit" value="Submit" />
                    </div> {/* submit */}

                    <br  />
                </form>
            </div>
        );
    }
}

export default Edit;