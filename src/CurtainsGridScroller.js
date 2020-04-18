const mathUtils = {
    lerp: (a, b, n) => n * (a - b) + b,
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    easeInCubic: t => t * t * t,
    easeOutCubic: t => --t * t * t + 1,
    easeInOutCubic: t =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - --t * t * t * t,
    easeInOutQuart: t => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
    easeInQuint: t => t * t * t * t * t,
    easeOutQuint: t => 1 + --t * t * t * t * t,
    easeInOutQuint: t =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
}

class CurtainsGridScroller {
    // basic setup for curtains.js
    constructor(uniforms, vertexShader, fragmentShader) {
        this.init(uniforms, vertexShader, fragmentShader)
    }

    init(uniforms, vertexShader, fragmentShader) {
        var _this = this

        this.scrollSpeed = 0
        this.checkScrollSpeed

        this.curtains = new Curtains({
            container: 'grid-canvas',
        })

        this.curtains.onError(function() {
            // we will add a class to the document body to display original images
            document.body.classList.add('no-curtains')
        })

        this.curtains.onScroll(function() {
            _this.handleScroll()
        })

        // create planes
        this.planes = []
        this.planeElements = document.getElementsByClassName('grid-curtain')

        this.params = {
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: uniforms,
        }

        // add planes and handle them
        for (var i = 0; i < this.planeElements.length; i++) {
            this.planes.push(this.curtains.addPlane(this.planeElements[i], this.params))

            this.setupPlanes(i)
        }

        this.curtains.enableDrawing
        this.curtains.needRender()
        this.render()
    }

    setupPlanes(index) {
        var plane = this.planes[index]
        this.curtains.needRender()

        // each plane has: a white image + image + a white image as its texture source
        this.imageTexture = plane.createTexture('uImageTexture')

        this.imageTexture.setSource(plane.images[0])
    }

    updateUniforms() {
        for (var i = 0; i < this.planes.length; i++) {
            var plane = this.planes[i]
            plane.uniforms.scrollSpeed.value = this.scrollSpeed
        }
    }

    handleScroll() {
        var speed = this.curtains.getScrollDeltas()
        this.scrollSpeed = speed.y / 1000
        this.updateUniforms()
    }

    render() {
        var _this = this

        this.scrollSpeed *= 0.9
        this.updateUniforms()

        window.requestAnimationFrame(function() {
            _this.render()
        })
    }
}
