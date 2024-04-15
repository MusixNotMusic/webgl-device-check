// https://webgl2fundamentals.org/webgl/lessons/webgl-cross-platform-issues.html
const WebGL = [
    'MAX_TEXTURE_SIZE',
    'MAX_VERTEX_ATTRIBS',
    'MAX_VERTEX_UNIFORM_VECTORS',
    'MAX_VARYING_VECTORS',
    'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
    'MAX_VERTEX_TEXTURE_IMAGE_UNITS',
    'MAX_TEXTURE_IMAGE_UNITS',
    'MAX_FRAGMENT_UNIFORM_VECTORS',
    'MAX_CUBE_MAP_TEXTURE_SIZE',
    'MAX_RENDERBUFFER_SIZE',
    'MAX_VIEWPORT_DIMS'
];

// https://webgl2fundamentals.org/webgl/lessons/webgl-cross-platform-issues.html
const WebGL2 = [
    'MAX_3D_TEXTURE_SIZE',
    'MAX_DRAW_BUFFERS',
    'MAX_ARRAY_TEXTURE_LAYERS',
    'MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS',
    'MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS',
    'MAX_COMBINED_UNIFORM_BLOCKS',
    'MAX_VERTEX_UNIFORM_BLOCKS',
    'MAX_FRAGMENT_UNIFORM_BLOCKS'
];

// https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Using_Extensions#%E6%89%A9%E5%B1%95%E5%88%97%E8%A1%A8
const WebGL_Extension = [
    'ANGLE_instanced_arrays',
    'EXT_blend_minmax',
    'EXT_color_buffer_float',
    'EXT_color_buffer_half_float',
    'EXT_disjoint_timer_query',
    'EXT_float_blend',
    'EXT_frag_depth',
    'EXT_shader_texture_lod',
    'EXT_sRGB',
    'EXT_texture_compression_bptc',
    'EXT_texture_compression_rgtc',
    'EXT_texture_filter_anisotropic',
    'EXT_texture_norm16',
    'KHR_parallel_shader_compile',
    'OES_element_index_uint',
    'OES_fbo_render_mipmap',
    'OES_standard_derivatives',
    'OES_texture_float',
    'OES_texture_float_linear',
    'OES_texture_half_float',
    'OES_texture_half_float_linear',
    'OES_vertex_array_object',
    'OVR_multiview2',
    'WEBGL_color_buffer_float',
    'WEBGL_compressed_texture_astc',
    'WEBGL_compressed_texture_etc',
    'WEBGL_compressed_texture_etc1',
    'WEBGL_compressed_texture_pvrtc',
    'WEBGL_compressed_texture_s3tc',
    'WEBGL_compressed_texture_s3tc_srgb',
    'WEBGL_debug_renderer_info',
    'WEBGL_debug_shaders',
    'WEBGL_depth_texture',
    'WEBGL_draw_buffers',
    'WEBGL_lose_context',
    'WEBGL_multi_draw'
]


export function checkWebGL1 () {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');

    if (gl) {
        console.log(`%c======WebGL Device Check======`, 'background: #eee; color: #3f51b5' )
        console.log('%chttps://webgl2fundamentals.org/webgl/lessons/webgl-cross-platform-issues.html', 'color: #ccc' )
        console.log('')
    
        WebGL.forEach(item => {
           const result = gl.getParameter(gl[item]);
           console.log(`%c${item}: ${result}`, 'background: #eee; color: #ff5722' )
        })

        console.log('')
    } else {
        new Error('Not support webgl');
    }
}

export function checkWebGL2 () {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');

    if (gl) {
        console.log(`%c======WebGL2 Device Check======`, 'background: #eee; color: #3f51b5' )
        console.log('%chttps://webgl2fundamentals.org/webgl/lessons/webgl-cross-platform-issues.html', 'color: #ccc' )
        console.log('' )

        WebGL2.forEach(item => {
            const result = gl.getParameter(gl[item]);
            console.log(`%c${item}: ${result}`, 'background: #eee; color: #4CAF50' )
        })
        console.log('' )
    } else {
        new Error('Not support webgl2');
    }
}

export function queryWebGLExtensions() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

    if (gl) {
        console.log(`%c======WebGL Extentsions======`, 'background: #eee; color: #3f51b5' )
        console.log('%chttps://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Using_Extensions#%E6%89%A9%E5%B1%95%E5%88%97%E8%A1%A8', 'color: #ccc' )
        console.log('' )

        const available_extensions = gl.getSupportedExtensions();
        available_extensions.forEach(item => {
            console.log(`%c${item}`, 'background: #eee; color: #2196f3' )
        })
        console.log('')
    } else {
        new Error('Not support webgl');
    }
}

export function checkWebGL () {
    checkWebGL1();
    checkWebGL2();
}