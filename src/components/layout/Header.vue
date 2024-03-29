<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  MusicalNoteIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
  SwatchIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
} from "@heroicons/vue/20/solid";

const text = [
  {
    name: "Lorem Ipsum",
    description: "Generate placeholder text",
    href: "/lipsum",
    icon: DocumentTextIcon,
  },
  {
    name: "Text Analysis",
    description: "Word counter and keywords analysis tool",
    href: "/word-counter",
    icon: MagnifyingGlassCircleIcon,
  },
];

const css = [
  {
    name: "Static Type Scale",
    description: "Create a static typographic scale",
    href: "/static-type-scale",
    icon: MusicalNoteIcon,
  },
];

const color = [
  {
    name: "Palette Generator",
    description: "Create beautiful color palettes",
    href: "/palette-generator",
    icon: SwatchIcon,
  },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="w-full bg-white p-6 border-b">
    <nav class="max-w-screen-2xl w-full mx-auto px-6 flex flex-row items-center justify-between gap-6" aria-label="Global" >
      <div class="flex lg:flex-1">
        <a href="/" class="flex flex-row gap-2 justify-center items-center">
          <span class="sr-only">Crisp Tools</span>
          <img class="h-10 w-auto" src="/crisp-logo-white.svg" alt="Crisp Tools"
          />
          <span class="text-xl text-black">Crisp Tools</span>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-lg leading-6 text-blue-500" >
            Color Tools
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in color" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/>
                  </div>
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">{{ item.name }}<span class="absolute inset-0" /></a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>{{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-lg leading-6 text-blue-500" >
            Text Tools
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in text" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/>
                  </div>
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">{{ item.name }}<span class="absolute inset-0" /></a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>{{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
        <PopoverButton class="flex items-center gap-x-1 text-lg leading-6 text-blue-500" >
            CSS Tools
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in css" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/>
                  </div>
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">{{ item.name }}<span class="absolute inset-0" /></a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>{{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5 flex flex-row items-center">
            <span class="sr-only">Crisp Tools</span>
            <img
              class="h-20 w-auto"
              src="/crisp-logo-white.svg"
              alt="Crisp Tools"
            />
            <span class="text-3xl ml-4 font-semibold text-green-500">Crisp Tools</span>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Text Tools
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...text]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  CSS Tools
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...css]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
            </div>
            <!-- <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</a
              >
            </div> -->
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped></style>
