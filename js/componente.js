const template = document.createElement('template');
template.innerHTML =
`<style>
            .card{
                background-color: white;
                width: 230px;
                height: auto;
                padding: 30px;
                border-radius: 8px;
                display: flex;
                display: block;
                justify-content: center;
                align-item: center;
                text-align: center;
                margin: 10px auto;
            }
        
            img{
                margin: auto;
                width: 90px;
                display:block;
                border-radius: 10px;
            }

            h2 {
                display:block;
                text-aling: center;
                font-family: 'Times New Roman', Times, serif;
                font-weight: bold;
                cursor: pointer;
            }
            h2:hover {
                color:#525252;
            }
            p {
                color:   #7A7A7A ;
                text-aling: center;
                font-family: 'Times New Roman', Times, serif;
                font-weight: 500;
                font-size: 17px;
            }
            </style>
                <div class="card">
                    <img src= />
                    <h2 id="open">  </h2>
                    <p></p>
                </div>
            `
;

class componente extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});

    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        //nombre pais
        let nombre = this.shadowRoot.querySelector('h2');
        nombre.innerText = this.getAttribute('name');

        //La bandera del país
        this.shadowRoot.querySelector('img').src = this.getAttribute('img');

        //Nombre oficial del país
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('official')
        let click = this.shadowRoot.querySelector('#open');

    }
}

window.customElements.define('pais-es', componente);