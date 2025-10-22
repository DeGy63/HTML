class MvMovie extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.ttl=this.getAttribute("title");
        this.img="adad";
        this.desc="adadadadadad";
        
        this.innerHTML = `
        <article class="card" role="region" aria-labelledby="${this.ttl}-title">
            <img src="${this.img}" alt="${this.ttl} image">
            <h2 id="${this.ttl}-title">${this.ttl}</h2>
            <p>${this.desc}</p>
      </article>`;
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldVal, newVal) {
    }

    adoptedCallback() {
    }

}

window.customElements.define('mv-movie', MvMovie);