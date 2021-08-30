<template>
    <div>
        <NubBer />
        <div class="profile-main flex justify-center items-center gap-20 font-body m-auto" id="profile-main">
            <div class="profile-img w-2/3"><img class="img-style object-cover" src="~assets/img/profile.jpg" alt="profile-img"></div>
            <div class="profile-contents bg-gray-100 w-3/5">
                <div class="profile-name text-5xl leading-10 pb-4">Profile</div>
                <div class="title-main text-2xl leading-10">秋本 裕之</div>
                <p class="title-sub-item">
                    1992年山口県生まれ。<br>
                    大学の経営学部卒業後品川の大田市場勤務し半年で退職。
                    その後半年のニート×フリーター期間を経て、人材派遣会社で営業職に従事。
                    社内の制度を利用し、同グループのデジタルマーケティング部開発チームに移動。
                    チーム内では、フロントエンドエンジニアとしてシステム開発業務を担う。
                    複業でもベンチャー企業に参画し、開発業務に従事しています。<br>
                </p>
                    <br>
                    <div class="title-main text-xl leading-10">触れた言語・ライブラリ・フレームワーク</div>
                <p class="title-sub-item">
                    HTML｜CSS｜SCSS｜Tailwind CSS｜JavaScript｜React｜Redux｜Vue.js｜Vuex｜Laravel
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
