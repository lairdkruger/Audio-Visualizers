var curtainsLoaded = false

window.addEventListener('load', function() {
    $('#grid-section').hide()

    $('#begin-btn').click(function() {
        $('#begin-btn').hide()
        $('#hide-btn').show()

        $('#info-section').slideToggle()
        $('#grid-section').slideToggle()

        if (!curtainsLoaded) {
            setTimeout(function() {
                var curtainsGridScroller = new CurtainsGridScroller(
                    scrollShader.uniforms,
                    scrollShader.vertexShader,
                    scrollShader.fragmentShader
                )

                curtainsLoaded = true
            }, 500)
        }
    })
})

$('#grid-section').hide()
$('#hide-btn').hide()
$('#info-section').hide()

$('#title').click(function() {
    window.location.reload()
})

$('#hide-btn').click(function() {
    $('#hide-btn').hide()
    $('#begin-btn').show()

    $('#info-section').slideToggle()
    $('#grid-section').slideToggle()
})

$('.arachnid').click(function() {
    window.open('visualizers/2d/arachnid.html', '_blank')
})

$('.gemot').click(function() {
    window.open('visualizers/2d/gemot.html', '_blank')
})

$('.lollipop').click(function() {
    window.open('visualizers/2d/lollipop.html', '_blank')
})

$('.plasma').click(function() {
    window.open('visualizers/2d/plasma.html', '_blank')
})

$('.twistline').click(function() {
    window.open('visualizers/2d/twistline.html', '_blank')
})

$('.vinyl').click(function() {
    window.open('visualizers/2d/vinyl.html', '_blank')
})

$('.lines').click(function() {
    window.open('visualizers/3d/lines.html', '_blank')
})

$('.signals').click(function() {
    window.open('visualizers/3d/signals.html', '_blank')
})

$('.storm').click(function() {
    window.open('visualizers/3d/storm.html', '_blank')
})
