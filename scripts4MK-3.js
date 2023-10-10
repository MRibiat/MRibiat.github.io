#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D uSampler;
varying float vShadow;
varying vec2 vTexture;
varying float vFog;

vec4 fog(vec4 color) {
color.r += (0.33 - color.r) * vFog;
color.g += (0.54 - color.g) * vFog;
color.b += (0.72 - color.b) * vFog;
return color;
}

void main(void){
vec4 color = texture2D(uSampler, vTexture);
gl_FragColor = fog(vec4(color.rgb * vShadow, color.a));
if (gl_FragColor.a == 0.0) discard;
}
