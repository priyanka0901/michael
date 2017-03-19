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
                <div className="logo"><img src="assets/images/logo.svg" /><p>michael</p></div>
                <div className="form-layout">
                    
                    <form id="myForm" className="machine__form">
                    <p className="machine-para"> Add your machine </p>
                        <div className="form-para">
                            <label htmlFor ="fullname" className="label-para">Full Name</label>
                            <input type="text" name="fname" id="fullname" className="form-input" pattern="[A-Za-z]{1,32}" required/>
                        </div>

                        <div className="form-para">
                            <label htmlFor ="serial" className="label-para">Serial No.</label>
                            <input type ="text" id="serial" name="serial" className="form-input" required/>
                        </div>

                        <div className="img-preview form-para previewComponent">
                            {$imagePreview}
                        </div>

                        <div className="button-conatiner">
                            <div className="button-box">
                                <button className="button" type="submit">Add Machine</button>
                            </div>
                            <div className="input-container">
                                <label className="typefile__input">
                                  <img src="assets/images/photoattach.svg" />
                                  <input type="file" onChange={(e)=>this._handleImageChange(e)} />
                                </label>
                                <label className="typefile__input">
                                    <img src="assets/images/attach.svg" className="input__img" />
                                    <input className="fileInput" type="file" onChange={(e)=>this._handleDocChange(e)} />
                                </label> 
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
});
    


export default FormLayout;