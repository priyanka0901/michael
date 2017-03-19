'use strict';

import React from 'react';
import machine from '../data/data.js';

const ViewLayout = React.createClass({
    selectHandle:function(e){
        if($(e.target).hasClass('card__image') && $(e.target).children().css('display') === 'none'){
            $(e.target).children().css('display', 'flex');
        }else if($(e.target).hasClass('select-effect')) {
            $(e.target).css('display', 'none');
        }else if($(e.target).parent().hasClass('select-effect')){
            $(e.target).parent().css('display', 'none');
        }
    },
    render: function(){
        return (
            <div className="pure-u-lg-1-2 pure-u-md-1-2 pure-u-sm-1">
                <div className="machine-layout" onClick={this.selectHandle}>
                    <div className="card__image" style={{backgroundImage:"url(" + this.props.image + ")"}}>
                        <div className="select-effect">
                            <img src="../../assets/images/right.svg" />
                        </div>
                    </div>
                    <p className="card__name">{this.props.name}</p>
                </div>
            </div>
        ); 
    }
});

const Card = React.createClass({
    handleKeyPress:function(){
        $("#search").on("keyup", function() {
            var g = $(this).val().toLowerCase();
            $(".card__name").each(function() {
                var s = $(this).text().toLowerCase();
                console.log(s.indexOf(g)!= -1);
                if(s.indexOf(g)!= -1){
                   $(this).parent().parent().css('display','inline-block');
                }
                else{
                    $(this).parent().parent().css('display','none');
                }
            });
        });
    },
    createCard: function(data){
        return <ViewLayout name={data.name} image={data.image} key={data.id} />;
    },
    createCards: function(machine){
        return machine.map(this.createCard);
    },
    render: function(){
        return (
            <div className="viewlayout">
                <form className="search__form">
                    <input name="search" placeholder="search" className="search" id="search" onKeyPress={this.handleKeyPress}/>
                </form>
                <div className="pure-g pad__top">
                    {this.createCards(machine)}
                </div>
            </div>
        );
    }
});



export { Card };


