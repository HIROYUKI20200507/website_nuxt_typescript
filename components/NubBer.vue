<template>
    <div class="flex justify-between items-center sticky top-0 z-50">
        <div class="flex">
            <div class="mix-blend-multiply"><img src="~assets/img/logo.png" alt="HPicon" class="w-20 h-20"></div>
            <div class="text-3xl mt-3 relative font-top">Aスタジオ<br><span class="text-xs absolute top-9 left-1">poword by HIROYUKI</span></div>
        </div>
        <ul class="flex justify-between items-center gap-10">
            <li><NuxtLink to="/">Profile</NuxtLink></li>
            <li><NuxtLink to="/service">Service</NuxtLink></li>
            <li><NuxtLink to="/price">Price</NuxtLink></li>
            <li><a target="_blank" href="https://twitter.com/Akimon6134"><img class="w-7 h-7" src="~assets/img/icon/twitter.svg" alt="teitterアイコン"></a></li>
            <li><a target="_blank" href="https://www.facebook.com/hiroyuki.akimoto.77"><img class="w-7 h-7" src="~assets/img/icon/facebook.svg" alt="facebookアイコン"></a></li>
            <li>
                <Button button='contact' class="nav-button-layout"></Button>
            </li>
        </ul>
    </div>

</template>

<script>
export default {

}
</script>
