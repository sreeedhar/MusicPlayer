import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { Icon } from "react-icons-kit";
import { ic_arrow_back, ic_search } from "react-icons-kit/md";
import { getSearchResult } from "../actions/home";
import { Form, FormGroup, Input, Button } from 'reactstrap';

const Top = ({ props, getSearchResult, title, history }) => {
    const [state, setState] = useState({
        value: ""
    });

    const { value } = state;

    const onChange = e =>
        setState({ [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        getSearchResult(value);
        history.push('/player/search')
    };


    return (
        <div className="page-title-large">
            <div className="page-title-content f2 white">
                Redux Music Player

            </div>
            <div className="wrap">

                <Form className="form-inline ml-auto" onSubmit={e => onSubmit(e)}  >
                    <FormGroup className="no-border">
                        <Input type="text"
                            name="value"
                            className="search-term"
                            placeholder="Artists, tracks..."
                            value={value}
                            onChange={e => onChange(e)} />
                        <div className="pl2">
                            <Button onSubmit={e => onSubmit(e)}>Search</Button>
                        </div>

                    </FormGroup>

                </Form>

            </div>
        </div>
    )
}

Top.propTypes = {
    getSearchResult: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    title: state.home.title,
});

export default withRouter(connect(mapStateToProps, { getSearchResult })(Top));
