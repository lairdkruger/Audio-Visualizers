var scrollShader = {
    uniforms: {
        scrollSpeed: {
            name: 'uScrollSpeed',
            type: '1f',
            value: 0,
        },
    },

    vertexShader: `
        #ifdef GL_ES
        precision mediump float;
        #endif
  
        // default mandatory attributes
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;
    
        // those projection and model view matrices are generated by the library
        // it will position and size our plane based on its HTML element CSS values
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
    
        // texture coord varying that will be passed to our fragment shader
        varying vec2 vTextureCoord;
    
        void main() {
            // apply our vertex position based on the projection and model view matrices
            gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    
            // varying
            // use texture matrix and original texture coords to generate accurate texture coords
            vTextureCoord = aTextureCoord;
        }
    `,

    fragmentShader: `
        #ifdef GL_ES
        precision mediump float;
        #endif

        // get our varyings
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        // the uniform we declared inside our javascript
        uniform float uScrollSpeed;

        // our texture sampler (default name, to use a different name please refer to the documentation)
        uniform sampler2D uSampler0;

        float randomNoise(vec2 p) {
            return fract(6791.*sin(47.*p.x+p.y*9973.));
        }

        void main() {
            // map our texture with the texture matrix coords
            float rand = randomNoise(vTextureCoord);
            vec2 newCoord = vTextureCoord.xy;
            newCoord.y *= 1.0 + (uScrollSpeed / 1000.0 * randomNoise(vTextureCoord.xy));

            vec4 red = texture2D(uSampler0, vec2(vTextureCoord.x, vTextureCoord.y + uScrollSpeed));
            vec4 green = texture2D(uSampler0, vTextureCoord);
            vec4 blue = texture2D(uSampler0, vec2(vTextureCoord.x, vTextureCoord.y - uScrollSpeed));

            vec4 newColor = vec4(red.r, green.g, blue.b, 1.0);

            gl_FragColor = newColor;
        }
    `,
}
