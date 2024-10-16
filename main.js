class NavSidebar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <nav class="hide-on-small-only">
                <ul class="side-nav fixed section table-of-contents">
                    <li class="bold">
                    <a
                        aria-label="Navigate to the About section"
                        href="/"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-house-fill"></i
                    ></a>
                    </li>

                    <li class="bold">
                    <a
                        aria-label="Navigate to the Projects section"
                        href="/portfolio/game-design"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-joystick"></i
                    ></a>
                    </li>

                    <li class="bold">
                    <a
                        aria-label="Navigate to the Projects section"
                        href="/portfolio/programming"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-code"></i
                    ></a>
                    </li>

                    <li class="bold">
                    <a
                        aria-label="Navigate to the Projects section"
                        href="/portfolio/creative-works"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-brush"></i
                    ></a>
                    </li>
                </ul>
            </nav>
        `
    }
}

class PortoButtons extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="container-center"  style="margin-top: 40px;margin-bottom: 20px;">
            <h6 style="font-weight: 600;">See Also:</h6>
        </div>
        <div class="container-center">
              <div class="row">
                <div class="buttons">
                  <a href="/" class="bot-button">
                    Back to Home
                  </a>
                  <a href="/portfolio/game-design" class="bot-button p__button">
                    Game Design
                    <i class="bi bi-joystick"></i>
                  </a>
                  <a href="/portfolio/programming" class="bot-button p__button">
                    Programming
                    <i class="bi bi-code"></i>
                  </a>
                  <a href="/portfolio/creative-works" class="bot-button p__button">
                    Creative Works
                    <i class="bi bi-brush"></i>
                  </a>
                </div>
              </div>
        </div>
        `
    }
}

class PortoButtonsHome extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        
                  <a href="/portfolio/game-design" class="line-button">
                    Game Design
                    <i class="bi bi-joystick"></i>
                  </a>
                  <a href="/portfolio/programming" class="line-button">
                    Programming
                    <i class="bi bi-code"></i>
                  </a>
                  <a href="/portfolio/creative-works" class="line-button">
                    Creative Works
                    <i class="bi bi-brush"></i>
                  </a>
        `
    }
}

customElements.define('nav-sidebar', NavSidebar)
customElements.define('porto-buttons', PortoButtons)
customElements.define('porto-buttons-home', PortoButtonsHome)

const navLinkEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => 
{
    const navLinkPathname = new URL(navLinkEl.href).pathname;
    if(windowPathname == navLinkPathname)
    {
        navLinkEl.classList.add('active');

    }

});

const pButtons = document.querySelectorAll('.p__button');

pButtons.forEach(pCurrent =>
{
    const navLinkPathname = new URL(pCurrent.href).pathname;
    if(windowPathname == navLinkPathname)
        {
            pCurrent.remove();
        }
});