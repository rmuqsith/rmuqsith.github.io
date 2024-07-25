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
                        ><i class="bi bi-person-fill"></i
                    ></a>
                    </li>

                    <li class="bold">
                    <!-- mdi-av-web small
                        mdi-av-my-library-books small-->
                    <a
                        aria-label="Navigate to the Projects section"
                        href="/portfolio/game-design"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-joystick"></i
                    ></a>
                    </li>

                    <li class="bold">
                    <!-- mdi-av-web small
                        mdi-av-my-library-books small-->
                    <a
                        aria-label="Navigate to the Projects section"
                        href="/portfolio/programming"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-code"></i
                    ></a>
                    </li>

                    <li class="bold">
                    <!-- mdi-av-web small
                        mdi-av-my-library-books small-->
                    <a
                        aria-label="Navigate to the Projects section"
                        href="/portfolio/game-art"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-brush"></i
                    ></a>
                    </li>

                    <li class="bold">
                    <!-- mdi-av-web small
                        mdi-av-my-library-books small-->
                    <a
                        aria-label="Navigate to the Projects section"
                        href="/portfolio/misc"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-collection-fill"></i
                    ></a>
                    </li>

                    <li class="bold">
                    <!-- mdi-av-web small
                        mdi-av-my-library-books small-->
                    <a
                        aria-label="Navigate to the Contact section"
                        href="/contact"
                        class="waves-effect waves-dark white-text nav__link"
                        ><i class="bi bi-card-text"></i
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
        <div class="container-center"  style="margin-top: 200px;margin-bottom: 20px;">
            <h6 style="font-weight: 600;">See Also:</h6>
        </div>
        <div class="container-center">
              <div class="row">
                <div class="buttons">
                  <a href="/" class="bot-button">
                    Back to Home
                  </a>
                  <a href="../contact" class="bot-button p__button">
                    Contact
                  </a>
                  <a href="/portfolio/game-design" class="bot-button p__button">
                    Game Design
                    <i class="bi bi-joystick"></i>
                  </a>
                  <a href="/portfolio/programming" class="bot-button p__button">
                    Programming
                    <i class="bi bi-code"></i>
                  </a>
                  <a href="/portfolio/game-art" class="bot-button p__button">
                    Game Art
                    <i class="bi bi-brush"></i>
                  </a>
                  <a href="/portfolio/misc" class="bot-button p__button">
                    Misc
                    <i class="bi bi-collection-fill"></i>
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
        <div>
          <div class="card">
            <div class="card-content">
              <div class="row">
                <div class="buttons">
                  <a href="/portfolio/game-design" class="linebutton">
                    Game Design
                    <i class="bi bi-joystick"></i>
                  </a>
                  <a href="/portfolio/programming" class="linebutton">
                    Programming
                    <i class="bi bi-code"></i>
                  </a>
                  <a href="/portfolio/game-art" class="linebutton">
                    Game Art
                    <i class="bi bi-brush"></i>
                  </a>
                  <a href="/portfolio/misc" class="linebutton">
                    Misc
                    <i class="bi bi-collection-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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