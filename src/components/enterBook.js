import React, { Component } from "react";
import axios from 'axios';
import { newExpression } from '@babel/types';
import { Link } from 'react-router-dom';

class EnterBook extends React.Component{
    constructor(props) {
        super(props);
        this.state = { Title: '', Author: '', Summary: '', Genres:'', SelectedOption: '' };

        this.handleChangeBookTitle = this.handleChangeBookTitle.bind(this);
        this.handleChangeBookAuthor = this.handleChangeBookAuthor.bind(this);
        this.handleChangeBookSummary = this.handleChangeBookSummary.bind(this);
        this.handleChangeBookGenres = this.handleChangeBookGenres.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        alert("Title: " + this.state.Title + "\nAuthor: " + this.state.Author + "\nSummary: " + this.state.Summary + 
            "\nGenres: " + this.state.Genres + "\nOption picked: " + this.state.SelectedOption);
        e.preventDefault();

        const newBook = {
            title: this.state.Title,
            author: this.state.Author,
            summary: this.state.Summary, 
            genres: this.state.Genres,
            selectedOption : this.state.SelectedOption
        }; 

        axios.post('http://localhost:4000/api/books',newBook) 
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

    render(){
        return(
            <div>
                <h2 className="header">Please Enter the Books Details</h2>

                <form onSubmit={this.handleSubmit}>
                    {/* Enter book details (name, author, summary) */}
                    <label className="label">
                        Book Title:
                    </label>
                    <div className = "form-group">
                        <input type="text" className="textarea" value={this.state.Title} onChange={this.handleChangeBookTitle}
                                placeholder="Please enter the title of your book"/>
                    </div> {/* title */}
                    <label className="label">
                        Author:
                    </label>
                    <div className = "form-group">
                        <input type="text" className="textarea" value={this.state.Author} onChange={this.handleChangeBookAuthor}
                                placeholder="Please enter the author of your book"/>
                    </div> {/* author */}
                    <label className="label">
                        Book Summary:
                    </label>
                    <div className = "form-group">
                        <textarea className="textarea" rows="6" value={this.state.Summary} onChange={this.handleChangeBookSummary}
                                placeholder="Please enter the summary of your book"/>
                    </div> {/* summary */}
                    <label className="label">
                        Genres:
                    </label>
                    <div className = "form-group">
                        <textarea className="textarea" rows="3" cols="10" value={this.state.Genres} onChange={this.handleChangeBookGenres}
                                placeholder="Please enter the genres of your book"/>
                    </div> {/* genres */}

                    {/* select category the book is in (finished, reading, will read) */}
                    <div className = "radio">
                        <p className="label">
                            Please select the category the book belongs to:
                        </p>
                    </div>

                    <div className="radio">
                        <label className="label">
                            <input type="radio" value="Finished Reading" className="form-control"
                                checked={this.state.SelectedOption === "Finished Reading"}
                                onChange={this.handleOptionChange}/>
                            Finished reading this Book
                        </label>
                    </div> {/* finished */}

                    <div className="radio">
                        <label className="label">
                            <input type="radio" value="Currently Reading" className="form-control"
                                checked={this.state.SelectedOption === "Currently Reading"}
                                onChange={this.handleOptionChange}/>
                            Currently reading this Book
                        </label>
                    </div> {/* reading */}

                    <div className="radio">
                        <label className="label">
                            <input type="radio" value="Will Read" className="form-control"
                                checked={this.state.SelectedOption === "Will Read"}
                                onChange={this.handleOptionChange}/>
                            Will read this Book
                        </label>
                    </div> {/* will read */}

                    <br  />

                    <div className = "form-group">
                        <input type="submit" value="Submit"/>
                    </div> {/* submit */}
                    <br  />
                </form>
            </div>
        )
    }
}

export default EnterBook;