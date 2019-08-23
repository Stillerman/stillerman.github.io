<template lang="pug">
.app
    vue-particles.particles(color="#dedede" :particleOpacity="0.4" :lineOpacity="0.2")
    .flex.justify-center.items-center.h-full.me
        img(src="./assets/jason.png" class="w-1/3 h-1/3" :style="offsetStyle").rounded-full.shadow-lg
    .h-screen.aqua
        .flex.justify-center.sexy
            p.text-4xl.text-gray-200.m-5 Brilliant Websites
</template>

<script>
export default {
    data () {
        return {
            offsetX: 0,
            offsetY: 0
        }
    },
    computed: {
        offsetStyle () {
            return {
                'margin-left': this.offsetX,
                'margin-top': this.offsetY
            }
        }
    },
    mounted () {
        this.$el.addEventListener('mousemove', (evt) => {
            this.offsetX = evt.screenX / 20
            this.offsetY = evt.screenY / 20
        })
    },
    methods: {
        shuffle () {
            this.offsetX = Math.random() * 20
            this.offsetY = Math.random() * 20
        }
    }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.particles {
    position: absolute;
}

.me {
    z-index: 9999;
}

.sexy {
    font-family: 'Livvic', sans-serif;
}

.particles-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

#particles-js {
  z-index: -1;
  background-image: linear-gradient(to right, rgb(104, 62, 0) , rgb(179, 151, 76));
  width: 100%;
  height: 100vh;
}

.aqua {
  background-image: linear-gradient(to right, rgb(104, 62, 0) , rgb(179, 151, 76));
}

.app {
    @apply h-full;
    transition: all 1;
}
</style>