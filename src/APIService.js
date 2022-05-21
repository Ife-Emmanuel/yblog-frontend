import React, { Component } from 'react'

export class APIService extends Component {
    static UpdateArticle(action){
        switch(action.type){
            case 'innerForm':
                return fetch(`http://localhost:8000/api/articles/${action.newId}/`, {
                'method' : 'PUT',
                'headers' : {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Token 2f0edc6643c40aa81b2f4554adc0a0b708582dd3',
                },
                'body' : JSON.stringify(action.body)
            }).then(resp => resp.json())

            case 'outerForm':
                return fetch('http://localhost:8000/api/articles/', {
                    'method' : 'POST',
                    'headers' : {
                        'Content-Type' : 'application/json',
                        'Authorization' : 'Token 2f0edc6643c40aa81b2f4554adc0a0b708582dd3',
                    },
                    'body' : JSON.stringify(action.body)
                }).then(resp => resp.json())
        }
        
    }



    static PostArticle(body){
        return fetch('http://localhost:8000/api/articles/', {
            'method' : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token 2f0edc6643c40aa81b2f4554adc0a0b708582dd3'
            },
            body : JSON.stringify(body)
        })
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default APIService;