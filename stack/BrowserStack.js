class BrowserStack {
    #backStack = []
    #forwardStack = []
    constructor () {
         this.#backStack = []
         this.#forwardStack = []
         this.current = null
    }

    visit(domain) {
        if(this.current) this.#backStack.push(this.current)
            this.current = domain
        this.#forwardStack = []
    }

    goBack() {
        if(this.#backStack.length > 0) {
            this.#forwardStack.push(this.current)
            this.current = this.backStack.pop()
        }
    }

    goForward() {
        if(this.#forwardStack.length > 0) {
            this.#backStack.push(this.current)
            this.current = this.#forwardStack.pop()
        }
    }

    getCurrent() {
        return this.current
    }
}

export default BrowserStack