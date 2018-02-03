<template>
  <div id="paint">
    <canvas ref="myCanvas"
      @mousedown="startPaint"
      @mousemove="doPaint"
      @mouseup="stopPaint"
      @mouseenter="stopPaint"

      @touchstart="startPaint"
      @touchmove="doFingerPaint">
    </canvas>
  </div>
</template>

<script>
export default {
  data: () => ({
      isPaint: false,
      canvas: null,
      ctx: null
  }),
  methods: {
    startPaint(e) {
      this.ctx.moveTo(e.pageX, e.pageY);
      this.ctx.beginPath();
      this.isPaint = true;
    },
    doPaint(e) {
      if(this.isPaint) {
        this.ctx.lineTo(e.pageX, e.pageY);
        this.ctx.stroke();
      }
    },
    doFingerPaint(e) {
      let ct = e.changedTouches[0]
      this.ctx.lineTo(ct.clientX, ct.clientY);
      this.ctx.stroke();
    },
    stopPaint(e) {
      this.isPaint = false;
    }
  },
  mounted() {
    this.canvas          = this.$refs.myCanvas;
    this.canvas.width    = window.innerWidth;
    this.canvas.height   = window.innerHeight - 4;

    this.ctx             = this.canvas.getContext('2d');
    this.ctx.lineWidth   = 3;
    this.ctx.lineJoin    = 'round';
    this.ctx.lineCap     = 'round';
    this.ctx.strokeStyle = '#000';
  }
}
</script>


<style>
html, body, div {
  margin: 0;
  padding: 0;
}
canvas {
  background-color: yellow;
  cursor: cell;
}
</style>