import React, { Component } from 'react';

class Backlog extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card text-center mb-2">
                            <div class="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlog;