<template>
    <div
        class="absolute -z-50 inset-0 bg-[url(/resources/assets/svgs/grid_0.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
    </div>

    <div>
        <h1 class="text-3xl font-bold underline"> Main App </h1>

        <nav class="p-6 max-w-fit bg-white rounded-xl shadow-lg divide-gray-300/50">
            <ul>
                <li> <router-link to="/">* Go to Home</router-link> </li>
                <li> <router-link to="/about">* Go to About</router-link> </li>
            </ul>
        </nav>

        <div>
            <router-view> </router-view>
        </div>

    </div>
</template>

<script>
export default {
    // Your Vue application logic goes here
}
</script>
