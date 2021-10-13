import {LitElement, html, css} from 'lit-element';

class InputLitElement extends LitElement{
    static get styles(){
        return css`
            .card{
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                border-radius: 5px;
                width: 300px;
            }
            .card:hover{
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }
            .container  {
                padding: 2px 16px;
            }
            .button{
                background-color: #008CBA;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);   
                border-radius: 5px;
            }
            .center{
                margin-top: 20px;
            }
        `;
    }
    
    // _handleClick(e){
    //     this.name = e.target.value;
    // }

    render(){
        return html`
            <div class="card">
                <input type="text" placeHolder="Enter Name" name="name" @change="${(e)=>this.name = e.target.value}"> 
                <button type="button" @click="${this._handleClick}">Say Hello</button class="button">
            </div>
            <div class="card center">
                 Hello! ${this.name}
            </div>
        `;
    }
    
    constructor(){
        super();
        this.name = "";
        this.url = "https://google.com";
        this.img = "https://img.icons8.com/cotton/2x/folder-invoices.png"
    }
    
    static get properties(){
        return{
            name: { type: String },
            url: { type: String},
            img: { type: String}
        };
    }

}

customElements.define('input-lit-element', InputLitElement);