<template>
  <!-- component -->
  <header class="bg-white dark:bg-gray-800">
    <nav class="bg-white dark:bg-gray-800">
      <div class="container p-6 mx-auto">
        <div
          class="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300"
        >
          <NuxtLink
            to="/"
            :class="{ 'border-blue-500': $route.name === 'index' }"
            class="
              border-b-2 border-transparent
              hover:text-gray-800
              dark:hover:text-gray-200
              hover:border-blue-500
              mx-1.5
              sm:mx-6
            "
            >home</NuxtLink
          >

          <NuxtLink
            to="/service"
            :class="{ 'border-blue-500': $route.name === 'service' }"
            class="
              border-b-2 border-transparent
              hover:text-gray-800
              dark:hover:text-gray-200
              hover:border-blue-500
              mx-1.5
              sm:mx-6
            "
            >service</NuxtLink
          >

          <NuxtLink
            to="/price"
            :class="{ 'border-blue-500': $route.name === 'price' }"
            class="
              border-b-2 border-transparent
              hover:text-gray-800
              dark:hover:text-gray-200
              hover:border-blue-500
              mx-1.5
              sm:mx-6
            "
            >price</NuxtLink
          >

          <NuxtLink
            to="/blog"
            :class="{ 'border-blue-500': $route.name === 'blog' }"
            class="
              border-b-2 border-transparent
              hover:text-gray-800
              dark:hover:text-gray-200
              hover:border-blue-500
              mx-1.5
              sm:mx-6
            "
            >blog</NuxtLink
          >

          <a
            target="_blank"
            href="https://form.run/@hiroyuki-akimoto-hp-1615021598"
            class="
              border-b-2 border-transparent
              hover:text-gray-800
              dark:hover:text-gray-200
              hover:border-blue-500
              mx-1.5
              sm:mx-6
            "
            >contact</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>
