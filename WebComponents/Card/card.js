const template = document.createElement("template");
template.innerHTML = `
  <style>
    h3 { color: coral; }
  </style>

  <div class="card">
    <img/>
    <div>
      <h3 class="name"></h3>
      <div class="info">
        <p><slot name="email"></slot></p>
        <p><slot name="phone"></slot></p>
      </div>
      <button id="toggle">Hide Info</button>
    </div>
  </div>
`;

class AppCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");

    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }
}

window.customElements.define("user-card", AppCard);
