'use strict';

import React from 'react';
var FileInput = require('react-file-input');

const FormLayout = React.createClass({
        getInitialState:function() {
            return (
                this.state = {file: '',imagePreviewUrl: ''}
            );
        },
        getInitialState:function() {
            return (
                this.state = {docfile: '',docPreviewUrl: ''}
            );
        },

        _handleImageChange(e) {
            e.preventDefault();
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {
              this.setState({
                file: file,
                imagePreviewUrl: reader.result
              });
            }
            reader.readAsDataURL(file)
        },

        _handleDocChange(e) {
           e.preventDefault();
           let reader = new FileReader();
           let file = e.target.files[0];
           reader.onloadend = () => {
             this.setState({
               file: file
             });
            }
            reader.readAsDataURL(file)
        },

        render:function(){
            let {imagePreviewUrl} = this.state;
            let $imagePreview = null;
            if (imagePreviewUrl) {
                $imagePreview = (<img src={imagePreviewUrl} />);
            }
            else {
                $imagePreview = (<div className="previewText">Choose image to upload</div>);
            }
        return(
            <div className="sidebar">
                <p className="logo">Michael</p>
                <div className="form-layout">
                    <p className="add-machine">Add your machine </p>
                    <form id="myForm">
                        <div className="form-para">
                            <label htmlFor ="fullname" className="label-para">Full Name</label>
                            <input type="text" name="fname" id="fullname" className="form-input" pattern="[A-Za-z]{1,32}" required/>
                        </div>

                        <div className="form-para">
                            <label htmlFor ="serial" className="label-para">Serial No.</label>
                            <input type ="text" id="serial" name="serial" className="form-input" required/>
                        </div>

                        <div className="docfile form-para">
                            <label htmlFor = "docfile" className="label-para">Attach Documents</label>
                            <input className="fileInput" type="file" onChange={(e)=>this._handleDocChange(e)} />
                        </div>

                        <div className="previewComponent form-para">
                            <div className="img-preview">
                                {$imagePreview}
                             </div>
                            <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
                        </div>

                        <div className="submit-button">
                            <button className="button" type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});
    


export default FormLayout;