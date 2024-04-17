<script>
import SectionHeader from '@/components/layout/SectionHeader.vue';

export default {
  components: {
    SectionHeader
  },
  data() {
    return {
      
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    routes: {
      type: Array,
      required: true
    },
    routePath: {
      type: String,
      required: true
    },
    viewType: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  setup(props){
    return {
      props
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <SectionHeader :title="props.title" :icon="props.icon" :routePath="props.routePath" :viewType="props.viewType" />
    <div class="rounded-2xl border border-slate-200 p-6 mb-12 w-full max-w-screen-2xl mx-auto">
      <!-- <p v-if="$route.path !== '/color-tools'" class="text-2xl text-slate-500 pb-4">Tools for building palettes and colors</p> -->
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <router-link 
          :to="route.path" 
          v-for="route in props.routes" 
          :key="route.name" 
          class="bg-left bg-cover h-60 relative rounded-xl bg-white transition-shadow shadow hover:shadow-xl flex flex-col justify-between"
          :style="{ backgroundImage: `url(${route.image})` }"
        >
          <section class="backdrop-blur-md text-ellipsis overflow-hidden absolute bottom-0 w-full px-6 py-4 hover:py-6 transition-all bg-slate-500/30 rounded-b-xl rounded-t-xl">
            <p class="text-white drop-shadow-md font-semibold text-md mb-1 truncate text-ellipsis overflow-hidden">{{ route.name }}</p>
            <p class="text-white/60 drop-shadow-md text-sm truncate text-ellipsis overflow-hidden">{{ route.description }}</p>
          </section>
        </router-link>
      </ul>
    </div>
  </div>
</template>