<template lang="pug">
.app
  vue-particles.particles(color="#dedede" :particleOpacity="0.4" :lineOpacity="0.2")
  .flex.justify-center
    p.text-3xl.font.mt-5.text-white Jason Stillerman
  .flex.justify-center
    p.text-white.bold.text Frontend / Backend Developer
  .flex.justify-center.items-center.me.fixed
    img(src="./assets/jason.png" class="w-3/5" :style="offsetStyle").rounded-full.shadow-lg
  .h-screen.aqua
    .flex.justify-center.sexy
        vue-typed-js(
          :strings="['Reactive.', 'Cheap.', 'Modern.', 'Sleek.', 'Sexy.', 'Responsive.', 'Quickly Delivered.']"
          :loop="true"
          :typeSpeed="70"        :smartBackspace="true"
          :backSpeed="50"
          :startDelay="500"
          :backDelay="1000")
          p.text-4xl.text-gray-200.m-5
            | My Websites are 
            span.typing

</template>

<script>
export default {
  data() {
    return {
      offsetX: 0,
      offsetY: 0
    };
  },
  computed: {
    offsetStyle() {
      return {
        "margin-left": this.offsetX,
        "margin-top": this.offsetY
      };
    }
  },
  mounted() {
    this.$el.addEventListener("mousemove", evt => {
      this.offsetX = evt.screenX / 20;
      this.offsetY = evt.screenY / 20;
    });
  }
};
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

.particles {
  position: absolute;
}

.me {
  z-index: 9999;
}

.font {
  font-family: 'Montserrat', sans-serif;
}

.sexy {
  font-family: "Livvic", sans-serif;
}

.particles-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

#particles-js {
  z-index: -1;
  background-image: linear-gradient(
    to right,
    rgb(104, 62, 0),
    rgb(179, 151, 76)
  );
  width: 100%;
  height: 100vh;
}

.aqua {
  background-image: linear-gradient(
    to right,
    rgb(104, 62, 0),
    rgb(179, 151, 76)
  );
}

.app {
  @apply h-full;
  transition: all 1;
}
</style>